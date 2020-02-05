const showWeather = document.getElementById('show_weather');
const outputContainer = document.getElementById('output_container');

function getWeather() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4e425bbc646532c6fe89487c24765ac7/37.8267,-122.4233,2020-02-07T12:00:00?lang=ru&units=si', {
    method: 'GET',
  })
    .then((responce) => responce.json())
    .then((responce) => {
      // eslint-disable-next-line no-undef
      const unixDate = moment.unix(responce.currently.time);
      const humanDate = unixDate.locale('ru').format('MMMM Do YYYY, h:mm:ss a');

      outputContainer.innerHTML = `<div class="col-md-8">
<h3>Date: ${humanDate}</h3></div>
<div class="col-md-8">
<h4>Summary: ${responce.currently.summary};</h4>
<div class="col-md-6">
      <h4>Temp: ${responce.currently.temperature}</h4>
    </div>
    <div class="col-md-6">
      <h4>Precip Accumulation: ${responce.currently.precipAccumulation}</h4>
    </div>
    <div class="col-md-6">
      <h4>Humidity: ${responce.currently.humidity}</h4>
    </div>
    <div class="col-md-6">
      <h4>Pressure: ${responce.currently.pressure}</h4>
    </div>
    <div class="col-md-6">
     <h4> Wind speed: ${responce.currently.windSpeed}</h4>
    </div>
</div>`;
      outputContainer.classList.add('d-block');
    });
}

showWeather.addEventListener('click', (event) => {
  event.preventDefault();
  getWeather();
});
