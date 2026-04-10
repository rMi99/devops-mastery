# **Runbook - AWS Core Services (DevOps Week 4)**

## 🎯 Goal

Understand and work with the foundational AWS services every DevOps engineer needs:

- IAM — Identity and Access Management
- EC2 — Elastic Compute Cloud
- EBS — Elastic Block Store
- S3 — Simple Storage Service
- VPC — Virtual Private Cloud (Subnets, Security Groups, Route Tables)

---

# 🧠 1. The AWS Shared Responsibility Model

![AWS Shared Responsibility Model](https://d1.awsstatic.com/security-center/Shared_Responsibility_Model_V2.59d1eccec334b366627e9295b304202faf7b899b.jpg)

Before touching any service, know who owns what:


| AWS Responsibility (Security **of** the Cloud) | Your Responsibility (Security **in** the Cloud)   |
| ---------------------------------------------- | ------------------------------------------------- |
| Physical data centers, hardware, networking    | IAM users, policies, MFA                          |
| Hypervisor, managed service patches            | OS patches on EC2, firewall rules (SGs, NACLs)    |
| Global infrastructure (Regions, AZs)           | Data encryption, access control, application code |


---

# 🔐 2. IAM — Identity and Access Management

![AWS IAM Overview](https://d2908q01vomqb2.cloudfront.net/22d200f8670dbdb3e253a90eee5098477c95c23d/2023/08/01/img1-4-1024x524.png)

IAM controls **who** can do **what** in your AWS account. It is global (not region-specific).

### How IAM Works — Authentication → Authorization → Access

```
┌──────────────┐      ┌─────────────────┐      ┌────────────────┐
│  Principal    │ ──►  │  Authentication  │ ──►  │  Authorization  │
│  (User/Role)  │      │  (Who are you?)  │      │  (What can you  │
│               │      │  Credentials     │      │   do? Policies) │
└──────────────┘      └─────────────────┘      └───────┬────────┘
                                                        │
                                                        ▼
                                                ┌────────────────┐
                                                │    Access       │
                                                │  (Perform       │
                                                │   actions on    │
                                                │   resources)    │
                                                └────────────────┘
```

## Core Concepts


| Concept       | What It Is                                                                |
| ------------- | ------------------------------------------------------------------------- |
| **Root User** | Full account owner — lock it away, enable MFA, never use for daily work   |
| **IAM User**  | Individual identity (person or app) with long-term credentials            |
| **IAM Group** | Collection of users — attach policies to the group, not individual users  |
| **IAM Role**  | Temporary identity assumed by users, services, or apps — no password/keys |
| **Policy**    | JSON document that defines Allow / Deny permissions                       |


## Policy Structure (JSON)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```


| Field       | Meaning                                          |
| ----------- | ------------------------------------------------ |
| `Effect`    | `Allow` or `Deny`                                |
| `Action`    | API call(s) to permit/deny (e.g. `s3:PutObject`) |
| `Resource`  | ARN of the target resource                       |
| `Condition` | Optional — restrict by IP, MFA, time, tags, etc. |


### IAM Users, Groups, Roles & Policies — How They Connect

```
                    ┌─────────────────────────────┐
                    │        AWS Account           │
                    └──────────────┬──────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            │                      │                      │
     ┌──────▼──────┐       ┌──────▼──────┐       ┌───────▼──────┐
     │  IAM Users   │       │  IAM Groups  │       │  IAM Roles    │
     │  (people /   │       │  (dev, ops,  │       │  (EC2, Lambda │
     │   apps)      │       │   admin)     │       │   CI/CD)      │
     └──────┬──────┘       └──────┬──────┘       └───────┬──────┘
            │                      │                      │
            └──────────────────────┼──────────────────────┘
                                   │
                          ┌────────▼────────┐
                          │   IAM Policies   │
                          │  (JSON Allow /   │
                          │   Deny rules)    │
                          └────────┬────────┘
                                   │
                          ┌────────▼────────┐
                          │  AWS Resources   │
                          │  (S3, EC2, RDS…) │
                          └─────────────────┘
```

## Best Practices

- **Least privilege** — grant only the permissions actually needed.
- **MFA everywhere** — especially root and console users.
- **Roles over keys** — EC2 instances, Lambdas, and CI/CD should assume roles, not store access keys.
- **Never commit credentials** — use environment variables, instance profiles, or a secrets manager.

## Useful CLI Commands

```bash
aws iam list-users
aws iam create-user --user-name deploy-bot
aws iam attach-user-policy --user-name deploy-bot \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess
aws sts get-caller-identity   # "whoami" for AWS
```

---

# 🖥️ 3. EC2 — Elastic Compute Cloud

![EC2 Instance Naming](https://justingarrison.com/img/ec2-names-infographic.jpg)

EC2 gives you virtual machines (instances) in the cloud. This is the workhorse for running applications, APIs, and anything that needs a server.

### EC2 at a Glance

```
┌───────────────────────────────────────────────────────────┐
│                     EC2 Instance                          │
│                                                           │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐ │
│  │     AMI      │  │ Instance Type │  │   Key Pair       │ │
│  │ (OS Image)   │  │ (CPU / RAM)   │  │ (SSH Access)     │ │
│  │ Ubuntu,      │  │ t2.micro,     │  │ my-key.pem       │ │
│  │ Amazon Linux │  │ m6i.large     │  │                  │ │
│  └─────────────┘  └──────────────┘  └──────────────────┘ │
│                                                           │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐ │
│  │ Security     │  │  EBS Volume   │  │   IAM Role       │ │
│  │ Group (FW)   │  │ (Root Disk)   │  │ (API Access)     │ │
│  └─────────────┘  └──────────────┘  └──────────────────┘ │
│                                                           │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  User Data (Bootstrap Script — runs on first boot)   │ │
│  └──────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────┘
```

## Launching an Instance — What You Choose


| Setting            | What to Pick                                                      |
| ------------------ | ----------------------------------------------------------------- |
| **AMI**            | OS image — Amazon Linux 2023, Ubuntu 24.04, etc.                  |
| **Instance Type**  | CPU/RAM combo — `t2.micro` (free tier), `t3.medium`, `m6i.large`… |
| **Key Pair**       | SSH `.pem` key for login — create once, download, **never share** |
| **Security Group** | Firewall rules (covered in VPC section below)                     |
| **Storage (EBS)**  | Root volume size & type (next section)                            |
| **IAM Role**       | Instance profile so the VM can call AWS APIs without access keys  |
| **User Data**      | Bootstrap script that runs on first boot                          |


## User Data Example (runs as root on first boot)

```bash
#!/bin/bash
apt-get update -y
apt-get install -y nginx
systemctl enable --now nginx
```

## Instance Lifecycle

```
launch → running ↔ stopped → terminated
                  ↕
              rebooted
```

- **Stopped** — no compute charges, EBS still billed.
- **Terminated** — instance deleted; root EBS deleted by default.

## Connecting

```bash
chmod 400 my-key.pem
ssh -i my-key.pem ubuntu@<PUBLIC_IP>
```

## Useful CLI Commands

```bash
aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]' --output table
aws ec2 start-instances --instance-ids i-0abc123
aws ec2 stop-instances  --instance-ids i-0abc123
```

---

# 💾 4. EBS — Elastic Block Store

EBS volumes are **network-attached disks** for EC2 instances. Think of them as virtual hard drives.

### EBS — How It Attaches to EC2

```
                ┌─────────────┐
                │  Availability│
                │  Zone 1a     │
                │              │
                │ ┌──────────┐ │        ┌──────────────────┐
                │ │   EC2     │◄├────────┤  EBS vol-001     │
                │ │ Instance  │ │        │  gp3 / 20 GB     │
                │ └──────────┘ │        └────────┬─────────┘
                │              │                 │
                │              │        ┌────────▼─────────┐
                │              │        │  EBS vol-002     │
                │              │        │  io2 / 100 GB    │
                └──────────────┘        └────────┬─────────┘
                                                 │
                                        ┌────────▼─────────┐
                                        │   Snapshot → S3   │
                                        │  (incremental     │
                                        │   backup, cross-  │
                                        │   region copy)    │
                                        └──────────────────┘
```

## Volume Types (know these)


| Type  | Name                       | Use Case                          | IOPS      |
| ----- | -------------------------- | --------------------------------- | --------- |
| `gp3` | General Purpose SSD        | Default — boot volumes, most apps | Up to 16k |
| `gp2` | General Purpose SSD (prev) | Legacy default                    | Burst 3k  |
| `io2` | Provisioned IOPS SSD       | Databases needing guaranteed IOPS | Up to 64k |
| `st1` | Throughput Optimized HDD   | Big data, log processing          | 500 MiB/s |
| `sc1` | Cold HDD                   | Infrequent access, cheapest       | 250 MiB/s |


## Key Points

- A volume exists in **one Availability Zone** — it can only attach to instances in the same AZ.
- **Snapshots** back up a volume to S3 (incremental). You can copy snapshots across regions for DR.
- Root volumes are deleted on termination by default; additional volumes are **not**.
- You can resize or change type on the fly (no downtime for most operations).

## Useful CLI Commands

```bash
aws ec2 describe-volumes --output table
aws ec2 create-snapshot --volume-id vol-0abc123 --description "before deploy"
aws ec2 create-volume --availability-zone us-east-1a --size 20 --volume-type gp3
```

---

# 🪣 5. S3 — Simple Storage Service

![S3 Storage Classes](https://d1.awsstatic.com/reInvent/reinvent-2022/s3/Product-Page-Diagram_Amazon-S3_702702c1-9be8-4e76-9ed7-9e94e8e4ecf2.png)

S3 is **object storage** — files (objects) live in **buckets**. It is global-namespace, highly durable (99.999999999 % — 11 nines), and virtually unlimited.

### S3 Object Model

```
┌─────────────────────────────────────────────────────┐
│  S3 Bucket: my-app-assets-2026                      │
│  (globally unique name)                             │
│                                                     │
│  ┌────────────────────────────────────────────────┐ │
│  │ Object                                         │ │
│  │  Key:   uploads/photo.png                      │ │
│  │  Value: <binary file data>                     │ │
│  │  Size:  up to 5 TB                             │ │
│  │  Metadata: Content-Type, tags, encryption…     │ │
│  │  Version ID: (if versioning enabled)           │ │
│  └────────────────────────────────────────────────┘ │
│                                                     │
│  ┌────────────────────────────────────────────────┐ │
│  │ Object                                         │ │
│  │  Key:   logs/2026/04/access.log                │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### S3 Storage Class Lifecycle (Cost Optimization)

```
 ┌──────────┐    30 days    ┌──────────────┐    60 days    ┌─────────────┐
 │ Standard  │ ───────────► │ Standard-IA   │ ───────────► │ Glacier      │
 │ (frequent │              │ (infrequent   │              │ Flexible     │
 │  access)  │              │  access)      │              │ Retrieval    │
 └──────────┘              └──────────────┘              └──────┬──────┘
                                                                 │
                                                           180 days
                                                                 │
                                                          ┌──────▼──────┐
                                                          │ Glacier Deep │
                                                          │ Archive      │
                                                          │ (cheapest)   │
                                                          └─────────────┘
```

## Core Concepts


| Concept             | Meaning                                                   |
| ------------------- | --------------------------------------------------------- |
| **Bucket**          | Top-level container — name must be globally unique        |
| **Object**          | A file + metadata, identified by a key (path)             |
| **Key**             | Full "path" to the object inside the bucket               |
| **Versioning**      | Keep every version of every object (enable per bucket)    |
| **Storage Classes** | Trade access speed for cost — Standard, IA, Glacier, etc. |


## Storage Classes Overview


| Class                | Access Pattern         | Retrieval | Cost          |
| -------------------- | ---------------------- | --------- | ------------- |
| **Standard**         | Frequent               | Instant   | Highest       |
| **Standard-IA**      | Infrequent             | Instant   | Lower storage |
| **One Zone-IA**      | Infrequent, single AZ  | Instant   | Even lower    |
| **Glacier Instant**  | Archive, rare access   | ms        | Low           |
| **Glacier Flexible** | Archive                | min–hours | Very low      |
| **Glacier Deep**     | Compliance / long-term | 12–48 hrs | Cheapest      |


## Bucket Policy Example (public read for a static site)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-site-bucket/*"
    }
  ]
}
```

## Static Website Hosting

S3 can serve a static website (HTML/CSS/JS) directly:

1. Enable **Static website hosting** on the bucket.
2. Set index document (`index.html`) and error document (`error.html`).
3. Attach a public-read bucket policy (or use CloudFront for HTTPS).

## Useful CLI Commands

```bash
aws s3 mb s3://my-unique-bucket-name-2026
aws s3 cp ./build s3://my-bucket/ --recursive
aws s3 ls s3://my-bucket/
aws s3 sync ./dist s3://my-bucket/ --delete
aws s3 presign s3://my-bucket/report.pdf --expires-in 3600
```

## S3 with the AWS SDK (Node.js Example)

```typescript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-east-1" });

await client.send(
  new PutObjectCommand({
    Bucket: "my-bucket",
    Key: "uploads/photo.png",
    Body: fileBuffer,
    ContentType: "image/png",
  })
);
```

---

# 🌐 6. VPC — Virtual Private Cloud

![AWS VPC with Public and Private Subnets](https://docs.aws.amazon.com/images/vpc/latest/userguide/images/vpc-example-private-subnets.png)

A VPC is your **own isolated network** inside AWS. Everything you launch (EC2, RDS, Lambda in a VPC, etc.) lives inside a VPC.

### AWS Regions & Availability Zones

```
┌──────────────────────────────────────────────────────────┐
│  AWS Region: us-east-1 (N. Virginia)                     │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │    AZ 1a      │  │    AZ 1b      │  │    AZ 1c      │  │
│  │  (Data Center │  │  (Data Center │  │  (Data Center │  │
│  │   cluster)    │  │   cluster)    │  │   cluster)    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│         ▲                 ▲                 ▲            │
│         └─────────────────┼─────────────────┘            │
│               Low-latency private links                  │
└──────────────────────────────────────────────────────────┘
```

## Default VPC

Every region comes with a **default VPC** (`172.31.0.0/16`) so you can launch instances immediately. For production, create a **custom VPC** with your own CIDR block.

## VPC Building Blocks

```
┌─────────────────────────────────────────────────────────┐
│  VPC  (10.0.0.0/16)                                    │
│                                                         │
│  ┌──────────────────┐    ┌──────────────────┐           │
│  │ Public Subnet    │    │ Public Subnet    │           │
│  │ 10.0.1.0/24      │    │ 10.0.2.0/24      │           │
│  │ AZ: us-east-1a   │    │ AZ: us-east-1b   │           │
│  │ ┌──────────────┐ │    │ ┌──────────────┐ │           │
│  │ │   EC2 (web)  │ │    │ │   EC2 (web)  │ │           │
│  │ └──────────────┘ │    │ └──────────────┘ │           │
│  └────────┬─────────┘    └────────┬─────────┘           │
│           │    Route to IGW       │                     │
│  ┌────────┴───────────────────────┴─────────┐           │
│  │          Internet Gateway (IGW)          │           │
│  └──────────────────────────────────────────┘           │
│                                                         │
│  ┌──────────────────┐    ┌──────────────────┐           │
│  │ Private Subnet   │    │ Private Subnet   │           │
│  │ 10.0.3.0/24      │    │ 10.0.4.0/24      │           │
│  │ AZ: us-east-1a   │    │ AZ: us-east-1b   │           │
│  │ ┌──────────────┐ │    │ ┌──────────────┐ │           │
│  │ │   EC2 (app)  │ │    │ │   RDS (db)   │ │           │
│  │ └──────────────┘ │    │ └──────────────┘ │           │
│  └────────┬─────────┘    └──────────────────┘           │
│           │    Route to NAT                             │
│  ┌────────┴─────────────────────────────────┐           │
│  │          NAT Gateway (in public subnet)  │           │
│  └──────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

---

# 🔀 6.1 Subnets

A subnet is a **range of IP addresses** inside your VPC, tied to **one Availability Zone**.


| Subnet Type | Internet Access?                | Typical Use            |
| ----------- | ------------------------------- | ---------------------- |
| **Public**  | Yes — route table points to IGW | Web servers, bastion   |
| **Private** | Outbound only via NAT Gateway   | App servers, databases |


- **Public subnet** = has a route `0.0.0.0/0 → igw-xxx` and instances get public IPs.
- **Private subnet** = has a route `0.0.0.0/0 → nat-xxx` (or no internet route at all).
- Spread subnets across **at least 2 AZs** for high availability.

### CIDR Crash Course


| CIDR          | IPs Available    | Example Use |
| ------------- | ---------------- | ----------- |
| `10.0.0.0/16` | 65,536           | VPC         |
| `10.0.1.0/24` | 256 (251 usable) | Subnet      |
| `10.0.1.0/28` | 16 (11 usable)   | Tiny subnet |


AWS reserves 5 IPs per subnet (first 4 + last).

---

# 🛡️ 6.2 Security Groups

### Security Groups vs NACLs — Defense in Depth

```
                          INTERNET
                             │
                    ┌────────▼────────┐
                    │ Internet Gateway │
                    └────────┬────────┘
                             │
               ┌─────────────▼──────────────┐
               │     Network ACL (NACL)      │  ◄── Subnet-level, STATELESS
               │  (numbered rules, allow     │      (must allow return traffic
               │   AND deny, evaluated       │       explicitly)
               │   in order)                 │
               └─────────────┬──────────────┘
                             │
               ┌─────────────▼──────────────┐
               │     Security Group (SG)     │  ◄── Instance-level, STATEFUL
               │  (allow rules only,         │      (return traffic auto-allowed)
               │   all rules evaluated       │
               │   together)                 │
               └─────────────┬──────────────┘
                             │
                    ┌────────▼────────┐
                    │   EC2 Instance   │
                    └─────────────────┘
```

A Security Group (SG) is a **stateful firewall** attached to ENIs (network interfaces on EC2, RDS, etc.).

## Stateful = Return Traffic Is Automatic

If you allow inbound on port 80, the response traffic is automatically allowed out — no need for an explicit outbound rule.

## Default Behavior


| Direction    | Default Rule                  |
| ------------ | ----------------------------- |
| **Inbound**  | Deny all (you must add rules) |
| **Outbound** | Allow all                     |


## Example Rules


| Type     | Protocol | Port | Source / Destination  | Purpose               |
| -------- | -------- | ---- | --------------------- | --------------------- |
| Inbound  | TCP      | 22   | `YOUR_IP/32`          | SSH from your machine |
| Inbound  | TCP      | 80   | `0.0.0.0/0`           | HTTP from anywhere    |
| Inbound  | TCP      | 443  | `0.0.0.0/0`           | HTTPS from anywhere   |
| Inbound  | TCP      | 3306 | `sg-0abc123` (app SG) | MySQL from app tier   |
| Outbound | All      | All  | `0.0.0.0/0`           | Default — allow all   |


## Best Practices

- **Never open `0.0.0.0/0` on port 22** — restrict SSH to your IP or use SSM Session Manager.
- **Reference other SGs** as sources instead of IP ranges — this way, if instances scale, rules stay valid.
- Keep SGs focused: one for web tier, one for app tier, one for DB tier.

---

# 🗺️ 6.3 Route Tables

### Public vs Private Subnet — The Difference Is the Route Table

```
┌───────────── PUBLIC SUBNET ────────────┐   ┌───────────── PRIVATE SUBNET ───────────┐
│                                         │   │                                         │
│  Route Table:                           │   │  Route Table:                           │
│  ┌─────────────┬──────────┐             │   │  ┌─────────────┬──────────┐             │
│  │ Destination │ Target   │             │   │  │ Destination │ Target   │             │
│  ├─────────────┼──────────┤             │   │  ├─────────────┼──────────┤             │
│  │ 10.0.0.0/16 │ local    │             │   │  │ 10.0.0.0/16 │ local    │             │
│  │ 0.0.0.0/0   │ igw-xxx  │ ◄── IGW    │   │  │ 0.0.0.0/0   │ nat-xxx  │ ◄── NAT    │
│  └─────────────┴──────────┘             │   │  └─────────────┴──────────┘             │
│                                         │   │                                         │
│  ✅ Direct internet access              │   │  ✅ Outbound internet (via NAT)         │
│  ✅ Public IP assigned                  │   │  ❌ No inbound from internet            │
└─────────────────────────────────────────┘   └─────────────────────────────────────────┘
```

A route table tells each subnet **where to send traffic**.

## Public Subnet Route Table


| Destination   | Target    | Meaning                              |
| ------------- | --------- | ------------------------------------ |
| `10.0.0.0/16` | `local`   | Traffic inside the VPC stays local   |
| `0.0.0.0/0`   | `igw-xxx` | Everything else goes to the Internet |


## Private Subnet Route Table


| Destination   | Target    | Meaning                            |
| ------------- | --------- | ---------------------------------- |
| `10.0.0.0/16` | `local`   | Traffic inside the VPC stays local |
| `0.0.0.0/0`   | `nat-xxx` | Outbound Internet via NAT Gateway  |


- Each subnet is **associated with exactly one route table**.
- Multiple subnets can share the same route table.
- The **most specific route wins** (longest prefix match).

---

# 🔗 7. How Everything Connects — A Typical 3-Tier Web App

![AWS 3-Tier Architecture](https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2022/12/15/Fig1-3-tier-app.png)

```
┌─────────────────────────────────────────────────────────────────────┐
│                          VPC (10.0.0.0/16)                         │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  PUBLIC SUBNETS (10.0.1.0/24 + 10.0.2.0/24)                  │  │
│  │                                                               │  │
│  │   Internet ──► IGW ──► ALB (Application Load Balancer)        │  │
│  │                        NAT Gateway                            │  │
│  └───────────────────────────────┬───────────────────────────────┘  │
│                                  │ SG: allow 8080 from ALB SG       │
│  ┌───────────────────────────────▼───────────────────────────────┐  │
│  │  PRIVATE APP SUBNETS (10.0.3.0/24 + 10.0.4.0/24)             │  │
│  │                                                               │  │
│  │   EC2 (App Server) ── IAM Role ──► S3 (assets, uploads)      │  │
│  │                    ── NAT GW ────► Internet (packages, APIs)  │  │
│  └───────────────────────────────┬───────────────────────────────┘  │
│                                  │ SG: allow 5432 from App SG       │
│  ┌───────────────────────────────▼───────────────────────────────┐  │
│  │  PRIVATE DB SUBNETS (10.0.5.0/24 + 10.0.6.0/24)              │  │
│  │                                                               │  │
│  │   RDS PostgreSQL (Multi-AZ)                                   │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

# 🧯 8. Common Issues


| Problem                                | What to Check                                                          |
| -------------------------------------- | ---------------------------------------------------------------------- |
| Can't SSH into EC2                     | SG inbound 22 open? Key correct? Public IP assigned? Instance running? |
| EC2 can't reach the internet           | Public subnet with IGW route? Or private subnet with NAT GW?           |
| EC2 can't access S3                    | IAM role attached? Policy allows the action? VPC endpoint for S3?      |
| "Access Denied" on S3                  | Bucket policy + IAM policy both evaluated — check both                 |
| Website on S3 not loading              | Static hosting enabled? Index doc set? Bucket policy public-read?      |
| Can't connect to RDS from EC2          | RDS SG allows inbound on DB port from EC2's SG?                        |
| EBS volume not visible after attaching | Volume attached but needs `lsblk`, `mkfs`, and `mount`                 |


---

# 📚 9. Recommended Learning Flow

1. **IAM** — Create an admin user, stop using root. Enable MFA.
2. **VPC** — Explore the default VPC. Create a custom VPC with 2 public + 2 private subnets.
3. **EC2** — Launch a `t2.micro`, SSH in, install Nginx, see it in a browser.
4. **EBS** — Attach a second volume, format, mount, write data, snapshot.
5. **S3** — Create a bucket, upload files via CLI, enable versioning, host a static page.
6. **Connect it all** — EC2 with an IAM role reading from S3, in a private subnet behind a NAT GW.

---

# 🎯 10. Key Takeaways

- **IAM** is the foundation — get it wrong and nothing else matters.
- **EC2** is just a VM — the real skill is configuring networking + permissions around it.
- **EBS** = block storage attached to EC2; **S3** = object storage for everything else.
- **VPC** isolates your workloads — public subnets face the internet, private subnets don't.
- **Security Groups** are your first line of defense — default deny, explicit allow.
- **Route Tables** decide whether a subnet is public or private.

---

# ⚡ 11. Quick Summary

- IAM → Users, Groups, Roles, Policies — least privilege, no root
- EC2 → Virtual machines — AMI + instance type + key pair + SG
- EBS → Persistent disks for EC2 — snapshots for backup
- S3 → Object storage — buckets, keys, versioning, static hosting
- VPC → Your private network — subnets, IGW, NAT GW
- Subnets → Public (IGW) or Private (NAT) — one AZ each
- Security Groups → Stateful firewall — inbound deny-all by default
- Route Tables → Determine where traffic flows — longest prefix wins

---

# 🧪 12. Home Assignment

**Task 1:** Create an IAM user with S3 read-only access. Use the CLI with that user's credentials to list bucket contents.

**Task 2:** Launch a `t2.micro` EC2 instance with a user data script that installs and starts Nginx. Verify you can see the default page in a browser.

**Task 3:** Attach a 5 GB `gp3` EBS volume to your instance, format it as `ext4`, mount it to `/data`, and write a test file. Take a snapshot.

**Task 4:** Create an S3 bucket, enable versioning, upload a file, modify and re-upload it, then list all versions.

**Task 5:** Build a custom VPC with 1 public subnet and 1 private subnet. Launch an EC2 instance in the public subnet and confirm internet access. Launch one in the private subnet and confirm it has **no** internet access (then optionally add a NAT Gateway to fix it).

---

**Pro tip:** AWS bills per second for EC2 and per GB-month for EBS/S3 — always terminate lab resources when you are done. Use `aws ec2 describe-instances` and `aws s3 ls` to audit what is running.
```

