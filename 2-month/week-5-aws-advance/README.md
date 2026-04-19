# 🧪 week                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             05 – Advanced AWS Architecture (Free Practicals)

---

## 🔹 Practical 1: IGW + NAT Gateway Setup

![Image](https://images.openai.com/static-rsc-4/VvNY7gu_aV04QkCPEKYATo_DH-Ha8m2YN3INF6VutHBu4_FIgT30OCmZMpNVucUp7jIxFUghbIhb9FPfesLIzf5CzZp_CvQ4-FHk3rVkl8u13q6qNmD-A8krCWCDBZ3MM5lpIt0WYArtdwNDoDzO0ScyFmycuidn0ujD8IEs9NT2336CVHfkbLnizLyiPzA4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Sm4UwJI5BDGRSUCRgCjjsVBT-0X1U88Rfr84o_WwuU1ECwj3q1vwzv5JQPU4AlpPfxjI77IVMkEaNm2x7VGDZyzFsi129QaDFmOB0aeoDa5DSllPLgLIoTanRQlyGob3o5qn3S3kdGUVu3DVcQrrzvC2-VLnFPpUJKaR9Q7dZnXPbYqyCv7z4NaHm6PjlS5e?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/QsHqRrvMExmkM1K4EMKVDV5AUyuxtK-nJ4Z0mCxJwyAoot_EVWDmVboEZvWOu3CkgXoYSOVW50nIkBu-VtB9wkGXYwWmju5oLDnJJjTQZ2H0gihv_crzC3A5xjBRux6TbQ8mjtma-kp_U3d1-X2rIYBOKlUhxWWIFJeOmmhZybZAQPGLi2Hhfkms4xwcA5aJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/WSxSicw-KSsLkpUOTdQ8vhjD6qvAmgHK0ByFscPpObVtbppd6X3BGhJncEehTwV6VvMEPk_w3XiCKJDCASrXVJu1ywx00jbKDEiTFDZ-9fStW8lSpm7cmrrS25_qSNs1TwXh9m4vSfTSFm4qLh8GLOvbWJmINppubxx6N4KuPiMY642rqC7QQlZpUw3kgnmI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/GEhDDSXA43iqrn0skPeI4Q0R4GRwmuVdP6_YnGY42lXs0GQLQgVlkbB1wuEMW7R70L-WO_9UvDr9A4Rv34-W4zWL-f0m9QM6gBKfvPGRDn3ibVjhf-4pi16SIY6WLSbEPwqZDwdEK4cCW4A1cwHCx4VMcKpA7rEL60xXMH_MXssHpiCRtN9LziMUl1UdXcHf?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZysMypzOfPHNnOhVETnIWne2ps9NjtDiW-ddx4FboG-N7T-cG9BE24SG-2SwEPzcYaZ5OhSVksbaD-IcRy6mRrYuoTJUumlwMFL0qfSPGSZTp7PGwllb9QCqS1n6qGKW7dSBlBiQGkIYGZsi6iankgEdBrDjA2_lXuVD2Btn1COmN37pgbJmq4Gt-yn0XOj7?purpose=fullsize)

### 🎯 Goal:

Public & Private subnet communication එක හදන එක

### 🧑‍💻 Steps:

1. VPC එකක් create කරන්න (CIDR: 10.0.0.0/16)
2. Subnets:

   * Public Subnet (10.0.1.0/24)
   * Private Subnet (10.0.2.0/24)
3. Internet Gateway attach කරන්න
4. Public Route Table:

   * 0.0.0.0/0 → IGW
5. NAT Gateway create කරන්න (Public subnet එකේ)
6. Private Route Table:

   * 0.0.0.0/0 → NAT Gateway

### ✅ Expected Result:

* Public EC2 → Internet access ✔️
* Private EC2 → Internet (via NAT) ✔️
* Private EC2 → direct inbound ❌

---

## 🔹 Practical 2: Load Balancer + Auto Scaling

![Image](https://images.openai.com/static-rsc-4/aQVK-IR2Icszcbk9D1nchxsDSrZ5-9JdbCZAQBMzqqgPNZfrihHSmBtnjxg9SpGGdP03nMVLy0AzWiz8bPD6RFjPbmpcnxmuBX59BWxuFXXaut3OETzHElImrIFZFTA43d4oWkKqRaD9Onrcy3YIprSbVIHJha8tzUzo3aUs30T3Xt9NSxxjbcPL4yFMCYBI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/s7LjyWHBj95qqbMUWmDl0wAwUIAOVmyuQTKOhoP3EpxPyWTfA8kRnlu-rQ2eSvyF9xsij6xAlTR-j0zIF4YujXz8RgyEru2g6gr6kaOz0ZNFiLybrR488yWDuLdGaDxrB8sEm4x_49KO7MbhkUxDmWfEUmBY7rF5s3HBIRfP8Cl7PTGvskBjeJ6obHa_8yUI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RNxDhZe1m_85l2TduhESAG-bdH8N4nDXBz58ZmEslSi-iPQSzD2ij5R5v8jX8c3ofD1RDVScKzL9QumFRHBwPsngFnXx5_-NHlz0cGNO0vH9CL8ckZgHTvXGV4VbkMpNwj_BrODOz3LbWT_OxHgygpaAEAPLO70dXpDyFF-BPm7kDjIRx-sevoGAx-GmOCCv?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/I_-6eqMOLKGjLGNNQDJ0qsklxRi6WN7Q2wQBrL0nb3-DUAvxmFs4O0PjAneETvL4mWuo5oLttsRaFH8bDX-d-becH0ZRVdf1cDAGKcc6KpSQ-Taa0FNLDQrWgfvO5fkdV9nwJd9vA0kiV9TnSCf7CscIwKcC4Ptp7qrtVMgLGNPK5mvsM2yy_QK93X9NAngi?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/th3nWW-OYy2X0c47YRsBuhYygeFH1r2RP6rJxeD1hTj0tRgGiPOSOUKDU6cpo_9hupEZdiXCytzhgFOmvcJF8QRbbkuIzg0G3FedwtiGu7JiwriYfUFRADbOnxjEPWZPbub6QdVAqHSiLgCb_9xBEvtUSKOVicLPVRNxHn4xTtxV33rjhJAB_TIA5rR-P-Xm?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/fMRc1VnRL9XNrfVnrI_FB1LVHf2XJP5D2uXhfqPGUAoBITgKCHIKk6HyU3xriTjVg0wSFXC7K_pkdWgF90dC7NQytloR6aiPWL-jEjsau0HXSWNWprJckI44QS35O_0lBO6A6UwvQWcfIvjnsch32ur8FfrMMtw7RAYymM6Al5hpDAyiihtuxR9qOq26j3fE?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/nM2rW1lV5zhDRs7gzS0tFtnyb5pkiY0aMxcvAHcU7X0uuGGAAKA_Qp2053afj3779D_o4rmNmpBh9rBtTL9qyO4RXjKeKXym_hqqyhnk6MlwEfsOs8QWY5KLvqeNXbzsaSiGDs3JenpZtO_CbrSJVm8Gtq0QxYSCctnH2FlRmmGgaaUSB8wHUw3Xma_LTIJt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-MzCZOubBJeFb1jZ6d1yebhsccOiDcl08dKyuygRnjp8pYL5H-JUmBK5BiHOHvJd3iDRSd_RQ-pPZ-O4KFj9xhoPqqb-JsisPbhbhAjg4vOY10FEA0nox3Cco43HlRY9wFlS3ZvzHBL9XMX7u5tUF8tyroM62iwNHVO-MlkXEH0WpDvCW3CMqH7Yi2Q3MgAQ?purpose=fullsize)

### 🎯 Goal:

High availability system එකක් build කරන එක

### 🧑‍💻 Steps:

1. EC2 instances 2ක් create කරන්න
2. Simple web server run කරන්න:

   ```bash
   sudo yum install httpd -y
   echo "Server 1" > /var/www/html/index.html
   ```
3. Application Load Balancer create කරන්න
4. Target Group එකට instances add කරන්න
5. Auto Scaling Group create කරන්න

   * Min: 2
   * Max: 4

### 🧪 Test:

* Browser එකෙන් refresh කරන්න → different servers show වෙනවා

### ✅ Result:

* Traffic balance වෙනවා
* Instance down වුණාම auto recover ✔️

---

## 🔹 Practical 3: Amazon RDS Setup

![Image](https://images.openai.com/static-rsc-4/dMaGKCMis2Y1SUIMshqdjRYbIQZSS3lcXR4RQKvUIPR4B7VJUyplZNQmRIZxwUHiC32LmJ-sdaInvO4zvNRe4-TiEE90wpTyWPo-C95YAH_Dbqf3R7cMPwJk9ECN3rJw5KEBcYwdnK3SrL3KHvsQ1gcFHTM11H64ki7biBb2M7YQpRa1JrpwdNeOaQAs3gGs?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Z_PJ62G8pY9FSOShvn4hEX5oDl33T__QDG7VOaBXtTC7yCLS-_aTc7b7SruusffCRuKRPR1R22q0V--b98hxp6De0dc3K2Z9SWI0LHBAhrT0IMWi5fVlNylMlkzH8QMZDtNGv790RNnoZ9iKu6a0wUPquf4mNkdlq0bKH_eiHcCFjBiB8sWr_JzNwkP_TkH4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/uQmjoivp3zobtyzp0kNeSfqEy_tLpDQDJ4XxGW5ydStQ-lzgPRilQ4-xVTqVGcONU4jODiUDnC0mmtK2qJsA-e8bJD3STwdV5-CXIZt_AelSIjRztEOGHnFyDxhngjtXIBTud25ws3KnUhegjwXaWbT_qI7d9TtLAwfOMdDXEmuSEn0emFLTLQvgZxVRLRr5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZKnf265P3UyxbjimJH-kx2vejTbqBxYREjcGWtHWuDZykyPEvV8VCgpQcD60FdIpnu6vZ4jeexKF08k2aQf24uAu1De8yzdO8-F3x-BFaoENV8HICpN8fyZypM-0ubF1O40W9qMZJqw-AOg7pQqh9163zI8AYDYqprGBuI9-y9ay0SmvjdwkhNNN1DVLFkkj?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/3wZOZ7DXbx1RTP80YhklC0ZhKHwSejaoCh6tx8LwD5x3R3ji88OKdG7SxDQLJNdtDb7OCSQICfAMBPxEPPMyKMaW5-Pa3EAyf2Td47sU2Ev3GKIpE_2S0C0JtCjxfwh1RoOMllCSCRqwmgY3rZC3aUNjefIl0ddhrmSMY2VfIB5JtUwb8DH0V9i3sfjZwnhT?purpose=fullsize)

### 🎯 Goal:

Managed database එකක් use කරන එක

### 🧑‍💻 Steps:

1. RDS (MySQL) instance create කරන්න
2. Public access → disable කරන්න
3. EC2 instance එකක් launch කරන්න
4. Connect වෙන්න:

   ```bash
   mysql -h <endpoint> -u admin -p
   ```

### 🧪 Test:

* Table create කරන්න
* Data insert කරන්න

### ✅ Result:

* Secure DB access ✔️
* No manual DB setup needed ✔️

---

## 🔹 Practical 4: CloudFront CDN

![Image](https://images.openai.com/static-rsc-4/NJ0hUI4JP2unWvR1GaDR3QNM3H1yd3lfK8tEgykIaNyy0CSePf85bYQyOKSNtuHk6r3M8EepVPvi7RwdX0xNw52p2C8kiKb3jLBy2wOjS8Q5IFHaZZL1ClyCt6sScoQKd0y1QHJleejvw7fiR3N0Phvy7sBrSfy_nP6UU5jVnvxeDMn1cUL3_RxeTPyuxdJ6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/BP2snDes6rz5HbZl2GgtKWKNAhBd8VQISF8YwJj2b0XUV4hHmX5w1lAJiXzRGce6y0p_VctV4ADkmehzTi7-w4nZYRxus_9-e2yEtaC-oWaBILzt0F6HXQDtDfAO5Ljbcqwh7VIkUn2FySyOAJ3Hf8RBrv_rRWvFj6oVwYPjljEwENnIATwtip794o2aJ7Qc?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/yK4MJeb0NN1VNTFtl4eZFxptrlD8L-QmN18nmWuZ7RkwXvkz3oV3yOTg4UZgyqcDgYEcUoGiU__TdogmjJAZozZcP0w8DDb7GzMVT0Ch8tiKROqj93QZ_cjADd5SARIUVe2hZIXDHW_AjofwWu0mjIuN6BjWiff42Kwurlwj4yyUNioMHI2t4EzJBLb52G4l?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-2bXt5Gvucy0ofimusCvee3SewQvJVZisreWLa2lVTBs0ywYsfdZi9dQSXamdEWqbusRjyUl7aVKxwP8YinqgkYNy-k8dKBPkkBmOqUen5kzMem7JsWK7XBMVO6bTD5c4LJURPMy7wTyn6YH3yOOkdUeSd-np7FgqJLav1Fyxc3vo_6f2-sbw-_hT1a6mejP?purpose=fullsize)

### 🎯 Goal:

Website speed improve කරන එක

### 🧑‍💻 Steps:

1. S3 bucket create කරන්න
2. Static website host කරන්න
3. CloudFront distribution create කරන්න
4. S3 bucket → origin ලෙස connect කරන්න

### 🧪 Test:

* CloudFront URL එක open කරන්න
* Load speed compare කරන්න

### ✅ Result:

* Faster global access 🌍
* Cached content ✔️

---

## 🔹 Practical 5: CloudWatch Monitoring + Alarm

![Image](https://images.openai.com/static-rsc-4/iTAoo8mQLwi4D5BLUz_w0afDKlLHE33E7bK0VbjcooM0CNixFq6vEk0u4Jq_ClCyhtQ8QcAdQO6XAp4ZDy_eC8x9_rk1iy-GW2pHgIWXs-X1JqqAXxDcAHzvbu-7wMTDh6F7W2ifjVQRxdhKBhtgbRP1vpzGUhYRUx3MIW-tPsfLQnnzeRRcMf7zrD27ALV0?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/NRxsfLUsKGN6OxRkXw79WgbH47yLulwPDDIYwP-TKxL_9HBce9kBht6dU3tUhLou-7flXau-NevnlMgD__bjlTNSNMaBKvjQDHbHJWmpUsmzQahhJO-Iti7_lTpfQWfjpce83AkaXbzR-jjtG5iRoF8qpwLdMtIl5th6njATC1tWbh6V_JFxI_AdnnEAWfsI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/h9PydQQw9xGaek7SR-ziKEIOCmS6AcJukmYmQEsKI0cQHUY7eV3OIXDfKI0TN7A_Y63KOYRnrFNrjboMKI7Sko2c_UGY3FjfDagGbIDftvlAR8-81L80Dbt1QQnE9Ju5xjwuwp98kMDS8O8IPJT4ey8Jl0MJ-sgdB0stNlWE79LYJjgyC2cPwgJhQfX0arMV?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/1mcV9HEo9hpeID7sM7acaXjeUqJij3KsFyD9HO0N84CPXkyleW8Aa7OAUqJ7vZdszEC-zOjsQaP1UcJxG8w4izqdw4KZDRPC5f5LMuOna_EIV2sVyxbsnvZ3i7SQ7Tr4GdvPbVm9YNeHsSx1FupRJCmr58wqzqcoV9DNGy8oIJ6l0f5XAJYBxmOdjj3hbo3d?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/yjQa4pVJh1Hi26-sQPwmlbUpiTlLHylN5yXA3YhMjcW9sl0XwtFtNeafl3erZsHtmu8byTXfTQB8xgzWkBv8cxd_9oQDTqwW_u7xiTkHMQ5Wlm8PgGw0lwAtcAAdEk7DMnyI2OHgsMizQs492Cppz2hTLC3KyG7pa5emlWsePQhwkJduEJOiDZOOsnUkdzpd?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/I3HmMANJTpUinPdQUEuSDhi5NqtAseJBv1UsrYhpIxvN39jwXciXJ1ZGydPPWSFiT1t70n_9m4OFfsUCUNVuQqFpCEqFLX9vWaHTl8rTWgs57CgSziV-LIp-bOb-h3yGxLshyIJsyDntzJlxagnejXhAN-61vbmYqPz7lwayxFaxD2pcaiY5X_1s5QqfXMV2?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YwZ2PLIZbFi9Hz6xhT-KnrFIpbOwZmlrnYghvgESU9p0EEnjT5qtHKllL0GNp5i03KBcwqHBy2VvRdKmmEOM3BMiyP-oTQZfOUijP0Zl4T0GplcZsZgzUfJLssjaAkTeYYA5vMQ6nsECK7-ZEflshPCp4ojR9tSyzatYfI8jjgAllgvegcOhUNecvNw6f_lD?purpose=fullsize)

### 🎯 Goal:

System monitoring setup කරන එක

### 🧑‍💻 Steps:

1. EC2 instance select කරන්න
2. CloudWatch metrics open කරන්න
3. Alarm create කරන්න:

   * CPU > 70%
4. SNS topic create කර email add කරන්න

### 🧪 Test:

```bash
stress --cpu 2
```

### ✅ Result:

* Email alert receive ✔️
* Real-time monitoring ✔️

---

# 🎯 Final Mini Project (Capstone Practice)

### 🧩 Build this architecture:

* VPC (Public + Private)
* ALB
* Auto Scaling (2–4 instances)
* RDS (Private subnet)
* CloudFront (Frontend)
* CloudWatch Alerts

### 💡 Bonus Tasks:

* HTTPS enable කරන්න (SSL)
* Backup (RDS snapshot) schedule කරන්න

---

# 🧠 Teaching Tip (ඔයාට)

ඔයා instructor කෙනෙක් නම්:

* 1 lab = 20 mins
* 5 labs = full 2-hour session
* Final project → assignment එකක්

---

ඇත්තටම කියනවනම්, මේ practicals ටික complete කරපු student කෙනෙක්ට
👉 **real production AWS architecture එකක් build කරන්න පුළුවන් level එකට එනවා**

---

ඔයාට ඕන නම් මම:

* ✅ Terraform version (IaC)
* ✅ CI/CD pipeline version
* ✅ Real-world startup architecture

එකත් build කරලා දෙනවා.
