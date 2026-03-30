# **Runbook - Bash Scripting & Automation (DevOps Week 3)**

## 🎯 Goal

Automate repetitive DevOps work with Bash and tie scripts into real pipelines:

* Variables & arguments
* Loops & conditionals
* Functions & modular scripts
* Cron jobs (scheduling)
* Log monitoring automation
* Deployment scripts and CI/CD hooks (e.g. GitHub Actions → SSH → `deploy.sh`)

---

# 🧠 1. What Is Bash & Why Automation?


* **Bash** = Bourne Again Shell — default on many Linux servers.
* You use it to run commands, glue tools together, and run **repeatable** steps (deploy, backup, health checks).

**Without automation:** slow, error-prone, hard to audit.  
**With Bash + scheduling + CI/CD:** consistent, faster, closer to production practice.

---

# 📦 2. Script Basics & Execution Flow


## Structure

```bash
#!/bin/bash
set -euo pipefail   # recommended for safer scripts (fail fast, catch unset vars)

echo "Hello DevOps"
```

## Make it executable & run

```bash
chmod +x script.sh
./script.sh
```

`#!/bin/bash` tells the kernel which interpreter runs the file. `chmod +x` adds execute permission.

---

# 🔤 3. Variables & Arguments

![Image](https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg)

![Image](https://miro.medium.com/1*RTG5CBW7BIfCFLirf4S5XA.png)

![Image](https://cf-assets.www.cloudflare.com/slt3lc6tev37/54fXQrFHYvhAM7jIIpKEX7/8fb09ba9998d14862e80f5c9cc6d2170/complete-dns-lookup-and-webpage-query.png)

![Image](https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Schaubilder/EN-tcp.png)

## Variables

```bash
NAME="Epic Learn"
echo "Welcome $NAME"
```

## Positional arguments

```bash
#!/bin/bash
echo "Hello $1"
```

```bash
./script.sh Amila
# Output: Hello Amila
```

| Variable | Meaning        |
| -------- | -------------- |
| `$0`     | Script name    |
| `$1`…    | Arguments      |
| `$#`     | Argument count |
| `$@`     | All arguments  |

---

# 🔁 4. Loops (Repeat Tasks)


## For loop

```bash
for i in {1..5}; do
  echo "Iteration $i"
done
```

## While loop

```bash
i=1
while [ "$i" -le 5 ]; do
  echo "Count $i"
  i=$((i + 1))
done
```

**DevOps uses:** iterate hosts, files, services, or lines from a config.

---

# 🔀 5. Conditionals (Decisions)


```bash
if [ -f "file.txt" ]; then
  echo "File exists"
else
  echo "File not found"
fi
```

| Test | Meaning           |
| ---- | ----------------- |
| `-f` | Regular file      |
| `-d` | Directory         |
| `-z` | Empty string      |
| `-n` | Non-empty string  |

**DevOps uses:** only deploy if artifact exists, check disk, validate env vars.

---

# 🧩 6. Functions (Reusable Blocks)

![Image](https://opensource.com/sites/default/files/lead-images/bash_command_line.png)


```bash
log() {
  echo "[$(date -Iseconds)] $*"
}

log "Starting deployment"
log "Done"
```

Keeps scripts readable and avoids copy-paste.

---

# ⏰ 7. Cron Jobs (Scheduling)


Cron runs commands on a schedule on the server. The diagrams here show **time-based and recurring operations** in real environments (the same mindset as backups, rotations, and fleet tasks — expressed on one machine with `crontab`).

## Field layout

```
* * * * * command
│ │ │ │ │
│ │ │ │ └── Day of week (0–7, Sunday = 0 or 7)
│ │ │ └──── Month (1–12)
│ │ └────── Day of month (1–31)
│ └──────── Hour (0–23)
└────────── Minute (0–59)
```

## Example — daily at midnight

```bash
0 0 * * * /home/ubuntu/backup.sh
```

## Edit your crontab

```bash
crontab -e
```

**DevOps uses:** backups, log rotation, health checks, periodic pulls (prefer proper CI/CD for deploys when possible).

---

# 📊 8. Log Monitoring Automation

```bash
#!/bin/bash
LOG_FILE="/var/log/syslog"

if grep -q "ERROR" "$LOG_FILE"; then
  echo "ERROR detected in $LOG_FILE"
fi
```

Count errors:

```bash
ERROR_COUNT=$(grep -c "ERROR" "$LOG_FILE" || true)
if [ "${ERROR_COUNT}" -gt 5 ]; then
  echo "Too many errors: ${ERROR_COUNT}"
fi
```

**Ideas:** alert hooks, integration later with CloudWatch / centralized logging in later weeks.

---

# 🚀 9. Real-World Deployment Script (Server-Side)

Runs on the EC2/host after CI connects via SSH:

```bash
#!/bin/bash
set -euo pipefail

echo "Starting deployment..."
cd /var/www/app || exit 1
git pull origin main
npm ci
pm2 restart app || true
echo "Deployment completed."
```

Keep secrets out of this file; use env vars or your orchestrator’s secret store.

---

# 🔗 10. CI/CD — GitHub Actions → SSH → Bash


Push to a branch can trigger a job that checks out the repo and runs a remote script over SSH — same pattern as Week 7, but you can start here with Bash + Actions. The images above illustrate **traffic flow** (GitHub’s runner reaching your server through SSH, similar to clients reaching backends through a gateway).

## Example workflow (secrets & variables — avoid hardcoding)

Use **Secrets** for private keys and hosts; use **Variables** for non-sensitive defaults like SSH username when your org allows it. Never commit `.pem` files.

```yaml
name: Deploy

on:
  push:
    branches:
      - lec # your deployment branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy to server
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ vars.DEPLOY_USER }}
          port: ${{ vars.SSH_PORT }}
          key: ${{ secrets.EC2_KEY }}
          script: |
            bash /var/www/test-devOps-git/deploy.sh
```

**Setup notes:**

* Put the **full** private key text in `EC2_KEY` (same as `cat key.pem`), not a path on the runner.
* Under **Settings → Secrets and variables → Actions**, add repository **Variables** `DEPLOY_USER` (e.g. `ubuntu`) and `SSH_PORT` (e.g. `22`) so usernames and ports are not hardcoded in the YAML.
* Use `appleboy/ssh-action@v1` (or a specific patch tag) instead of `@master` for reproducible builds.

---

# 🛠️ 11. Useful Bash Commands

```bash
echo "text"
cat file.txt
grep "word" file.txt
chmod +x script.sh
ps aux
```

---

# 🧯 12. Common Issues

| Problem              | What to check                          |
| -------------------- | -------------------------------------- |
| Script won’t run     | `chmod +x script.sh`, correct shebang  |
| Permission denied    | File perms, user, `sudo` only if needed |
| Cron silent failures | `MAILTO`, log to file, `grep CRON /var/log/syslog` |
| SSH deploy fails     | Key in secret, host/username/port, SG allows 22 |

---

# 📚 13. Recommended Learning Flow

1. Run small scripts locally or on a lab VM.
2. Add `set -euo pipefail` and fix failures deliberately.
3. Schedule one harmless job with cron (e.g. log line to `/tmp`).
4. Wire a **test** branch to GitHub Actions + SSH to a non-production box.

---

# 🎯 14. Key Takeaways

* Bash is the glue for admins and DevOps on Linux.
* Loops, tests, and functions keep scripts maintainable.
* Cron schedules **on-box** work; CI/CD schedules **trusted pipeline** work.
* Secrets belong in GitHub Secrets / vaults — not in the repo.

---

# ⚡ 15. Quick Summary

* Variables & `$1`… = inputs
* Loops = batch work
* `if` / `test` = safe branches
* Functions = reuse
* Cron = time-based automation
* GitHub Actions + SSH + `deploy.sh` = common deploy pattern

---

# 🧪 16. Home Assignment

**Task 1:** Script that takes a name and prints a greeting.

**Task 2:** If a directory does not exist, create it.

**Task 3:** Cron entry to run a script every minute (lab only — document the line you used).

**Task 4:** Script that scans a log file and prints an alert if `ERROR` appears.

**Task 5:** Deployment script: `git pull` + restart app; pair with a GitHub Actions workflow using Secrets/Variables (no keys in YAML).

---

**Pro tip:** If a step is repeatable and audited the same way every time, automate it — manual runs belong in exceptions, not the default.
