import https from 'https';
import readline from 'readline/promises'
import chalk from 'chalk';

const API_KEY =  `ddddb8207cfd4cd06288c7fe4245e767`;
let BASE_URL ="https://api.openweathermap.org/data/2.5/weather";
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const city =await rl.question('Enter city Name : ');

const getWeather = async(city)=>{
    const url =
  `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;


    try {
        const response = await fetch(url);
        if(!response.ok){
           throw new Error('City no found. Please check city name')
        }
        const weatherData = await response.json();

        console.log(`\n Weather information`);
        console.log(`City :${weatherData.name}`)
        console.log(`Temperatur :${weatherData.main.temp}`)
        console.log(`Description :${weatherData.weather[0].description}`)

    } catch (error) {
        console.log(error)
    }

}
await getWeather(city);

