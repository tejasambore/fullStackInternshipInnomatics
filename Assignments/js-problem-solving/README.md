# 🚀 Assignment 3 - Full Stack Development Internship at Innomatics Research Labs

## 📌 Overview
This repository contains solutions for **Assignment 3** of my **Full Stack Development Internship at Innomatics Research Labs**. The assignment consists of **10 JavaScript-based problem-solving tasks** that cover various real-world scenarios like ATM withdrawal systems, e-commerce discounts, job application filtering, and more.

Each problem is solved with an efficient JavaScript function, ensuring **clarity, performance, and modularity**.

---

## 📂 Table of Contents
1. [ATM Withdrawal System](./atmWithdrawal.js)
2. [Online Shopping Discount & Free Shipping](./shoppingDiscount.js)
3. [Student Grading System with Extra Credit](./studentGrading.js)
4. [Smart Traffic Light System](./trafficLight.js)
5. [Movie Ticket Pricing with Time and Age Discount](./ticketPrice.js)
6. [Job Application Filter](./eligibleCandidate.js)
7. [E-commerce Coupon Redemption](./applyCoupon.js)
8. [Fitness Membership Plan](./gymMembership.js)
9. [Electricity Bill Calculation with Peak Hours](./electricityBill.js)
10. [Flight Ticket Booking System](./flightTicket.js)

---

## 1️⃣ ATM Withdrawal System
**Scenario:**
- A function that processes ATM withdrawals based on PIN verification, balance checks, and amount conditions.
- Amount must be in multiples of 100.

🔹 **Function:** `atmWithdrawal(balance, amount, pin, enteredPin)`

---

## 2️⃣ Online Shopping Discount & Free Shipping
**Scenario:**
- Discounts and shipping rules based on the total order amount.
- Orders above $1000 get a **20% discount**, $500-$1000 get **10%**.
- Free shipping above $50; express shipping **$10** below $50.

🔹 **Function:** `calculateFinalAmount(orderAmount)`

---

## 3️⃣ Student Grading System with Extra Credit
**Scenario:**
- Grades are assigned based on marks, with a **5-mark extra credit** for students with **attendance > 90%**.

🔹 **Function:** `calculateGrade(marks, attendance)`

---

## 4️⃣ Smart Traffic Light System
**Scenario:**
- Traffic light timing based on density:
  - **Heavy Traffic → 60 sec**
  - **Moderate Traffic → 40 sec**
  - **Light Traffic → 20 sec**

🔹 **Function:** `trafficLightControl(density)`

---

## 5️⃣ Movie Ticket Pricing with Time and Age Discount
**Scenario:**
- Base ticket price: **$12**.
- **Matinee shows (before 5 PM) → 20% discount**.
- **Children (<12) → 40% discount**.
- **Seniors (>60) → 10% discount**.

🔹 **Function:** `calculateTicketPrice(age, showTime)`

---

## 6️⃣ Job Application Filter
**Scenario:**
- A function that filters job applicants based on **age (21-55)**, **experience (≥2 years)**, and **qualification (Bachelor's Degree)**.

🔹 **Function:** `isEligibleForJob(age, experience, qualification)`

---

## 7️⃣ E-commerce Coupon Redemption
**Scenario:**
- Coupons:
  - **DISCOUNT10 → 10% off for orders > $500**.
  - **FREESHIP → Free shipping for orders > $200**.
- **Both cannot be used together**.

🔹 **Function:** `applyCoupon(orderAmount, couponCode)`

---

## 8️⃣ Fitness Membership Plan
**Scenario:**
- Membership types:
  - **Basic ($20) → Gym access**
  - **Premium ($50) → Gym + Trainer**
  - **VIP ($80) → Gym + Trainer + Diet Plan**
- Function suggests the best plan based on user preferences.

🔹 **Function:** `choosePlan(planType, wantsTrainer, wantsDietPlan)`

---

## 9️⃣ Electricity Bill Calculation with Peak Hours
**Scenario:**
- Pricing during **normal hours (8 AM - 8 PM)**:
  - **<100 units → $5/unit**
  - **100-300 units → $4/unit**
  - **>300 units → $3/unit**
- **Peak hours (8 PM - 8 AM) → Extra 10% charge**.

🔹 **Function:** `calculateElectricityBill(units, timeOfDay)`

---

## 🔟 Flight Ticket Booking System
**Scenario:**
- Base fare: **$300**
- Class charges:
  - **Business → +$200**
  - **First Class → +$500**
- **Luggage >20kg → $50 per 10kg extra**.
- Discounts:
  - **Students → 15% off**
  - **Seniors (>60) → 10% off**

🔹 **Function:** `calculateFlightFare(classType, luggageWeight, isStudent, isSenior)`

---

## 🛠️ Technologies Used
- **JavaScript (ES6+)**
- **Node.js (For Testing)**

---

## 🚀 How to Use
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/assignment3-innomatics.git
   ```
2. Navigate to the project directory:
   ```sh
   cd assignment3-innomatics
   ```
3. Open the JavaScript files in any code editor.
4. Run each function in **Node.js or Browser Console**.

---

## 📸 Screenshots (Optional)
_Add screenshots of your code execution or project structure here._

---

## 📜 License
This project is licensed under the **MIT License**.

---

## ✨ Created By
👨‍💻 **Tejas Ambore**  
📧 **tejasambore03@gmail.com**  
🔗 [GitHub Profile](https://github.com/tejasambore)

---

## 🎯 Acknowledgment
This project is part of my **Full Stack Development Internship at Innomatics Research Labs**. Special thanks to the mentors for their guidance! 🚀

---

 📝 Contributing
Contributions are welcome. Please open an issue or submit a pull request.