Here are **viva (oral exam) questions with clear, beginner-friendly answers** for your **Week 5 – Advanced AWS Architecture** topics. These are structured so you can *explain confidently* during exams.

---

# 🎓 🔹 Auto Scaling Groups (ASG)

![Image](https://images.openai.com/static-rsc-4/SCTy2FsWg2GTGp6F1L4yXv_dQjZ-zeq7h7j1JFPyJS2TlIr1G_qKTU3tB9uzyYkaxPt1EHm36XA19E2-5tZbOEdUUWGK78kiFXHzkUgjbpWrSdKKkjdiMSeJ6V8teSr1WzDmhUQbCIMG_0d7FUPd_JHWNkuWkow7Vc9bZTW50wlukX0zNta4CIJHMuiLgWy5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/aQVK-IR2Icszcbk9D1nchxsDSrZ5-9JdbCZAQBMzqqgPNZfrihHSmBtnjxg9SpGGdP03nMVLy0AzWiz8bPD6RFjPbmpcnxmuBX59BWxuFXXaut3OETzHElImrIFZFTA43d4oWkKqRaD9Onrcy3YIprSbVIHJha8tzUzo3aUs30T3Xt9NSxxjbcPL4yFMCYBI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RNxDhZe1m_85l2TduhESAG-bdH8N4nDXBz58ZmEslSi-iPQSzD2ij5R5v8jX8c3ofD1RDVScKzL9QumFRHBwPsngFnXx5_-NHlz0cGNO0vH9CL8ckZgHTvXGV4VbkMpNwj_BrODOz3LbWT_OxHgygpaAEAPLO70dXpDyFF-BPm7kDjIRx-sevoGAx-GmOCCv?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MEL1hsKsWePFUuh_2iewjcaJ1okUS_eba4R3YUXWVOn1hBHoEVMDwEseij4LBQRZWj5SCyBf2XrAkF7vbPr5L0ljP39K68skU2YYNQ5H5DQc9W5qL3V9t_oaE88YLhQUTPz1pDHnEt659TDpmEQvKcJoEb1vRytW3hX0mdSA9Xz6Vy8ua_6owYfmfU_2T-nB?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/s85BHuhq8EFLVY_fC3_lD_psnnxifgC50iBPkSknYUI_7CZfk8k4nrgYVD8NlhLxLfXpZGQ9g_9u40bC9QHM9JArDQbgzzYaRUTbzFPtQQpSse7g567QexyVOGnyg9y6gCVkZeln8sB45CorDPXk_bknG5u7gX7Iz4xo-ypsT2HcrzMpVFfGwf5Wt7IHTkIi?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/IBHrU2sqqs2IfWcy9EB0YEt9fDlYwKmhlVGthMXufCN3l-8t-UdMJwGUuZBlbXJjNfcpdYeoVYavyeE5sF6tRZzY_zr1ZJ9gTO4rPaUrHkFUSPrKxVWTozAp7czAyVhlYFXV6uHMhICoiqryhivDKvViEqy7eG5_BLHFnGsTZ_ckFePVnT_M-f-P-iwQqyxJ?purpose=fullsize)

### ❓ What is Auto Scaling?

👉 Auto Scaling automatically **adds or removes EC2 instances** based on demand.

### ❓ Why do we use Auto Scaling?

👉 To ensure:

* High availability
* Fault tolerance
* Cost optimization

### ❓ What are Min, Max, Desired capacity?

* **Min** → minimum instances always running
* **Desired** → current target
* **Max** → upper limit

### ❓ What triggers scaling?

👉 Metrics like:

* CPU utilization
* Network traffic

---

# 🎓 🔹 Application Load Balancer (ALB)

![Image](https://images.openai.com/static-rsc-4/qKSN9U3NAIfz7iZ9fw8XYKJI5Tvcu0gGD9OKcVoH5-icvJRZN0D-S3VJutnyNiQIoljIVNyYEZ_zlYQ9KkXhkQLAmhZW42F5TT5o0dzAK1706MteAu0Vm6bN6hN9lhxEizvvw-hLqsAa2KsKth4Pf31JSDLuNKSmWUzkpb-V65skfznbyylgC95G9d8FEzhP?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/7VnEGnI9PB3AsTV4j5nN3OeLWtAWhBMZICIv509c6uqFS9RoNrPQd7Eezeyy7aUMnf1jr7KMFoUYZ2aZJFpc7Ko-XLwKwkkWVEsnl6mQEakky913f202RrXJEX02P0GUu4geX7uoMP66UM-2YH0-JhXv71FgrOvQ2TPxPcqPhcpPUTU4Uqu2zizvoI9hOj8_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/JobNKW6RyKiRfrJYxyIlc-H8OFKnnIYJZRNMzfqUcUApFWv3pUZwWZw-efkg-rvnSLAUcx0WC0m_W6M21j9_rc8IxTIv7blD4HKUBAkxlcD9kpgM_5izyFhT0SJ_F1LEYdh2o3FLUT3CoX13_olGLDVayLOscyFg4K0VNbiaGuZZwp72WLLo1bBDkzWO51xo?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/dYUNj3mGcVYRz8TFr2-f55GgtJg8AssWcEEIoR6SBAdKCS_rxLEGC6HUa3rL_AFyByiHnQ3rgS1aELdEmbuSvF2UwH1a9vwxWZn2N-usm3AzEcOBxGED2-vNsR-dPsxm318Rxi2ATryBbUnKP9kGbnuYK0uudVTv9d0a3pQduSsIcddducx0O3xTZem72HdN?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-et9zG9SFduSskWo3tdzMw9g9_ZcxwCO50fTvQbj_sB9QgfH_a15_yqZwplZSSKI0NS_wijWDvtg1trRptioUXvP-wz1T2LkVtVM-nv9kZCDr3qZyJWfnxIMTEnLU0egbVOlfe8J6XqaA48lbkP7c23UgzP8Jx5opJuagtgAAcEr7Z_kil3oNMCk29gkV1e6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/PdjHjLqmR8kGayX9lF3YutuY-uCLbsx87Vgr29PWDndP8QptIyeX-Wha7Duu4raoni3tmby-gLQyDeC_wkf0Cd1Aqb08rs9OUf7of8cdcuA6ms_yUBKQwdOhbbMQKtOO7-NdptSm4JeHhLPpyUEq8NgErBlFOqvCL82ccMgkuVu8vIUvkmLjp_w3zUrey9Sg?purpose=fullsize)

### ❓ What is ALB?

👉 A service that **distributes incoming traffic** across multiple EC2 instances.

### ❓ What is a Target Group?

👉 A group of EC2 instances that receive traffic from ALB.

### ❓ What are health checks?

👉 ALB checks if instances are healthy and **stops sending traffic to unhealthy ones**.

### ❓ Difference between ALB and NLB?

* **ALB** → Layer 7 (HTTP/HTTPS)
* **NLB** → Layer 4 (TCP/UDP, faster)

---

# 🎓 🔹 CloudFront (CDN)

![Image](https://images.openai.com/static-rsc-4/CpyoTqTRp91lUMInvS_FZI3huIXhzqoLuKkTpvULzTl-NyLKT_QPKgmMz4Yzc1xlFLhJZ29eRRO8Lz2Z9r3wk6VOmfY7kjnRnkLrcssO-pcFYFkDJ08Qb-_dVqkd90ANjpSqF_M3KagwLpiSCi12Us6rbs5G_PIb00o9edrN1ejWJ2_9ptrepQgc8bN5jk-p?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/KO7vG8AvWmjkDZZIge694-XtMBHIyblaOa_ttQaJlDatSohAkiSQtye0iOo9uZ-xdfZEKBDMWryiGrt3aJqykwe0fpekVL3Uxcryg3YAi6ZwOBl4anORO-xr4A23eV367YNQamXRXj5isZGG19BPDgypBzV0mARwKrwCgplS4aCPkuIjWV_R_UZXQz3T38Ku?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/tbSGMLdqWymyJFaw9uj3eV0NGuuFTiGqMlzerc_89cbeNlb7d_Hx6da797YMHllL0G4krA1QUSVqqdfypRvUHoBUat_Gs2RCkQGRHhZaxrQ74duQf2lNoD9L3ngcNlQAjbx6oRNotla-jepitBT9AYU3ZrmzdZ60n2Bd64Q7RXc8b1KizaNpcXN04F9TwprY?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/AcMQoSrGSxEElSN30H6muaLj5B_hG7A-kfKfM08XDDe3iGxAcfkDFlUbJZO0UwkPE44zeyREksaNfWUN2Gr-1XQ18zwkCyRxfIGNoYMMC9w8IsAoljP917RhefqLAPo1LA5iDo39zvgG_Dv-9ZtreG2dJ0QZUSfcAldfhoWee4gRDXxkwRh_5Ktenxepx2UQ?purpose=fullsize)

### ❓ What is CloudFront?

👉 A **Content Delivery Network (CDN)** that caches content closer to users.

### ❓ What is an Edge Location?

👉 A location where content is cached globally.

### ❓ Benefits?

* Faster loading
* Reduced server load
* Better user experience

---

# 🎓 🔹 RDS (Relational Database Service)

![Image](https://images.openai.com/static-rsc-4/Z_PJ62G8pY9FSOShvn4hEX5oDl33T__QDG7VOaBXtTC7yCLS-_aTc7b7SruusffCRuKRPR1R22q0V--b98hxp6De0dc3K2Z9SWI0LHBAhrT0IMWi5fVlNylMlkzH8QMZDtNGv790RNnoZ9iKu6a0wUPquf4mNkdlq0bKH_eiHcCFjBiB8sWr_JzNwkP_TkH4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/EJp2iFIgkrdsS9s71w61xI8vWzlh1hSibHk-qGFZGyip1F9BMV6999eFq_CHz5MFAeGZOoPMd3Xrtsk7PRZZ6wc5rJxUAJ5YJDWR2qu2ofdD_Ny5lsurEwiS6exzdqgL4MS2YtAdNuoic8fUpFrfdm395D3upu55u2pOSSljHMIApGbH_Fs5OXyKW9bCjK80?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MyF5sdMdO79Dd57TBY_G_7Gw16RZ-758nu6y5e6igqsrqskenuEmCW5ntzX8Zr-umqLlW0Mw9SLt8RPwYzyM-FGdJmUKdthcWy5DP7hQGO0TY-jbkDqtXTL5XLhK_zWsWgxVWqWPs9sGNQkD-P3myRc2yXBbhhvxdXATMXiCSxk-MnRdQaMkwvfBXh8fRzfg?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Y-WjZUdz0gbJzyM7rXWgx-RSXNRlqJB542Z_ier4pUCebOQyHUwdl0y1f3e3tI3L97k__EYh1e_ueLAJZxxdjX1zOJcc8Ez7OMxkinKilqAsU4cBSLeyrkcm8JKTkhNZDPC9EXTUBxucX13P5Jii36wWbnlFyp1prT0PGRoNQ1kYmXz7opKTvkHfj3BZzlhf?purpose=fullsize)

### ❓ What is RDS?

👉 A **managed database service** (MySQL, PostgreSQL, etc.)

### ❓ What is Multi-AZ?

👉 A standby database in another AZ for **high availability**.

### ❓ Why use RDS instead of EC2 DB?

👉 AWS manages:

* Backups
* Patching
* Failover

---

# 🎓 🔹 CloudWatch

![Image](https://images.openai.com/static-rsc-4/2FgzegUvf-eEa2WugEVQ4vPsulyx74auPbjovFQytJ8X1mAWbVQzMOGOIwaPM0UCvhFpHs3kf6_sM-GQGs3ub32Z4GFJ6DkavnpWpxd1kC_YpoKoCcdeKpRg26GXAXh8_QhoGIXGDKUM0caG5Xj7tSGMvhqaQLCU8mJeOknr1gAlmviBP0DQUwmswG9NMpvW?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/I3HmMANJTpUinPdQUEuSDhi5NqtAseJBv1UsrYhpIxvN39jwXciXJ1ZGydPPWSFiT1t70n_9m4OFfsUCUNVuQqFpCEqFLX9vWaHTl8rTWgs57CgSziV-LIp-bOb-h3yGxLshyIJsyDntzJlxagnejXhAN-61vbmYqPz7lwayxFaxD2pcaiY5X_1s5QqfXMV2?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/8yg21RV3QVf24nM0GS_M96VZHhn299PlSnceZOlkx9HtS3MpDkVTPsqo26sIWTfmYAL8JPjdVzGIYkyupCUV7fKeM3zO1X25MLf9MyjCqLacFK7-t97zESMkuqoAk76UntMXYD_50fYNl-RFfhV0jkn4PBfITK6v3hO26VLQ0Ld0GgkIxguotyt8WPE0A6OL?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/x-vG84vk6kJsv-pvWuTZMoKFpYVBiEYwGTFW7iMRWuPs4VLJbhFJD0S__vJjQOT2x6U1xOpe8mKtTgxEMZLM7iwe3tbub26G9gmWXSe882qt9UHrmLu1jEGRlZF_21v9gCjpuLxpup_kjGMVf9CuCtyUfyU9FaAjk5wuB--O9zQqQlBDVQmnf3US0pJ-bwbu?purpose=fullsize)

### ❓ What is CloudWatch?

👉 A monitoring service for:

* Metrics
* Logs
* Alerts

### ❓ What is an Alarm?

👉 A notification triggered when a metric crosses a threshold.

### ❓ Example?

👉 CPU > 70% → send email alert

---

# 🎓 🔹 Backup Strategies

![Image](https://images.openai.com/static-rsc-4/fFa8zfB4nvftLr4JxwuX8VrltT8g7hk9kkdHJEHOof45IT5Jb4ibuBHm5IodSElYOgpUP7aI-gC5tY0zHIi_KReM9Xn_GV15CJNOwoD55reHFeTQz9uKFEdAvuA3FkP9vhaHUrfsh_eOzqmCzpgsPd4aOrjnc5FpITrJPl3Brc2F1boFmJKwY9gd_Yk8uY2_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/cIG5mfuXDIYU3deND5RayNCCkZPlxAExUmrPQ4P3zNsZBCS-GLx55HXD6p3SJ2ZMK3SbhpWdd4_qh0_HZG93hwafMrer9by0IR0775ZUappxjxbMftiQtoV9n8nWtY1vbVrEgd8Vkqzsm2U5hBS3UsX3baJ2FFYH5-Cm_0DvbOOdBw0l9CXnAAGYNevGZffa?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/lwE3jXK1WhRtjSXZJ40gmq8RHIiy44ftMXWHaNQbWLMDT_h9k5TM1wgCFNhtbCGjUF4Mmz5rJpMwO3I1BW6r2D0eKSrkpWTNP-OcGLEgI9GIEKwR5SqBrtSqPOkDy3idUe3-QqPs8XwoXCuopsxDXlSqzabAOgHU-XG_9DX5pH3d5T2v5RoOOoQI6zPneQNt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/jhBLnN8LpBXLg2BXyJJaLF1LRWCbcTd2YDSRQWpUqp9gvDuCEgHJnaXiWBMcSQdKg7hOJDZda2u09yQJ9wV0u1ok__kDDcjXxOlZRI1sZEcA1qDeyW2ob3Bbk_JYnZXIiF3MCxksT-gMRckPNzslaw5HBv99UdwRQKDbq_a4GyLHlPL0-p99aOqssyHTfWc_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/EFhLNEiZrE-khWaHq05vgGEfEHFAXeeVCyiQvukCfez9SM0uN78uFk5zDqR9Qtu-qk91s31G-WFNZ0XKNFSQOgwpRlemDPtKWUFYL8BSzK58tisWWP5weW3cZhqfyJhZ2DSLb7IdwZgJS1OL-Fd_ajjsQ_uM-8gH9e0hy-DupUuS9kuQ0kaGbn9PsIbYMgcz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YL4PgMgqzJS6wh9l_DgDlYcZ11RBrRj46wMx5jeRM436wHzwsRZi1suhiVD9MAq7KuSCzHiRY8TF4EIHIxQZppsiTivihOSYF1gnJclq2_6YbRaIOIkbGuqLgXyrDCnWaYEHWRPfWatBxtXCJ5u1qhctAKL4xDRxMa-hNqaXl34MbBgElpcVhJFh6HJw4EAF?purpose=fullsize)

### ❓ What are backups in AWS?

👉 Copies of data for recovery.

### ❓ Types?

* EBS Snapshots
* AMI backups
* RDS automated backups

### ❓ Why important?

👉 To recover from:

* Data loss
* System failure

---

# 🎓 🔹 NAT (Network Address Translation)

![Image](https://images.openai.com/static-rsc-4/X-mdSkHWrUnhssnz5auaGqHjI7he-WMYNytXf1VxuwSQ4W9WxkD5c8Ih__oa9E8_VbBjX7FkTt6Z-yIS7g3djKSj_LghAGOVDPV56Ptpn9AMAZhr4ktWIH4nX-ofZ6en05JlodvnK107y3B04eqtURhbdWtlgIHv6NUc1iNwR24a7h5w3Lxnnshpd_6QNfkz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/nEgRv6Np_g-Pz-LqhiSACQCkMZIizI0XAxuXiyL3FeQtZm08s88SFX02oj7YNPJEmsEzCIBXuUV7RIN0ekge4-vGdHwKGveWQjrayrV_zO462t2t1bLBeo-E7v_0k_dgKZ3dk18_xIqvrxyAdfAFxQ-LWnF277hp1nNR_iZyxqDn2hbtW2TwXn1FnEsCp1b9?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/kes1j1OOYpv2a6drwgMpz09eyyfnTs9BcxjDwc7NjLfdfsUqrzf5ABPY-fhHwii9mQDCu09ecpgdijlVCX59QUUrtI5jE2wGsZOnnsjE3M9kI6KI4af-hPvGYtuqudFMlJIXduY9rKxSpX2pZ0cxSrIyazk6nvGUcKbZdOGfgvSV3G0w6VbW2DKg7_XxeJuh?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/nEgRv6Np_g-Pz-LqhiSACQCkMZIizI0XAxuXiyL3FeQtZm08s88SFX02oj7YNPJEmsEzCIBXuUV7RIN0ekge4-vGdHwKGveWQjrayrV_zO462t2t1bLBeo-E7v_0k_dgKZ3dk18_xIqvrxyAdfAFxQ-LWnF277hp1nNR_iZyxqDn2hbtW2TwXn1FnEsCp1b9?purpose=fullsize)

### ❓ What is NAT?

👉 Allows **private instances to access the internet**.

### ❓ Can internet access private EC2?

👉 ❌ No (only outbound allowed)

### ❓ NAT Gateway vs NAT Instance?

* Gateway → Managed, costly
* Instance → Manual, cheaper (free tier)

---

# 🎓 🔹 IGW (Internet Gateway)

![Image](https://images.openai.com/static-rsc-4/K2vgR-Nsbch7CEFjXW6Iwp6lyqIuOiHMu6Ql7f1fvpbaWB6fqivzdd0QeJ7acwborw_A-bZKlaA4iYruyoiN3TJl4_LCKM-Vn6FjhuWIVtorME-jYDpVtT3S6AmIXr4XiIIfsAPmIE9maFhv6lVs31Govf5pG4h4bx-2l4FRZsbjAYwQBC7Nqv5GneOgIwnJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Pscy8YDFHaIDHAK9ySVFbbNakNYRBHgJ69FmzSQp_hals7SaudrQxHs1bxMSCPUVroTN8isiGqlr-J7VoG1pFaEZl-MuJjHkYiARTVwwrVii9P3T6R7ks5YHnwOPLupSDc1NwOBvp3qr805QBi2Nh4nk66GuYXt9FCVQwRJ3hpgQHk5QIR3vuolYEQJyv25T?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Ug0CpBc442EcMJSfdGWCMQtGhFKFvPu5qZSFRk8kapR-BImhZCRZcMrWZ1yS4YFnYpsdrUAGD51Ziia7uRGIitW7ZtFduFgwzKFohuYCQzTOVRlDxW9rZmAkA3iztbNUxB3RpSvqK_40P6B5uBYgW_Oa2O1pQiI0U0887nene4_bi6QkMtU3FQSuVUYyJync?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-6lU0KZU4UgQ1QKSV0vm0017C8twg2AqP6vuIcieEnq4kYgxcDzzC8ee2gK5de4hZ9PSphoP-hjFlZa0Ttn9tGWKP18g0jGu5m4Pz8l52V2gKsq2UArBSo7dYamfxEkz49rBI6oH_KNRn2nnRGXbrFOFkWfvVoCN1ikZREkb_ylYf-1eRnP30Ha4AFF0Mr-0?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZysMypzOfPHNnOhVETnIWne2ps9NjtDiW-ddx4FboG-N7T-cG9BE24SG-2SwEPzcYaZ5OhSVksbaD-IcRy6mRrYuoTJUumlwMFL0qfSPGSZTp7PGwllb9QCqS1n6qGKW7dSBlBiQGkIYGZsi6iankgEdBrDjA2_lXuVD2Btn1COmN37pgbJmq4Gt-yn0XOj7?purpose=fullsize)

### ❓ What is IGW?

👉 Enables communication between VPC and internet.

### ❓ Where is it attached?

👉 Attached to a VPC.

### ❓ What makes a subnet public?

👉 Route to:

```
0.0.0.0/0 → IGW
```

---

# 🎓 🔥 Most Important Combined Questions

### ❓ Explain full architecture flow

👉
User → CloudFront → ALB → EC2 → RDS

* NAT for outbound
* IGW for inbound

---

### ❓ Difference: Public vs Private Subnet

* Public → has IGW route
* Private → no direct internet

---

### ❓ How do you make system highly available?

👉

* Multi-AZ
* Auto Scaling
* Load Balancer

---

### ❓ How do you secure your architecture?

👉

* Private subnets for DB
* Security Groups
* No direct DB internet access

---

# 🧠 Pro Viva Tip

If examiner asks:
👉 “Design a real system”

Say:

> “I will use CloudFront for caching, ALB for load balancing, Auto Scaling for scaling, EC2 for compute, RDS for database in private subnet, NAT for outbound access, and CloudWatch for monitoring.”

---
