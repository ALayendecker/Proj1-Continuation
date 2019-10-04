var moodMovie = [
  "Creative",
  "Bummed",
  "Chill",
  "Party",
  "Working",
  "Feeling Good"
];

var api;
$.getJSON("api.json", function(data) {
  api = data.youtubeAPI;
});

function callVideo() {
  $("iframe").empty();
  var movie = $(this).attr("data-name");
  var queryURL =
    // https://developers.google.com/youtube/v3/sample_requests + movie + api (key);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);

      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div tag

        var movieDiv = $("<div class='rating'>");
        // Creating a paragraph tag with the result item's rating

        var p = $("<p>").text("Rating: " + results[i].rating);
        movieDiv.prepend(p);
        <iframe></iframe>;
        $(movieDiv).prepend(
          '<img class="gif" src="' +
            response.data[i].images.fixed_height_still.url +
            '">'
        );

        $("#movies-view").prepend(movieDiv);
      }
    });
}
// function to pull query url variables
// _____________________________________________________________
//

//iFrame API Reference
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    //------- videoId: "//video id's need to be inserted here", using variables pulled from ajax requests
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

$("#add-hero").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var hero = $("#hero-input")
    .val()
    .trim();

  // Adding hero from the textbox to our array
  heroes.push(hero);

  // Calling renderButtons which handles the processing of our hero array
  renderButtons();
  $("#hero-input").val("");
});

// Adding a click event listener to all elements with a class of "hero-btn"
$(document).on("click", ".mood-btn", callVideo);
//if needing to stop the video after a certain amount of time played

// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }
