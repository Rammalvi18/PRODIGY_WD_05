const API_KEY = "S22XB9WSTGGDK2Y7ZSDWC253X"; // Visual Crossing API Key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  // Correct API endpoint for Visual Crossing
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const today = data.days[0]; // Get today's weather from the daily forecast

      document.getElementById("cityName").innerText = data.resolvedAddress;
      document.getElementById("temperature").innerText = `Temperature: ${today.temp} °C`;
      document.getElementById("description").innerText = `Description: ${today.conditions}`;
      document.getElementById("humidity").innerText = `Humidity: ${today.humidity}%`;
      document.getElementById("wind").innerText = `Wind Speed: ${today.windspeed} km/h`;
      document.getElementById("weatherBox").style.display = "block";
    })
    .catch(error => {
      alert("Error: " + error.message);
      document.getElementById("weatherBox").style.display = "none";
    });
}
