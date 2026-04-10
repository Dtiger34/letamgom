const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// middleware
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/upload", express.static(path.join(__dirname, "upload")));

// API routes
const route = require("./routes/route");
app.use("/api/v1", route);

module.exports = app;
