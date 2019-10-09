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
    // "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id(videoId))&q=" +
    // video +
    // "?chart=mostPopular&key=AIzaSyCMslwSlrH6sTgpkyNZJZ2lmaIRpX7Ijz8";
    "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id(videoId))&q=" +
    video +
    "&key=AIzaSyAPBxVPucdz2gMdvX7MXKgvmnCO3CUWtvw";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    var calledVideoId = response.items[0].id.videoId;
    console.log(calledVideoId);

    $("#player").attr({
      src:
        "https://www.youtube.com/embed/" +
        calledVideoId +
        "?enablejsapi=1&widgetid=1",
      style: "width: 600px; height: 350px;"
    });
    console.log(
      "https://www.youtube.com/embed/" +
        calledVideoId +
        "?enablejsapi=1&widgetid=1"
    );
  });
}
$(document).ready(function() {
  $(document).on("click", ".dropdown-item", callVideo);
});
