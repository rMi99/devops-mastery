Here are **beginner-friendly, hands-on practicals** for your **Week 5 – Advanced AWS Architecture**. These are designed like mini real-world labs so you can actually *build and understand*, not just memorize.

---

# 🧪 Practical 1: Build a Public Web Server (IGW + EC2)

![Image](https://images.openai.com/static-rsc-4/K2vgR-Nsbch7CEFjXW6Iwp6lyqIuOiHMu6Ql7f1fvpbaWB6fqivzdd0QeJ7acwborw_A-bZKlaA4iYruyoiN3TJl4_LCKM-Vn6FjhuWIVtorME-jYDpVtT3S6AmIXr4XiIIfsAPmIE9maFhv6lVs31Govf5pG4h4bx-2l4FRZsbjAYwQBC7Nqv5GneOgIwnJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/VvNY7gu_aV04QkCPEKYATo_DH-Ha8m2YN3INF6VutHBu4_FIgT30OCmZMpNVucUp7jIxFUghbIhb9FPfesLIzf5CzZp_CvQ4-FHk3rVkl8u13q6qNmD-A8krCWCDBZ3MM5lpIt0WYArtdwNDoDzO0ScyFmycuidn0ujD8IEs9NT2336CVHfkbLnizLyiPzA4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/XtyOJwOe4J7nXfly7tRku7PAfeJwaV9iTYfjHkkOxnXebwVzDrS7ZU16Fm7AYLzD8V75_xh2W4sZ8uem4wlIIQQMKoRRVlCqh6bItJLc6PH3COEyIizLaprxFpye7G-j4zR6zTRKeeHTQlPT5YnTYsK0iBDx2rwGl8pSYSz-SJKmK1V5GYSvUOgLaqL6RD9E?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/IzIQOi_qyujCWcAPqQ8wYhNEaw_rXb1iwLVnPN9NqNrq6VBDFJpSHfYH1_wuGNEiFtod6XmEr8GYzZ_HaQCMOv2QMY28KFmPhroV-dow4r_2tX0ORowtitQz_P2MMdkO2zF-o4snUGGT75EUJDt1c1C3N6f8iVas6QyHBj9o3h5FAJAmqSU_zFsjNSifk1fH?purpose=fullsize)

### 🎯 Goal

Understand how the **Internet Gateway (IGW)** allows public access.

### 🛠 Steps

1. Create a **VPC** (10.0.0.0/16)
2. Create a **Public Subnet** (10.0.1.0/24)
3. Attach **IGW** to VPC
4. Create Route Table → Add route:

   ```
   0.0.0.0/0 → IGW
   ```
5. Launch **EC2 instance** in public subnet
6. Install Apache:

   ```bash
   sudo apt update
   sudo apt install apache2 -y
   ```
7. Open browser → Public IP

### ✅ Outcome

You can access your website from the internet → IGW working

---

# 🧪 Practical 2: Private EC2 with Internet (NAT Instance)

![Image](https://images.openai.com/static-rsc-4/X-mdSkHWrUnhssnz5auaGqHjI7he-WMYNytXf1VxuwSQ4W9WxkD5c8Ih__oa9E8_VbBjX7FkTt6Z-yIS7g3djKSj_LghAGOVDPV56Ptpn9AMAZhr4ktWIH4nX-ofZ6en05JlodvnK107y3B04eqtURhbdWtlgIHv6NUc1iNwR24a7h5w3Lxnnshpd_6QNfkz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/3ixlC92-4yWtWkMKQkgtX1c3v9QE50MXr6ltZYmQA6EWt1MYhoVJLZdXaGGH4xh-cChvoTIjGXapgY-2iC949QRZqhVMQVLUVXiUET4F11tUguPqBz7NMRvooX9wxTkdWkjhdQeANxSogv7dJZeY5OWRRoz3scFgq4yJTkDSekKGJcNrkKX-z8bjSODP3hOO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/0Mhu3MHi89_5wIXAdp_DJUXqxb0ozXqos2hW1epl2d0utLYDsf-TN2Fgs5O5VfBi5drLcx-bFaOa2tSKnH-AzJXxQ8NEZ-obgo5uzYHsPaqRgfqb55ixE_RjdkGZ-q6uMGu8vlyk4SzA3Nz88e43r3zPFfcyUfCJHlPw3_up_FnqPBrGxD9GmzbAKpKEcYT6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/8pelhjOd8Hc8QANJVtV5LuctQYgH_iDucIN30P23vh7G0w_uaYf2uC001FFl-1i0d-yC0bns0f5aiPEoJu4vxKvHZdrFqddEJNkKUbEByzlfDZfo6KOQ2Z88LUMhhfHkG1wnYgm2KJ2L6sM3EGTkWmOU7H0OCwtwfdXlzmCmhcpbW4cWmx0cQv8dXoGoGh36?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/HhnrKBDp6apbxrjOf8t7M_RXIrLV--PIdJ433h5BWMiWVRLKNu93_7KfJHleN-RTPf-9icQfN4jHwEPvMvKI8VHCOYRgEkxAmGrKKxRmMA1gISCMy8upfCxheAf6vIpL2AOnYwxFvG3IH46YjEpiaIIeuqKEnbi4kfh81IBYxr8BAXAy-0F0m8dqNgsPpDR7?purpose=fullsize)

### 🎯 Goal

Understand **NAT (Network Address Translation)**

### 🛠 Steps

1. Create:

   * Public Subnet
   * Private Subnet
2. Launch NAT EC2 in public subnet
3. Enable:

   ```
   Source/Destination Check = Disabled
   ```
4. Route private subnet:

   ```
   0.0.0.0/0 → NAT Instance
   ```
5. Launch EC2 in private subnet
6. Test:

   ```bash
   ping google.com
   ```

### ✅ Outcome

Private server can access internet BUT no inbound traffic

---

# 🧪 Practical 3: Load Balanced Web App (ALB)

![Image](https://images.openai.com/static-rsc-4/cr3tLgNAYOAa5B39DSJle7emHoJrngg4lynejKaw9RSTBFCfVy4joZ6dEzbsXzPaiVnWO_0HGtQDTup7RRvtQtbxpW_URAxR1KR2rItDhH3wCczBgBTYTlZ32_1mUX-v1pXQQWuzB3pLr7UGeNRZPFKJXklEqLVy1q7SShYOj2lipgfrclO_-maUQ1uLwSk3?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/PU1_1nOLPLWpbUpbHQcjM7-MAHMeq0HKoSnSoXVgM-EqlAWsMUb0bjtM84dYXrrIC-O5r034lMF3htgKkRt7eRe9_63kYDeu1g8EkBeupDqK3ptuY1vv37776qXQjzqKBq6oUnv2VlYh5YmYeRKnceJgyPPr-o_7Nx-eBzDOvl2TyZ_D3u46d9VAwJuR4UWp?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/H1A2O4gLn39IJmFIKeJWLVRdQCfMayXCloP9iYAqIkPDKllLCfsCurLEZAasNV_iPGp2vybUlRbZEEjbN83DBS2hQHf3JwOyY0mWoqg9OV3UErUiYiYCIdd4X9gsmyHsoGQoQ4fpaesb9h6mtqokTW5VnjZB6LIA-9iMisZtIf0HBIXlAfyCxn9U2O6QNFH5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/th3nWW-OYy2X0c47YRsBuhYygeFH1r2RP6rJxeD1hTj0tRgGiPOSOUKDU6cpo_9hupEZdiXCytzhgFOmvcJF8QRbbkuIzg0G3FedwtiGu7JiwriYfUFRADbOnxjEPWZPbub6QdVAqHSiLgCb_9xBEvtUSKOVicLPVRNxHn4xTtxV33rjhJAB_TIA5rR-P-Xm?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/fMdvoKzBjMkzB4oi-bJ1BxMuE03-TaX9zLvZhpECYCBenBnD9LumMh9q4YUxJGwo2s0xpjFgaw_WYNzc6HczhGVqIXrS1MBjmGfnfeQobK6rQcaXqqkCH0bkqgS_oqTzgar2BTJZgjH19NNqM804wTdHDmy3cd4ADO-Kzj7DW8FblttlkOH4-sr06pMQX1qI?purpose=fullsize)

### 🎯 Goal

Understand **Application Load Balancer**

### 🛠 Steps

1. Launch **2 EC2 instances**
2. Install Apache on both
3. Change index.html:

   * Server 1 → “Hello from Server 1”
   * Server 2 → “Hello from Server 2”
4. Create **Target Group**
5. Create **ALB**
6. Attach instances to ALB

### ✅ Outcome

Refresh browser → traffic switches between servers

---

# 🧪 Practical 4: Auto Scaling Group (High Availability)

![Image](https://images.openai.com/static-rsc-4/aQVK-IR2Icszcbk9D1nchxsDSrZ5-9JdbCZAQBMzqqgPNZfrihHSmBtnjxg9SpGGdP03nMVLy0AzWiz8bPD6RFjPbmpcnxmuBX59BWxuFXXaut3OETzHElImrIFZFTA43d4oWkKqRaD9Onrcy3YIprSbVIHJha8tzUzo3aUs30T3Xt9NSxxjbcPL4yFMCYBI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZybWNH8j-8Cm3C2scRMEA72NXdE1V3jKiTb6Ciq3OZu_7veGnu_eS5iTqyKEhtyi06ZzY17XK0qO9dDtWqw4SGC-1QHgDeEMMmxstoShI6e2_N82yh3sP-JrIRWLxoVP4gAHD4W-1AQcrtEd11EnnWqAnKibsWpdjax7FgqcaP8IJoeBqtPa9OmTazHY4N6q?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/9Mm427pKkGMSHWe_jCEpDQc2KX_o4wsYeJDexS8qhTyb9CouusFwPZGyJmvvcYwuqVrLjmFLZBwivAgsoV11R7MUGmhipcMp2kLeWn5ZGDqdJgV3vpiuQGYBdkHyE32lT949reXWDMf5MQgmlf-LlnlhGUJguZRIEeRrPhrx9HAgfqyt2Ja6KoZJwhnwxZ0Z?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RNxDhZe1m_85l2TduhESAG-bdH8N4nDXBz58ZmEslSi-iPQSzD2ij5R5v8jX8c3ofD1RDVScKzL9QumFRHBwPsngFnXx5_-NHlz0cGNO0vH9CL8ckZgHTvXGV4VbkMpNwj_BrODOz3LbWT_OxHgygpaAEAPLO70dXpDyFF-BPm7kDjIRx-sevoGAx-GmOCCv?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/4E7ZDjOv_Ya9yHzRCS0hEuUEE7Hj4l08803-9v-t6ZyxDBiSWr9IyplF4M_CPtmAOpdPjsFhG8B7Ly65rp02qvpFj7U_Ow46euhQlHpxdxFexQZVbfdcDg2VxC38ZDg4mEKL4xywkx7VyGdnEDkE7jBbTONxTs_xxarmjgpNKsZV5eXKADPJ6Y6eisfkLJ8p?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/1mcV9HEo9hpeID7sM7acaXjeUqJij3KsFyD9HO0N84CPXkyleW8Aa7OAUqJ7vZdszEC-zOjsQaP1UcJxG8w4izqdw4KZDRPC5f5LMuOna_EIV2sVyxbsnvZ3i7SQ7Tr4GdvPbVm9YNeHsSx1FupRJCmr58wqzqcoV9DNGy8oIJ6l0f5XAJYBxmOdjj3hbo3d?purpose=fullsize)

### 🎯 Goal

Understand **Auto Scaling Groups**

### 🛠 Steps

1. Create Launch Template (EC2 config)
2. Create Auto Scaling Group:

   * Min: 1
   * Desired: 2
   * Max: 3
3. Attach to ALB
4. Add scaling policy:

   ```
   CPU > 70% → add instance
   ```

### ✅ Outcome

Instances increase automatically under load

---

# 🧪 Practical 5: RDS Database Connection

![Image](https://images.openai.com/static-rsc-4/Z_PJ62G8pY9FSOShvn4hEX5oDl33T__QDG7VOaBXtTC7yCLS-_aTc7b7SruusffCRuKRPR1R22q0V--b98hxp6De0dc3K2Z9SWI0LHBAhrT0IMWi5fVlNylMlkzH8QMZDtNGv790RNnoZ9iKu6a0wUPquf4mNkdlq0bKH_eiHcCFjBiB8sWr_JzNwkP_TkH4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/dMaGKCMis2Y1SUIMshqdjRYbIQZSS3lcXR4RQKvUIPR4B7VJUyplZNQmRIZxwUHiC32LmJ-sdaInvO4zvNRe4-TiEE90wpTyWPo-C95YAH_Dbqf3R7cMPwJk9ECN3rJw5KEBcYwdnK3SrL3KHvsQ1gcFHTM11H64ki7biBb2M7YQpRa1JrpwdNeOaQAs3gGs?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Y9k0S5f65rJwGK_OYB_WYyqryZRH3ade0HLBdeu17zV0MiN9THcf8iotGHcldS9QtG1Uck8Qc6cYy3LK29XKLdkvdEfWLrAuzGtETbR9sXys3ZbMgvWiKonHW3mNd0KaIv3DeBOHHxn-4ku9lRE2ZB0-NTSqzgML0oCVzjyFlANR1DeqJ7d-CpKWrvw-y66D?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YvP7grvlYSd5fVx4EGbdyebP6c5SuntCyoUL4esRHQ_GwSkl_EwA0h6GgGs6-sj5l_0VOXVx39ftj076IgJNEL85Ryh9ADvrnUpPVbSHOY_gh_YAPybpw4bzlb6zJI6Kc3zKbJNgRZunxy_zG-smPO0SgZPh6XeZOEekm5sgo__Qe2N7eGIyAlJbyyI-nqkH?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/3wZOZ7DXbx1RTP80YhklC0ZhKHwSejaoCh6tx8LwD5x3R3ji88OKdG7SxDQLJNdtDb7OCSQICfAMBPxEPPMyKMaW5-Pa3EAyf2Td47sU2Ev3GKIpE_2S0C0JtCjxfwh1RoOMllCSCRqwmgY3rZC3aUNjefIl0ddhrmSMY2VfIB5JtUwb8DH0V9i3sfjZwnhT?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/0sIUNz3p_LRTdvijHOUSpE6UrNbWcds0bDuiiW2PluhFgljHtpeGXs1EGHxZ8CKBSl736jHJtISob1KFtUvg2X4_jHkSOaM0p-yEAullEjunyw4Iy1r0_4hoqG1OHhczB3EiZ1r7Wo7q9gY4hLfb88LutOL6wc38G8jWVioxWClTghzjLWeSSWczZFGW1JJf?purpose=fullsize)

### 🎯 Goal

Understand **RDS (Managed Database)**

### 🛠 Steps

1. Create **RDS MySQL**
2. Place in **private subnet**
3. Allow EC2 security group access
4. Connect from EC2:

   ```bash
   mysql -h <endpoint> -u admin -p
   ```

### ✅ Outcome

Secure DB connection from backend server

---

# 🧪 Practical 6: CloudWatch Monitoring & Alerts

![Image](https://images.openai.com/static-rsc-4/lJrEe1b6yl0M5SkeByzkp5zXGWcjaQrLPWzjdTrqemA0gQU9uQuaI9qtzQQjyZFv2YtW7L4P9VXcv0fuOSt2643Vo1_kTqsCtedbR83DheVScnmOXci4SqmMuDt7Uda8ijo70bCGZKpVl3qljEn9y2rkko4jpHWmVK8PLijbpSpMWqgAMuswWZ5aXw3llF56?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/SbgmYklWm0P-qNQxpTbr8ahmOaNLW2fYLFX6P6i_1ZE3cmPxjd3dGRiRVAizKKtlN5dEqzUDWehs5Wn4FgA_e4O3OdoFc5flpDTbRkRHv-0Xjr_Voh8obdUg86f6OGqH1fYGTrGjX8VP5s3oJ8UtW1ExRODeKAHhE2VcVtVMuHUupBHZasWZmW6NnzNI7E9v?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/rSCavzZO9QtVLxawleXReAIAiBnI9XX8Y8Q2ck852Vjz-pk4x7mp7wNqokJwf8C1dbYvT1ihhRo-a8PngCt-6ik9FyEoDpWQtrTJkCoizojzT-LXykaMsYgKws5UQk9fx-OS4eeprWN6qob0ZVzo8012ivndEeXNUgR-Ih3ffYjsJLcXiM-aDrbCsLnbH1v8?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/NRxsfLUsKGN6OxRkXw79WgbH47yLulwPDDIYwP-TKxL_9HBce9kBht6dU3tUhLou-7flXau-NevnlMgD__bjlTNSNMaBKvjQDHbHJWmpUsmzQahhJO-Iti7_lTpfQWfjpce83AkaXbzR-jjtG5iRoF8qpwLdMtIl5th6njATC1tWbh6V_JFxI_AdnnEAWfsI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Dd2ZRkVokNR70wVPagzUutdb-rgh4ZrBvGwUe-NIbGzgiN7CbqmzMXIOTKmOq2oEyvOqipnHpe9-3Q7v5oC7YnLzRslGbT29mOGplHmBwcoAmnvbh_XW-scFIpdaLcJBVgC_eJJYKjpj_gU1VOHEkJL1tD2m7wmpASRe375M87igUj5XIvQojRTKH1tRgd_p?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/l42rbU4lcAtvVjDxrIYNiWKPbuRH5VdYcYGdYTmjQj_hx-A3XsFlMaZJpUFUYFKO0xxoKqaxj9-wI1TMV5qOS0zomLMQ7ZHSVhOHP2rkTYPqYQkl5RJiVCRtEWXd3OYfy9Aqe5mIfHQQmdA3AXunvYC08GZjigTYi7qh95OvLaNN85groCc7R4LI9jkPzcSd?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YwZ2PLIZbFi9Hz6xhT-KnrFIpbOwZmlrnYghvgESU9p0EEnjT5qtHKllL0GNp5i03KBcwqHBy2VvRdKmmEOM3BMiyP-oTQZfOUijP0Zl4T0GplcZsZgzUfJLssjaAkTeYYA5vMQ6nsECK7-ZEflshPCp4ojR9tSyzatYfI8jjgAllgvegcOhUNecvNw6f_lD?purpose=fullsize)

### 🎯 Goal

Understand **Monitoring & Alerts**

### 🛠 Steps

1. Go to CloudWatch
2. Monitor EC2 CPU usage
3. Create Alarm:

   ```
   CPU > 70%
   ```
4. Attach SNS email notification

### ✅ Outcome

You get email alerts when server is stressed

---

# 🧪 Practical 7: CloudFront CDN Setup

![Image](https://images.openai.com/static-rsc-4/VeAAfuJtJSH2yZ9FQIJSLIv6VZNZmkTJ-C5TNJ96b-yxvypsuq3AjL5p3yHlSTCl3DgoahEBApXubRrAqsjXi0jzlTDZ2QovfQHfbo0Hvzdyguppnm5bRTqtjt2MgHeKfvB6HwQ7WVp1x55sPODS7XA-H6nQl6hUOcwXq9DeunF1qrnbkZYCZ9fFrN6PIIdO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/eFfVSqwk5kn_lZ9-EatU1H4sfuajsP9kHM5p7wc8442P78w-nuMWnCDCE_P1Tb6WlCuTZc3emwyg_vk1NtaT8bxjGH_6tyDtRWZMJMbN7arDDUpTdV7aWY2W4lF4VBaDvIVoJeOLf0GYIyBXfvAkJGekvZ8LSlBKR9_w9C37nsen0H9C0uZVz6yC6X1-nDdK?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/10JLWzOXCdUEd-jd_NrOOotPVojcXRWRHdqpIo23qltJmqxK7AR5VLP2taGpx7pnM7_BXgJ_uCvnM1-e5xFVY3GROO8oUyhm5V1x8jl25bX2cINg7vd4lxLu6W5lkUxxnEx6HHN10RwLqDe50xGg-_8mCljK0OtopibTfk87iTJgWfrrIHXyYDgF-OJaZSWF?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/KO7vG8AvWmjkDZZIge694-XtMBHIyblaOa_ttQaJlDatSohAkiSQtye0iOo9uZ-xdfZEKBDMWryiGrt3aJqykwe0fpekVL3Uxcryg3YAi6ZwOBl4anORO-xr4A23eV367YNQamXRXj5isZGG19BPDgypBzV0mARwKrwCgplS4aCPkuIjWV_R_UZXQz3T38Ku?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/iUXL5nmHPy3By4pX-UgVRXv74PsrXBD4pH8-yINHcx7AqxX355X7TD7YRtrrU1OyvwZUOONuxKtX9qe-I9JREpzEcn4y5VtrA6cRUKjtKcJNJOog921kCL9rIRIL-UO14AGBb22deg27YyU9ArcphNVus6XqNVIuWttExoNGMK18SgWer7HzCxk07Kq1Th_i?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/w_smyBJQwDv-Zkr5H4q_28HriBVJLDkJBTYgBUstfA7oxGSRJrUVbhXnE6_waPilBeHb7IZ_EscNRBpW75KpV9j082wF7TtcYVQPkjVywti85WLaYJb7EPUH_mWnwna5eC2yNIP3w5xr7sCkgrQJHy6CajHT_5kMOjq3NT4D9xPMaG1cAsUb6tNUsTM5RHGO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/d-z3Zgw52gIFuD_8P85BQuE-2AoMCQVsm9N7imKWP5lFmRkWpugnJ0hUwqaZ8DTmscR46jl7wpou-5v9ebvNBi7QSwXECpDqP5NgDvtkrmRtJQbUYMRghgF7UESXa1CQJ85ZPTvI30cF8I6CPsyRo524MFiwk8wZuGOcuYP_J0_3hGhkvQXZigfxYGLHXH9e?purpose=fullsize)

### 🎯 Goal

Understand **Content Delivery Network (CDN)**

### 🛠 Steps

1. Create **S3 bucket**
2. Upload static website
3. Enable static hosting
4. Create **CloudFront distribution**
5. Use S3 as origin

### ✅ Outcome

Website loads faster globally

---

# 🧪 Practical 8: Backup Strategy (Snapshots & AMI)

![Image](https://images.openai.com/static-rsc-4/4yTuibW-Pkv1g39yNnlPy_b-8SpNGVoau04RFVDjHc2cvyEbN-SSXYzhdGcImXhyhzlwf7nLFLIhBF7M6sHqza-7OEM7sKkddK5Idku0YdriXN2vOr7aVte3pcToO16licwnKIEc_sfc75oQXlBXlZqnrAWXK_dCvYTb9hiEMvXa9YYcdeohoWn5bcRLO-Cs?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/qkhv65iiTI_OWBTEdv3-a1lRLLOZOI-Hde5hSU82rdC-HSyVP7awBSY-3hXs499nLjeyU7P4PBK6uD4cT3zzHQ1MAxYd9umdjJf4NOR1t7361M_zXysOfIVrIokrX9LCrsK2ChP1FW_qE2rGyfIXQfflo66Hzx8fnKHEFl_1Sz13sIJmvt5hn2c5Cm4U_IIu?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/lwE3jXK1WhRtjSXZJ40gmq8RHIiy44ftMXWHaNQbWLMDT_h9k5TM1wgCFNhtbCGjUF4Mmz5rJpMwO3I1BW6r2D0eKSrkpWTNP-OcGLEgI9GIEKwR5SqBrtSqPOkDy3idUe3-QqPs8XwoXCuopsxDXlSqzabAOgHU-XG_9DX5pH3d5T2v5RoOOoQI6zPneQNt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/vQH1IG14IegsO6yO1wKhosnFdjG6bwpIy4kkoeDDh7Da2ZEMpWXdCLycYlVXYKf3ODp0OAOyTwB_5RZwAGZAp7wguEOCR7nxV5JHzMZguvviJRpLsKe8VN-Up_calzw16Zy_5zw6rKPdp_Xsckm1n0WEDVi2FCCTvrrcssSIooy2O3uRV0lIPwpcUL8-HQcQ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/meBZGH9eKuZHVbRF6VeJANRt4v4A2cZMRQB5lPPL47aWrZdp4MNhxCXIpuwd74cKFltZJrfLkfIwwyH-RWjg8fxTcerpAjar5q6pURklz0QX_Mqb2HseRoZp8K7x5Nqw_u-msbLC7DPGk-HGogoUccAxzuiu2FQfKZ8_uywpJ1HgVitS1tnIziFSSwsXTgmJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/fsv7pAkDP7U9wAVWrIVXZhEXCewl6rWpptnCiRMwrBOmD3MoO8KhyWuS2bnSKfP67ve8mCmuv1fRKTs3J5KkOwyVAUP-fKZtkcV44ToKUFZhEqkfAfvpAhXKanpXliN7lV_YcxAqCM3EyVTYtnF-T3G0orwUcAP6QuzBHbT0J8b-WyiYNoMrdR0r7f9XoZ4M?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZlZ5VbR0Tahg-u2BsjXTgbSOMLQ9wh3vsENrLBbETEkE1gAug3hbd-V9P9auyfIrNBnL9DBAw13KTHYeRPaMzlk3c6FDYVuQ34rAW1FHLrdybSJNy-IuWzRQfaSakfk-dryos9pXiJeV9xdLtZZK-kdmC8EJ0dU21ltd2wDX6tJfJ_phNyidiptULgFuKm5A?purpose=fullsize)

### 🎯 Goal

Understand **Backup & Recovery**

### 🛠 Steps

1. Create EC2
2. Create **AMI backup**
3. Create **EBS snapshot**
4. Restore new EC2 from AMI

### ✅ Outcome

You can recover system after failure

---

# 🎓 Final Mini Project (Combine Everything)

### 💡 Build this architecture:

* ALB + Auto Scaling
* EC2 (Private Subnet)
* RDS (Private)
* NAT for outbound
* IGW for public
* CloudFront for frontend
* CloudWatch monitoring
* Backup enabled

### 🧠 What you learn:

* Real-world AWS architecture
* High availability
* Security best practices
* Cost-aware design

---
