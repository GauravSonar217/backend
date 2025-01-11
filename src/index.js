require("dotenv").config(); 
const connectDB = require("./config/connection.js");

connectDB();

const PORT = process.env.PORT || 8000;

