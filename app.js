const apiKey = '0ee02bb896791039d838a72bb0867a6c';
const form = document.querySelector("form");
const weatherDiv = document.getElementById("weather");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = form.elements["city"].value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0];
      const temperature = data.main.temp;
      const description = weather.description;
      weatherDiv.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    })
    .catch((error) => console.error(error));
});
