//EXPRESS FILE
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const api = require("./routes/api");

const app = express();

// Enable CORS for cross-origin requests from the client-side (localhost:3000)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Middleware to log incoming/outgoing requests
app.use(morgan("combined"));

// Parse incoming JSON request bodies
app.use(express.json());

// Serve static files from the public folder (build folder)
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

// Serve the built React app when the root URL is accessed
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
