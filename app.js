const API_KEY = `9493056fe6912a63eadeab162658ddb5`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`;

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {
  weather.innerHTML = `<section class="loading"> 
  <h2>Getting Weather...</h2>
  <div class="loader"></div>
  </section>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `
    <h1>City Not Found</h1>
    `;
    return;
  }
  console.log(data);
  weather.innerHTML = `
<div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
        </div>
        <div>
          <h2>${data.main.temp} ℃</h2>
          <h4>${data.weather[0].main}</h4>
          <h4>${data.sys.country}</h4>
        </div>
`;
};

form.addEventListener("submit", function (e) {
  getWeather(search.value);
  e.preventDefault();
});
