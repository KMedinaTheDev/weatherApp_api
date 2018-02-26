/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

// 'use strict';
// (function() {
//
//
//   });
// })();

var city = prompt("Enter Your City:"); //variables hold the user's input
var country = prompt("Enter Your Country:");
var temp = 0;
var tempMin=0;
var tempHigh=0;
// console.log(city);
// console.log(country);
if (city === "" || country === "") {
    // user pressed OK, but the input field was empty
    alert("OOPS! You Must Enter A City & A Country!")
};


var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "cdbb4ca76406acf8f22bd50280c0bb9b";

$(document).ready(function(){
  $.ajax({
    url: weatherUrl+city+","+country+"&appid="+apiKey,

    success: function(r){
      temp=r.main.temp;
      tempMin=r.main.temp_min;
      tempHigh=r.main.temp_max;
      convert();
      console.log(r);
    },
      error: function(r){
        console.log(r);
      }

    });

    function convert(){
      var temp2 = temp * 9 / 5 - 459.67;
      var tempMin2= tempMin * 9 / 5 - 459.67;
      var tempHigh2= tempHigh * 9 / 5 - 459.67;
      $('#temperature').html(temp2 + " F" + " is the current temperature in " +city);
      $('#highsLows').html("Today's High is: "+tempHigh2 +" F"+ " & Today's Low is: "+tempMin2+ " F");
    }
});
