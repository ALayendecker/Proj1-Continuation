var moodMovie = ["Happy", "Sad", "Bored", "Hungry", "Sleepy"]

var api;
$.getJSON("api.json", function(data) {
  api = data.youtubeAPI;
});


function callVideo() {
    $("#heroes-view").empty();
    var hero = $(this).attr("data-name");
    var queryURL =  // https://developers.google.com/youtube/v3/sample_requests + query items + api (key);
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
  
      console.log(response);
  
      var results = response.data;


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
