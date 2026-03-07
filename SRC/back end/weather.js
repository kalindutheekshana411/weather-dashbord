const express = require("express");
const axios = require("axios");
const router = express.Router();
const cors = require("cors");

const API_KEY = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
const app = express();
const PORT = 3000;

router.get("/weather", async (req, res) => {
  const city = req.query.city;

app.use(cors());
app.use(express.json());

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: "City not found" });
  }
const API_KEY = "YOUR_API_KEY_HERE"; 

app.get("/api/weather", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ message: "City name is required" });
    }

    try {
        2``
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);

        
        const weatherData = {
            name: response.data.name,
            country: response.data.sys.country,
            temp: Math.round(response.data.main.temp),
            feels_like: Math.round(response.data.main.feels_like),
            humidity: response.data.main.humidity,
            wind_speed: response.data.wind.speed,
            pressure: response.data.main.pressure,
            visibility: (response.data.visibility / 1000).toFixed(1), 
            condition: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        };

        res.json(weatherData);

    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).json({ message: "City not found" });
        } else {
            res.status(500).json({ message: "Error fetching weather data" });
        }
    }
});

module.exports = router;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});