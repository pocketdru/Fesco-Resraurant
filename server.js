const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./build/public/index.html"));
//   });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });