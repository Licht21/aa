import express from "express";

const app = express();

app.listen(8080, "localhost", () => {
  console.log("Success");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
