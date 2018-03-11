/*

- Sign up for openweathermap.org and generate an API key.
- Use either $.ajax to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/


$(document).ready(function(){
var city = prompt("Enter Your City:"); //variables hold the user's input
var country = prompt("Enter Your Country:");
var temp = 0;
var tempMin=0;
var tempHigh=0;
var humidity =0;

if (city === "" || country === "") {
    // user pressed OK, but the input field was empty
    alert("OOPS! You Must Enter A City & A Country!")
};


var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = ""; //your key will go here!


  $.ajax({
    url: weatherUrl+city+","+country+"&appid="+apiKey,

    success: function(r){
      temp=r.main.temp;
      tempMin=r.main.temp_min;
      tempHigh=r.main.temp_max;
      humidity= r.main.humidity;
      convert();

      console.log(r);
    },
      error: function(r){
        console.log(r);
      }


    });

    function convert(){
      var temp2 = Math.round(temp * 9 / 5 - 459.67);
      var tempMin2= Math.round(tempMin * 9 / 5 - 459.67);
      var tempHigh2= Math.round(tempHigh * 9 / 5 - 459.67);
      $("#location").html(city + ", " + country)
      $('#temperatureF').html("Currently: " +temp2 + " F");
      $('#highsF').html(tempHigh2 +" F");
      $('#lowsF').html(tempMin2+ " F");
      $("#humidity").html(humidity + "% Humidity");

      var temp3 = Math.round((temp2 - 32 ) * (5/9));
      var tempMin3 = Math.round((tempMin2 - 32 ) * (5/9));
      var tempHigh3 = Math.round((tempHigh2 - 32 ) * (5/9));
      $('#temperatureC').html("Currently: " +temp3 + " C");
      $('#highsC').html(tempHigh3 +" C");
      $('#lowsC').html(tempMin3+ " C");


    }


});
