// 'http://api.weatherapi.com/v1/current.json?key=3d8c3846d674495ba38141908210511&q=' + city + '&aqi=no'


let res;
    

function getWeather(){
    fetch('https://api.weatherapi.com/v1/current.json?key=3d8c3846d674495ba38141908210511&q=' + $("#ct").val()+ '&aqi=no')
  .then(response => response.json())
  .then(data => {
    res = data;
    $("#cityName").html(res.location.name)
    $("#temp_c").html(" "+ res.current.temp_c + "°C")
    $("#condition").html(" "+ res.current.condition.text)
    $("#image").attr("src", res.current.condition.icon)
    $('#update').html(res.current.last_updated)
    $("#windspeed").html(res.current.wind_kph + " km/hr")
    $("#humidity").html(res.current.humidity + " %")
    $("#feelsLike").html(res.current.feelslike_c + "°C")
    console.log(res.current.feelslike_c )
  });
}

