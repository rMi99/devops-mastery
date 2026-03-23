# **Runbook — Networking & Git Fundamentals (DevOps Week 2)**

## 🎯 Goal

Understand core networking concepts and Git workflows used in real-world DevOps:

* How the internet works (request flow)
* OSI model (7 layers)
* TCP/IP, DNS, Load Balancing
* Reverse Proxy (important in real systems 🚀)
* Cloud networking basics
* Git version control & collaboration

---

# 🌐 1. Request Flow Overview

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AYVjZCxaKihEe4jSl1bMshQ.png)

![Image](https://media.licdn.com/dms/image/v2/D4D22AQGYy_UUeyDISg/feedshare-shrink_1280/B4DZk4QbL.JAAs-/0/1757585455347?e=2147483647\&t=xg894Gjvp4jaFyQeGnj09OBNoRGQ3PopdE1eqUMSGNg\&v=beta)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1028/1%2AqePw6WQAm1iW7Pq6heSvDQ.png)

![Image](https://miro.medium.com/1%2ARTG5CBW7BIfCFLirf4S5XA.png)

When a user opens a website:

1. Browser sends a request
2. DNS resolves domain → IP address
3. TCP connection is established
4. HTTP request is sent
5. Server responds with data
6. Browser renders the page

👉 This is the **foundation of everything in DevOps**

---

# 🧱 2. OSI Model (7 Layers)

![Image](https://images.openai.com/static-rsc-3/v7CVM4JUpSDnT-VQgLU2IWuvSWhtVk1AmGHVmdwB0xlGhdF8QLRZ3xd9zLrXOFyz4vhuErazenN_QpndJqroC8eFvwq4c-cYpwiQIP4-dOA?purpose=fullsize\&v=1)

![Image](https://images.openai.com/static-rsc-3/X-_KFBBeVMdf7MPPDmlsDAIvrnMPX943jHPPFsZyibqQ_5l3qvJv8dixoI5jVGj9xcu4XxKQiOKgSFMpXT1bovtxHeFyKjdXdvqFb0ET1yk?purpose=fullsize\&v=1)

![Image](https://images.openai.com/static-rsc-3/aYoO7ZisGkk4PBVULClsTzjzIvXcZazSuAv36PREQ4OsCcz-pp-lNf7dBlJ-aswM-fShajCo7suANgcrU6eyUHFF2cnTFrwlk0vk77TxXm0?purpose=fullsize\&v=1)

![Image](https://images.openai.com/static-rsc-3/0WQejBCqkoIauD04XRwVXXvBGbrbp53tsxecM7fpalksI0dXtqgEBcHZnBt7XeweVIQVbpN50ARgilxMaqesBWkhLJhvgOdFEFyOpjALOZw?purpose=fullsize\&v=1)

| Layer | Name         | Example        |
| ----- | ------------ | -------------- |
| 7     | Application  | HTTP, DNS      |
| 6     | Presentation | SSL/TLS, JSON  |
| 5     | Session      | Login sessions |
| 4     | Transport    | TCP, UDP       |
| 3     | Network      | IP routing     |
| 2     | Data Link    | MAC, Switch    |
| 1     | Physical     | Cables         |

---

# 🤝 3. TCP 3-Way Handshake

![Image](https://static.afteracademy.com/images/what-is-a-tcp-3-way-handshake-process-three-way-handshaking-terminating-connection-6ea4a4c72d165361.jpg)

![Image](https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Schaubilder/EN-tcp.png)

![Image](https://static.afteracademy.com/images/what-is-a-tcp-3-way-handshake-process-three-way-handshaking-establishing-connection-6a724e77ba96e241.jpg)

![Image](https://scaler.com/topics/images/steps-of-a-3-way-handshake-for-establishing-the-connection.webp)

Steps:

1. SYN → Client requests connection
2. SYN-ACK → Server responds
3. ACK → Connection established

---

# 🌍 4. DNS (Domain Name System)

![Image](https://images.openai.com/static-rsc-3/v7iHjuBYNqVRIO8sGA2khay3jxWvJ-wQK_-u_3UTtvcztya5Ve846LVrhaOfj4drOYlXNwySKiKw87vsxVi99mTSoj1OXp8hdBEHhqgasME?purpose=fullsize\&v=1)

![Image](https://cf-assets.www.cloudflare.com/slt3lc6tev37/54fXQrFHYvhAM7jIIpKEX7/8fb09ba9998d14862e80f5c9cc6d2170/complete-dns-lookup-and-webpage-query.png)

![Image](https://www.researchgate.net/publication/356651851/figure/fig1/AS%3A1097935693590528%401638779676263/DNS-structure-and-domain-name-resolution-flowchart.png)

![Image](https://miro.medium.com/1%2AgoSb1oow5UBNF3KkzvOX8A.png)

* Converts domain → IP address
* Example:

  ```
  google.com → 142.x.x.x
  ```

---

# ⚖️ 5. Load Balancing

![Image](https://substackcdn.com/image/fetch/%24s_%214Uyj%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a1213e2-86cb-4fa8-bf72-e37ffe0da44d_2250x2624.heic)

![Image](https://miro.medium.com/1%2AhXuuhny2NRwVopbkfz5caw.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AGb7hi5pqKmYYxEIUCJylHw.gif)

![Image](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2019/10/06/illustration-2.png)

* Distributes traffic across multiple servers

**Why?**

* Prevent overload
* Improve availability
* Ensure scalability

---

# 🔁 6. Reverse Proxy (🔥 MUST KNOW for DevOps)

![Image](https://journaldev.nyc3.cdn.digitaloceanspaces.com/2019/03/nginx-reverse-proxy.png)

![Image](https://www.theserverside.com/rms/onlineimages/forward_proxy_vs_reverse_proxy-f_mobile.png)

![Image](https://enhelp.supermap.io/iP/img/Reverse_Proxy.png)

![Image](https://itknowledgeexchange.techtarget.com/coffee-talk/files/2022/05/nginx-reverse-proxy-diagram.jpg)

## 📌 What is a Reverse Proxy?

A **Reverse Proxy** sits between users and backend servers.

👉 Client → Reverse Proxy → Backend Server

## 🔥 Why we use it:

* Security (hide backend servers)
* SSL termination (HTTPS handled here)
* Load balancing
* Caching
* Routing traffic to different services

## 🚀 Example (Nginx):

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://backend_server;
    }
}
```

---

# 🌐 7. IP Addressing

## Public IP

* Accessible from the internet

## Private IP

* Internal communication only

👉 Best Practice:

* DB servers → Private IP only

---

# 🔌 8. Ports

| Port | Service |
| ---- | ------- |
| 80   | HTTP    |
| 443  | HTTPS   |
| 22   | SSH     |
| 3306 | MySQL   |

---

# 🔒 9. Firewalls / Security Groups

* Control access to ports

Example:

* Allow SSH (22) only from your IP

👉 Principle: **Least Privilege**

---

# ☁️ 10. VPC (Virtual Private Cloud)

![Image](https://docs.aws.amazon.com/images/vpc/latest/userguide/images/vpc-example-private-subnets.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2A-GPv0XxrSXwVJnlLC70BJQ.png)

![Image](https://docs.aws.amazon.com/images/vpc/latest/userguide/images/subnet-association.png)

![Image](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2020/03/19/Slide1.png)

Includes:

* Subnets
* Route tables
* Internet Gateway

---

# 🚀 11. CDN (Content Delivery Network)

![Image](https://images.openai.com/static-rsc-3/e2znvm35PAiYV6duHIz53PovPVo6M8M2HLmfVZWgdUaKnlnIi0hFGz3VxHGWFgenHKq8UBi8z8mIstKtv-5Dzd087QTUv5eu0TCFU0Tcbzg?purpose=fullsize\&v=1)

![Image](https://substackcdn.com/image/fetch/%24s_%21rycF%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2785489-6c63-40cf-bb4a-1b8656a81d01_1600x1104.png)

![Image](https://d1tcczg8b21j1t.cloudfront.net/strapi-assets/19_What_is_origin_server_1_18744a91fe.png)

![Image](https://d1tcczg8b21j1t.cloudfront.net/strapi-assets/19_What_is_origin_server_2_68abe5f7ea.png)

* Delivers content from nearest location
* Reduces latency

Examples:

* Images
* Videos
* Static files

---

# 🔧 12. Git Fundamentals

## What is Git?

* Distributed version control system
* Tracks changes in code

---

# 🔄 13. Git Workflow

```bash
git checkout -b newBranch
git checkout newBranch    -> existing branch checkout
git add .
git commit -m "message"
git push
```

Flow:

* Working Directory → Staging → Commit → Remote

---

# 🌿 14. Branching

```bash
feature/login
feature/payment
```

👉 Always use branches for features

---

# 🔀 15. Pull Requests (PR)

Workflow:

1. Create branch
2. Push code
3. Open PR
4. Review
5. Merge

---

# ⚠️ 16. Merge Conflicts

* Happens when same code is modified

Fix:

```bash
git status
```

Then manually resolve

---

# 🛠️ 17. Useful Commands

## Networking

```bash
ping google.com
curl http://example.com
```

## Git

```bash
git status
git log
git diff
```

---

# 🧯 18. Common Issues

## Website not loading

* Check DNS
* Check server

## Slow response

* Check latency
* Check load balancer

## Git errors

* Check conflicts
* Use `git status`

---

# 📚 19. Recommended Learning Flow

1. Understand request flow
2. Learn OSI model
3. Practice networking tools
4. Learn Git basics
5. Practice branching & PRs

---

# 🎯 20. Key Takeaways

* Networking = how data travels
* Git = how code is managed
* Reverse Proxy = how traffic is controlled 🔥
* DevOps = everything working together

---

# ⚡ 21. Quick Summary

* OSI = 7 layers
* TCP = reliable, UDP = fast
* DNS = domain → IP
* Reverse Proxy = gateway to backend
* Load Balancer = distribute traffic
* Git = version control
* PR = safe collaboration

---


