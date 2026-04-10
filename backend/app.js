const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// middleware
app.use(express.json());
app.use(cors());
app.use("/upload", express.static(path.join(__dirname, "upload")));

// API routes
const route = require("./routes/route");
app.use("/api/v1", route);

module.exports = app;
