const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FULL_NAME = "john_doe"; // change with your name in lowercase
const DOB = "17091999";       // ddmmyyyy
const EMAIL = "john@xyz.com"; // your email
const ROLL_NUMBER = "ABCD123"; // your roll number

// Function to check if string is number
const isNumber = (str) => /^[0-9]+$/.test(str);

// Function to check if string is alphabet (only alphabets)
const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);

// Function to reverse and make alternating caps
const alternatingCapsReverse = (str) => {
  let reversed = str.split("").reverse();
  return reversed
    .map((ch, idx) =>
      idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    )
    .join("");
};

// POST /bfhl
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input format. 'data' should be an array",
      });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let concat_alpha = "";

    data.forEach((item) => {
      if (isNumber(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
        concat_alpha += item;
      } else {
        special_characters.push(item);
      }
    });

    let concat_string = alternatingCapsReverse(concat_alpha);

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (err) {
    res.status(500).json({
      is_success: false,
      message: "Server Error",
      error: err.message,
    });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("BFHL API running successfully 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
