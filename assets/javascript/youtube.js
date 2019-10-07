//possible need to put onClick="window.location.reload()"
//for refreshing the page on a mood click to correctly load new songs and videos

var moodVideo = [
  "Creative",
  "Bummed",
  "Chill",
  "Party",
  "Working",
  "Feeling Good"
];
console.log("hello world");

function callVideo() {
  // $("iframe").empty();
  var video = $(this).attr("data-name");

  var queryURL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id(videoId))&q=" +
    video +
    "?chart=mostPopular&key=AIzaSyBFSvZ6NlQxxUlGjSZ_agd4rSFDujrNx1E";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    var calledVideoId = response.items[0].id.videoId;
    console.log(calledVideoId);

    $("#player").attr(
      "src",
      "https://www.youtube.com/embed/" +
        calledVideoId +
        "?enablejsapi=1&widgetid=1"
    );
    console.log(
      "https://www.youtube.com/embed/" +
        calledVideoId +
        "?enablejsapi=1&widgetid=1"
    );
  });
}
// console.log(dynamicVideoId);
// var tag = document.createElement("script");

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;

// videoId = dynamicVideoId;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("player", {
//     height: "390",
//     width: "640",
//     videoId: "qXUJSCZiU48",
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// }

// // loadVideoById({
// //   videoId: calledVideoId,
// //   startSeconds: 5,
// //   endSeconds: 60,
// //   suggestedQuality: "large"
// // });

// // loadVideoById(calledVideoId, 5, "large");

// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     //if wanting to stop setTimeout
//     // setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }

$(document).ready(function() {
  $(document).on("click", ".dropdown-item", callVideo);
});

// $(document).on("click", ".dropdown-item", loadVideoById);
// var calledVideoId = JSON.stringify(response.items[0].id.videoId);
