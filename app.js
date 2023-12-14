

window.weatherChecking = function () {
    let cityName = document.querySelector("#formGroupExampleInput").value;

    let API_Key = '9cbee56634f1427788f8b341807611fa';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector("#cityAndMonth").innerHTML = `${response.data.name} ${response.data.sys.country}`
    document.querySelector("#temperatur").innerHTML = `${response.data.main.temp}°C`
    document.querySelector("#min_tem").innerHTML = `Min temp : <strong>${response.data.main.temp_min}°C</strong>`
    document.querySelector("#max_tem").innerHTML = `Max temp : <strong>${response.data.main.temp_max}°C</strong>`
    document.querySelector("#weatherSetuation").innerHTML = `${response.data.weather[0].main}`

  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#weatherSetuation").innerHTML = " error in getting weather data"
  });
  
}