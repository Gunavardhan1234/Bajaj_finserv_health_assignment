# 🚀 BFHL REST API

This project implements a REST API for the **BFHL challenge**.  
It accepts an array of values via a `POST` request and returns:

- ✅ User details (user_id, email, roll number)  
- ✅ Odd and even numbers  
- ✅ Alphabets (converted to uppercase)  
- ✅ Special characters  
- ✅ Sum of numbers  
- ✅ Concatenated alphabets in reverse order with alternating caps  

---

## 📌 Tech Stack
- **Node.js**
- **Express.js**
- **Vercel** (for hosting)

---

## 📂 Project Structure
bfhl-api/
│── index.js # Main server code
│── package.json # Dependencies and scripts
│── vercel.json # Deployment config for Vercel
│── README.md # Documentation

## ⚡ Installation & Setup

### 1. Clone the Repository

git clone https://github.com/<your-username>/bfhl-api.git
cd bfhl-api
2. Install Dependencies

npm install
3. Run Locally

node index.js
Server will start at:


http://localhost:3000/bfhl
🌍 API Endpoint
POST /bfhl
Request Body
json
Copy code
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
Response


json

{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}


🛠 Deployment (Vercel)
Install Vercel CLI

npm install -g vercel
Deploy

vercel
Your API will be live at:

arduino\
https://<your-project-name>.vercel.app/bfhl
📧 User Details
user_id: {full_name_ddmmyyyy} (lowercase)
Example: john_doe_17091999

email: john@xyz.com

roll_number: ABCD123

✅ Features
Handles errors gracefully

Returns consistent JSON response

Numbers always returned as strings

Supports deployment on Vercel, Render, Railway, Heroku

👨‍💻 Author
Your Name
📧 Email: b.gunavardhankumar2022@vitbhopal.ac.in
📌 Roll Number: 22BAI10022(8712306494)

