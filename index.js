const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello there!");
});

app.get("/show", async (req, res) => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured" });
  }
});

app.get("/achievement", async (req, res) => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef"
    );
    const data = response.data;
    const AchievementData = data.find(
      (item) => item.achievement === "BackEnd What?"
    );
    if (AchievementData) {
      res.send(AchievementData.achievement);
    } else {
      res.send(404).send("Achievement not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured" });
  }
});

app.get("/greet", async (req, res) => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef"
    );
    const data = response.data;
    const GreetingData = data.find(
      (item) => item.sayGreeting === "Hello From StackTrek"
    );
    if (GreetingData) {
      res.send(GreetingData.sayGreeting);
    } else {
      res.send(404).send("sayGreeting Not Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occured" });
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});