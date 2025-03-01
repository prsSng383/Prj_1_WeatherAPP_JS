let inputValue = document.querySelector(".inpt");
let btnEvent = document.querySelector(".btn");


 btnEvent.addEventListener("click",()=>{
    const cityName = inputValue.value;
    fetchapi(cityName)
 })

const url = `https://api.openweathermap.org/data/2.5/weather?q=`
const api = `&appid=1c9752e267dfa76a83bac9a4c79cec9e&units=metric`

// triggers when search icon is onclicked .
const fetchapi= async (cityName)=>{
   
    try {
        const response =  await fetch(url+cityName+api);
        const data = await response.json();
        
        const weatherImage = document.querySelector(".weather-icon");
        const typeOfWeather = data.weather[0];
        const weatherInfo = typeOfWeather.main;
        if(weatherInfo == "Clear") {
            weatherImage.src="images/clear.png";
        }
        else if(weatherImage == "Clouds"){
            weatherImage.src="images/clouds.png";
        }
        else if(weatherImage == "Rain"){
            weatherImage.src="images/rain.png";
        }
        else if(weatherImage == "Drizzle"){
            weatherImage.src="images/drizzle.png";
        }
        else if(weatherImage == "Mist"){
            weatherImage.src="images/mist.png";
        }
        


        //temperture
        const temperature = document.querySelector(".temp");
        const temper = data.main.temp;
        temperature.innerHTML = `${Math.round(temper)}°C`;
        //city name
        const city = document.querySelector(".city");
        city.innerHTML = data.name;
        //humidity
        const humidity = document.querySelector(".humidity");
        const humid = data.main;
        humidity.innerHTML = `${humid.humidity}%` ;
        //wind speed
        const wind = document.querySelector(".wind");
        wind.innerHTML = `${data.wind.speed}km/hr`;           
         
         document.querySelector(".weather").style.display="block";
        
         inputValue.value = "";
        console.log(temperature);
    } catch (error) {
        console.log(error)
        console.log("Invalid city name.")
    }

 
}

fetchapi(cityName);