$( document ).ready
(
  function()
  { //morals and values
    var planets = ["The Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    var weightMultiples = [27.9, 0.377, 0.9032, 1, 0.1655, 0.3895, 2.640, 1.139, 0.917, 1.148, 0.06]; 

    //populate the fields
    for(var i = 0; i < planets.length; i++)
    { 
      var option = $("<option></option>").text(planets[i]).val(weightMultiples[i]);
      $("#planetList").append(option);
    }


    window.getWeight = function()
    {
         //access values
      var weight = $("#userWeight").val();
      var planet = $(":selected").text();
      var mult = $(":selected").val();
     
      //do math
      
      var answer = weight*mult;
      
      $("#output").text("You would weigh " + answer + " on " + planet);
      
    
    };
    
    
    
  }
); 