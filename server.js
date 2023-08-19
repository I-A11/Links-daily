import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("All users information");
});

app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.listen(5100, () => {
  console.log("server running on port 5100");
});
