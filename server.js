import express from "express";
import { spawn } from "node:child_process";

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("bukku-v2: ok");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`HTTP wrapper listening on ${PORT}`);
});
