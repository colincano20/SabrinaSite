const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, "messages.json");

app.use(express.static("public"));
app.use(express.json());

app.get("/api/messages", (req, res) => {
  const data = fs.readFileSync(DATA_FILE);
  res.json(JSON.parse(data));
});

app.post("/api/messages", (req, res) => {
  const {text} = req.body;
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push({ text, date: new Date().toISOString() });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
