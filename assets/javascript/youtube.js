// var moodMovie = [
//   "Creative",
//   "Bummed",
//   "Chill",
//   "Party",
//   "Working",
//   "Feeling Good"
// ];
// console.log("hello world");
// // var api;
// // $.getJSON("api.json", function(data) {
// //   api = data.youtubeAPI;
// // });

// function callVideo() {
//   // $("iframe").empty();
//   var movie = $(this).attr("data-name");
//   var queryURL =
//     // https://developers.google.com/youtube/v3/sample_requests + movie + api (key);

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(queryURL);

//       console.log(response);

//       for (var i = 0; i < moodMovie.length; i++) {
//         a.attr("data-name", moodMovie[i]);
//         // Providing the initial button text
//         a.text(moodMovie[i]);
//       }

//             //this will be to add titles under videos with rework?
//       //=========================================================
//       //    var results = response.data;
//       // Creating a div to hold the hero
//       // for (var i = 0; i < results.length; i++) {
//       //   // Creating and storing a div tag

//       //   var heroDiv = $("<div class='rating'>");
//       //   // Creating a paragraph tag with the result item's rating

//       //   var p = $("<p>").text("Rating: " + results[i].rating);
//       //   heroDiv.prepend(p);

//       //   $(heroDiv).prepend(
//       //     '<img class="gif" src="' +
//       //     response.data[i].images.fixed_height_still.url +
//       //     '">'
//       //   );

//       //   $("#heroes-view").prepend(heroDiv);
//       // }
// // }
// //=======================================

// // function to pull query url variables
// // _____________________________________________________________
// //

//iFrame API Reference
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
// var dynamicVideoId = ajaxcall api for video/playlist id's;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    //videoId: dynamicVideoId,
    videoId: "jUzKDO3ue1I",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //if wanting to stop setTimeout
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
