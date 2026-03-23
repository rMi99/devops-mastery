# Runbook - Deploy HTML, Node.js, and PHP Apps on AWS EC2

## Goal

Deploy 3 kinds of apps on a Linux EC2 server:

* **Static HTML app**
* **Node.js app**
* **PHP app**

Using:

* **AWS EC2**
* **Ubuntu Linux**
* **Nginx**
* **systemd**
* **SSH**

---

# 1. Prerequisites

You need:

* AWS account
* EC2 Ubuntu instance
* `.pem` key pair
* Security group allowing:

  * `22` SSH
  * `80` HTTP
  * `443` HTTPS if needed later
* terminal access

---

# 2. Connect to EC2

```bash
chmod 400 mykey.pem
ssh -i mykey.pem ubuntu@YOUR_PUBLIC_IP
```

Update server:

```bash
sudo apt update && sudo apt upgrade -y
```

Install Nginx:

```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

Check:

```bash
systemctl status nginx
```

---

# 3. Deploy a Static HTML App

## Step 1 — Create project directory

```bash
sudo mkdir -p /var/www/html-app
```

## Step 2 — Add HTML files

Example:

```bash
sudo nano /var/www/html-app/index.html
```

Paste:

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML App</title>
</head>
<body>
  <h1>Hello from HTML App</h1>
  <p>Deployed on AWS EC2 using Nginx</p>
</body>
</html>
```

## Step 3 — Set permissions

```bash
sudo chown -R www-data:www-data /var/www/html-app
sudo chmod -R 755 /var/www/html-app
```

## Step 4 — Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/html-app
```

Add:

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/html-app;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Enable config:

```bash
sudo ln -s /etc/nginx/sites-available/html-app /etc/nginx/sites-enabled/
```

Test config:

```bash
sudo nginx -t
```

Reload Nginx:

```bash
sudo systemctl reload nginx
```

Now open:

```text
http://YOUR_PUBLIC_IP
```

---

# 4. Deploy a Node.js App

For Node.js, Nginx acts as a **reverse proxy**.

## Step 1 — Install Node.js and npm

```bash
sudo apt install nodejs npm -y
```

Check versions:

```bash
node -v
npm -v
```

## Step 2 — Create app directory

```bash
mkdir -p ~/node-app
cd ~/node-app
```

## Step 3 — Create simple Node.js app

```bash
nano app.js
```

Paste:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Node.js App</h1><p>Running on EC2 behind Nginx</p>");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run it:

```bash
node app.js
```

Test locally on server:

```bash
curl http://localhost:3000
```

Stop with `Ctrl + C`.

---

## Step 4 — Create systemd service for Node.js app

```bash
sudo nano /etc/systemd/system/node-app.service
```

Add:

```ini
[Unit]
Description=Node.js App
After=network.target

[Service]
ExecStart=/usr/bin/node /home/ubuntu/node-app/app.js
WorkingDirectory=/home/ubuntu/node-app
Restart=always
User=ubuntu
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Reload systemd:

```bash
sudo systemctl daemon-reload
```

Start service:

```bash
sudo systemctl start node-app
sudo systemctl enable node-app
```

Check status:

```bash
sudo systemctl status node-app
```

---

## Step 5 — Configure Nginx as reverse proxy

```bash
sudo nano /etc/nginx/sites-available/node-app
```

Add:

```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable config:

```bash
sudo ln -s /etc/nginx/sites-available/node-app /etc/nginx/sites-enabled/
```

Remove default or conflicting configs if needed:

```bash
sudo rm -f /etc/nginx/sites-enabled/default
```

Test Nginx:

```bash
sudo nginx -t
```

Reload:

```bash
sudo systemctl reload nginx
```

Open:

```text
http://YOUR_PUBLIC_IP
```

---

# 5. Deploy a PHP App

PHP usually works with **PHP-FPM** and Nginx.

## Step 1 — Install PHP and PHP-FPM

```bash
sudo apt install php-fpm php-mysql -y
```

Check PHP:

```bash
php -v
```

Check PHP-FPM:

```bash
sudo systemctl status php8.1-fpm
```

Your version may differ, such as:

* `php8.1-fpm`
* `php8.2-fpm`
* `php8.3-fpm`

Check installed service:

```bash
systemctl list-units | grep php
```

---

## Step 2 — Create PHP app directory

```bash
sudo mkdir -p /var/www/php-app
```

## Step 3 — Add PHP file

```bash
sudo nano /var/www/php-app/index.php
```

Paste:

```php
<?php
echo "<h1>Hello from PHP App</h1>";
echo "<p>Running on AWS EC2 with Nginx and PHP-FPM</p>";
?>
```

Set ownership:

```bash
sudo chown -R www-data:www-data /var/www/php-app
sudo chmod -R 755 /var/www/php-app
```

---

## Step 4 — Configure Nginx for PHP

```bash
sudo nano /etc/nginx/sites-available/php-app
```

Add:

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/php-app;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

If your PHP version is different, update this line:

```nginx
fastcgi_pass unix:/run/php/php8.1-fpm.sock;
```

For example:

```nginx
fastcgi_pass unix:/run/php/php8.2-fpm.sock;
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/php-app /etc/nginx/sites-enabled/
```

Test config:

```bash
sudo nginx -t
```

Reload Nginx:

```bash
sudo systemctl reload nginx
```

Open:

```text
http://YOUR_PUBLIC_IP
```

---

# 6. If You Want All 3 Apps on One Server

Best approach: use different paths or domains.

## Option A — Different paths

* `http://IP/html`
* `http://IP/node`
* `http://IP/php`

## Option B — Different subdomains

* `html.example.com`
* `node.example.com`
* `php.example.com`

For teaching, **different paths** is easier.

---

# 7. Example Nginx Config for All 3 on One Server

```bash
sudo nano /etc/nginx/sites-available/multi-app
```

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/html-app;
    index index.html index.php;

    location / {
        try_files $uri $uri/ =404;
    }

    location /node/ {
        proxy_pass http://127.0.0.1:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }

    location /php/ {
        alias /var/www/php-app/;
        index index.php index.html;
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ ^/php/(.+\.php)$ {
        alias /var/www/php-app/$1;
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME /var/www/php-app/$1;
        include fastcgi_params;
    }
}
```

This works, but for beginners it is cleaner to deploy one app type at a time.

---

# 8. Logs and Troubleshooting

## Nginx logs

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## Node.js service logs

```bash
sudo journalctl -u node-app -f
```

## PHP-FPM logs

```bash
sudo journalctl -u php8.1-fpm -f
```

Version may differ.

---

# 9. Verification Commands

## HTML app

```bash
curl http://localhost
```

## Node.js app directly

```bash
curl http://localhost:3000
```

## PHP app

```bash
curl http://localhost
```

## Check services

```bash
sudo systemctl status nginx
sudo systemctl status node-app
sudo systemctl status php8.1-fpm
```

---

# 10. Common Issues

## Nginx config test fails

Run:

```bash
sudo nginx -t
```

Fix syntax errors before reload.

## Node app not starting

Check:

```bash
sudo systemctl status node-app
sudo journalctl -u node-app -n 50
```

## PHP page downloads instead of executing

Usually PHP-FPM is missing or wrong socket path.

Check:

```bash
systemctl list-units | grep php
ls /run/php/
```

## Port 80 not reachable

Check AWS security group allows HTTP on port 80.

---

# 11. Recommended Teaching Flow

If you are teaching students, do it in this order:

1. Deploy **HTML app** first
   Students understand static hosting.

2. Deploy **PHP app** second
   Students learn server-side execution with PHP-FPM.

3. Deploy **Node.js app** third
   Students learn app process + reverse proxy + systemd.

That gives them a clean progression:

* static content
* interpreted backend
* runtime application server

---

# 12. Quick Command Summary

## HTML

```bash
sudo mkdir -p /var/www/html-app
sudo nano /var/www/html-app/index.html
sudo nano /etc/nginx/sites-available/html-app
sudo ln -s /etc/nginx/sites-available/html-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Node.js

```bash
sudo apt install nodejs npm -y
mkdir ~/node-app && cd ~/node-app
nano app.js
node app.js
sudo nano /etc/systemd/system/node-app.service
sudo systemctl daemon-reload
sudo systemctl start node-app
sudo systemctl enable node-app
sudo nano /etc/nginx/sites-available/node-app
sudo nginx -t
sudo systemctl reload nginx
```

## PHP

```bash
sudo apt install php-fpm php-mysql -y
sudo mkdir -p /var/www/php-app
sudo nano /var/www/php-app/index.php
sudo nano /etc/nginx/sites-available/php-app
sudo nginx -t
sudo systemctl reload nginx
```

---
