// $(document).ready(function() {
// var clickCount = localStorage.getItem("clickCount");
var creativeCounter = localStorage.getItem("creativeCount");
var bummedCounter = localStorage.getItem("bummedCount");
var chillCounter = localStorage.getItem("chillCount");
var partyCounter = localStorage.getItem("partyCount");
var workingCounter = localStorage.getItem("workingCount");
var feelingGoodCounter = localStorage.getItem("feelingGoodCount");
var romanticalCounter = localStorage.getItem("romanticalCount");
var lonelyCounter = localStorage.getItem("lonelyCount");

// creativeCounter = creativeCounter ? parseInt(creativeCounter) : 0;
// bummedCounter = bummedCounter ? parseInt(bummedCounter) : 0;
// chillCounter = chillCounter ? parseInt(chillCounter) : 0;
// partyCounter = partyCounter ? parseInt(partyCounter) : 0;
// workingCounter = workingCounter ? parseInt(workingCounter) : 0;
// feelingGoodCounter = feelingGoodCounter ? parseInt(feelingGoodCounter) : 0;
// romanticalCounter = romanticalCounter ? parseInt(romanticalCounter) : 0;
// lonelyCounter = lonelyCounter ? parseInt(lonelyCounter) : 0;

// $(".dropdown-item").click(function() {
$("#creative").click(function() {
  ++creativeCounter;
});
console.log("creative" + creativeCounter);
$("#bummed").click(function() {
  ++bummedCounter;
});
console.log("bummed" + bummedCounter);
$("#chill").click(function() {
  ++chillCounter;
});
console.log("chill" + chillCounter);
$("#party").click(function() {
  ++partyCounter;
});
console.log("part" + partyCounter);
$("#working").click(function() {
  ++workingCounter;
});
console.log("working" + workingCounter);
$("#feeling-good").click(function() {
  ++feelingGoodCounter;
});
console.log("feeling" + feelingGoodCounter);
$("#romantic").click(function() {
  ++romanticalCounter;
});
console.log("rom" + romanticalCounter);
$("#lonely").click(function() {
  ++lonelyCounter;
});
console.log("lonely" + lonelyCounter);

// $(".dropdown-item").on("click", counter);
// $("#creative").on("click", counter);
// $("#bummed").on("click", counter);
// $("#chill").on("click", counter);
// $("#party").on("click", counter);
// $("#working").on("click", counter);
// $("#feeling-good").on("click", counter);
// $("#romantic").on("click", counter);
// $("#lonely").on("click", counter);

localStorage.setItem("creativeCount", creativeCounter);
localStorage.setItem("bummedCount", bummedCounter);
localStorage.setItem("chillCount", chillCounter);
localStorage.setItem("partyCount", partyCounter);
localStorage.setItem("workingCount", workingCounter);
localStorage.setItem("feelingGoodCount", feelingGoodCounter);
localStorage.setItem("romanticalCount", romanticalCounter);
localStorage.setItem("lonelyCount", lonelyCounter);
// });
// });

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Creative",
      "Bummed",
      "Chill",
      "Party",
      "Working",
      "Feeling Good",
      "Romantic",
      "Lonely"
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          creativeCounter,
          bummedCounter,
          chillCounter,
          partyCounter,
          workingCounter,
          feelingGoodCounter,
          romanticalCounter,
          lonelyCounter
        ],
        // data: [1, 2, 3, 4, 5, 6, 7, 8],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ]
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)"
        // ],
        // borderWidth: 1
      }
    ]
  },
  options: {}
});
