const express = require("express");

const app = express();



// app.use("/", (req, res) => {
//   res.send("Home");
// });
app.use("/home", (req, res) => {
  res.send("hello from server");
});

app.use("/ping", (req, res) => {
  res.send("pong");
});

app.use("*", (req, res) => {
  res.send("invalid route");
});



app.listen(3000);
