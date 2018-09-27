
$(document).ready(function() {

$("button").on("click", function () {

  var person = $(this).attr("data-person");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person +
    "&api_key=886qtj1IPrQN0SwkUM14h3JGGRlY9kYK&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function(response) {
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

      var playerDiv = $("<div style='float:left; margin: 10px;'>");

      // var playerDiv = $("<div class='col-sm-3'>");


      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var playerImage  = $("<img/>");

      playerImage.addClass("Img");

      playerImage.attr("src", results[i].images.fixed_height.url);

      playerImage.attr("data-still", results[i].images.fixed_height_still.url);

      playerImage.attr("data-animate", results[i].images.fixed_height.url);

      playerDiv.append(p);
      playerDiv.append(playerImage);
      

      $("#gifs-appear-here").prepend(playerDiv);
      }
    
      
      $(".Img").on("click", function() {
            
        var state = $(this).attr("data-state"); 
        console.log(this);

        if (state == "still") {
        
        $(this).attr("src", $(this).data("animate"));
        
        $(this).attr("data-state", "animate");

        } else {
                
        $(this).attr("src", $(this).data("still"));
        
        $(this).attr("data-state", "still");
      }  
    })    
    });
  });
});



        
    
      
    
         
    
  

