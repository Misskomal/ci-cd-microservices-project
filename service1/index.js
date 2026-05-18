const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Service 1 is running 🚀");
});

app.get("/api", (req, res) => {
  res.json({
    service: "Service 1",
    status: "Running Successfully"
  });
});

app.listen(3001, () => {
  console.log("Service 1 running on port 3001");
});
