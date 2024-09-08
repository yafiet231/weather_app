function fetchWeather() {
  let searchInput = document.getElementById("search").value;
  const weatherDataSection = document.getElementById("weather-data");
  const apiKey = "8d0dacd3fff228f765e387d228271877";
weatherDataSection.style.display = "flex";
weatherDataSection.innerHTML = `
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
<div>
  <h2>${data.name}</h2>
  <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
  <p><strong>Description:</strong> ${data.weather[0].description}</p>
</div>
`
function fetchWeather() {
  // Previous code

  async function getLonAndLat() {

  }

  async function getWeatherData(lon, lat) {
	  document.getElementById("search").value = "";
const geocodeData = await getLonAndLat();
getWeatherData(geocodeData.lon, geocodeData.lat);

  }
}
const response = await fetch(geocodeURL);
if (!response.ok) {
  console.log("Bad response! ", response.status);
  return;
}
const data = await response.json();
if (data.length == 0) {
  console.log("Something went wrong here.");
  weatherDataSection.innerHTML = `
  <div>
    <h2>Invalid Input: "${searchInput}"</h2>
    <p>Please try again with a valid <u>city name</u>.</p>
  </div>
  `;
  return;
} else {
  return data[0];
}
