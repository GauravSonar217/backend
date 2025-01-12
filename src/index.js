require("dotenv").config({ path: "./env" });
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connection.js");


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is running on Port: 8000");
        })

    })
    .catch((err) => {
        console.log("MongoDB Connection failed !!! ", err);
    })