const apiKey = "YOUR_API_KEY";
const city = "Accra";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  const current = data.list[0];
  document.getElementById("weather-info").innerHTML = `
    <p>Temperature: ${current.main.temp} °F</p>
    <p>${current.weather[0].description}</p>
  `;

  // 3-day forecast
  const forecast = data.list.filter((_, i) => i % 8 === 0).slice(1, 4);
  forecast.forEach((day, idx) => {
    document.getElementById("weather-info").innerHTML += `
      <p>Day ${idx + 1}: ${day.main.temp} °F</p>
    `;
  });
}
getWeather()