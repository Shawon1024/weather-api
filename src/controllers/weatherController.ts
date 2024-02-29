import { Request, Response } from "express";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
} from "../services/weatherService.js";
import { validationResult } from "express-validator";

export const getWeatherData = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { city } = req.params;
    console.log(city);

    let finalWeatherData: WeatherData;

    if (city === "london") {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      finalWeatherData = generateDublinWeatherData();
    } else {
      res.status(404).send("City not found");
    }

    res.status(200).json(finalWeatherData);
  } catch (error) {
    res.status(500).send("Error in fetching weather data");
  }
};