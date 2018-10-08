


var soccerPlayers =  ["Ronaldinho", "Alessandro Del Piero", "Diego Maradona", "Ronaldo", "Jesse Lingard","Paul Pogba"]

$(document).ready(function() {
  
$(document).on("click",".gif",function () {

  var person = $(this).attr("data-person");
console.log(person)
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person +
    "&api_key=886qtj1IPrQN0SwkUM14h3JGGRlY9kYK&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function(response) {
      console.log(response);

      var results = response.data;

      $("#gifs-appear-here").empty();

      for (var i = 0; i < results.length; i++) {

      var playerDiv = $("<div style='float:left; margin: 10px; border-style: outset;border-color: white'>");

      // var playerDiv = $("<div class='col-sm-3'>");


      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var playerImage  = $("<img/>");

      playerImage.addClass("Img");

      playerImage.attr("src", results[i].images.fixed_height_still.url);

      playerImage.attr("data-animate", results[i].images.fixed_height_still.url);

      playerImage.attr("data-still", results[i].images.fixed_height.url);

      playerDiv.append(p);
      playerDiv.append(playerImage);
      

      $("#gifs-appear-here").prepend(playerDiv);
      }
    
      
      $(".Img").on("click", function() {
            
        var state = $(this).attr("data-state"); 
        console.log(this);

        if (state === "still") {
        
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");

        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
      }  
    })    
    });
  });
});

  function renderButtons() {
    
  $("#soccerButtons").empty();
  
  for (var i = 0; i < soccerPlayers.length; i++) {

    var playerButton = $("<button>");

    playerButton.attr("data-person", soccerPlayers[i]);
playerButton.addClass("gif")
    playerButton.text(soccerPlayers[i]);
  
    $("#soccerButtons").append(playerButton);
    // console.log(results);
    
   
  };
  };

  renderButtons();

  $("#sbmtButton").on("click", function(event){ 
    
    event.preventDefault();

    var a = $("#gif-input").val().trim();

    if(a!= ""||undefined){
      soccerPlayers.push(a);
    }

  

renderButtons();


  })








        
    
      
    
         
    
  

