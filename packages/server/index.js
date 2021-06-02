const express = require("express");
const boxen = require("boxen");
const chalk = require("chalk");

const app = express();

app.use("/mfe/music", express.static("../music/build"));
app.use("/mfe/welcome", express.static("../welcome/dist"));
app.use("/", express.static("../bootstrap/dist"));

app.all("/*", function (req, res) {
  res.sendFile("index.html", { root: "../bootstrap/dist" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(
    boxen(
      chalk.bold("Web Server running at: ") +
        chalk.underline.blue(`http://localhost:${PORT}`) +
        chalk.bold("\n\n" + chalk.cyan("Welcome ") + "Micro Frontend: ") +
        chalk.underline.blue(`http://localhost:${PORT}/hello`) +
        chalk.bold("\n" + chalk.cyan("Music ") + "Micro Frontend:   ") +
        chalk.underline.blue(`http://localhost:${PORT}/play`),
      { padding: 1, borderColor: "green" }
    )
  )
);
