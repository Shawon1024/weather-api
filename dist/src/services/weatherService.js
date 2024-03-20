import { faker } from '@faker-js/faker';
import { storeWeatherData } from "../helpers/helpers.js";
export const generateLondonWeatherData = () => {
    const generatedWeatherData = {
        city: "London",
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    return generatedWeatherData;
};
export const generateDublinWeatherData = () => {
    const generatedWeatherData = {
        city: "Dublin",
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    return generatedWeatherData;
};
//# sourceMappingURL=weatherService.js.map