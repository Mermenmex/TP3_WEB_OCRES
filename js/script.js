
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}

function city() {
  var city = document.getElementById("city-input").value;

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });

}

function getThreeDayForecast() {
  var city = document.getElementById("city-input").value;
  /*console.table(forecastObject);*/
  /*var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));*/
  /*console.table(forecast);*/

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchThreeDayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);


      /*const main = data.weather[2].main;
      const description = data.weather[2].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[2].icon);

      const main = data.weather[3].main;
      const description = data.weather[3].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[3].icon);*/

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('tmr-forecast-main').innerHTML = main;
      document.getElementById('tmr-forecast-more-info').innerHTML = description;
      document.getElementById('tmr-icon-weather-container').innerHTML = icon;
      document.getElementById('tmr-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('afttmr-forecast-main').innerHTML = main;
      document.getElementById('afttmr-forecast-more-info').innerHTML = description;
      document.getElementById('afttmr-icon-weather-container').innerHTML = icon;
      document.getElementById('afttmr-forecast-temp').innerHTML = `${temp}°C`;

      document.getElementById('aftafttmr-forecast-main').innerHTML = main;
      document.getElementById('aftafttmr-forecast-more-info').innerHTML = description;
      document.getElementById('aftafttmr-icon-weather-container').innerHTML = icon;
      document.getElementById('aftafttmr-forecast-temp').innerHTML = `${temp}°C`;


    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });



}
