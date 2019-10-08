// $(document).ready(function() {
// var clickCount = localStorage.getItem("clickCount");
// var creativeCounter = localStorage.getItem("creativeCount");
// var bummedCounter = localStorage.getItem("bummedCount");
// var chillCounter = localStorage.getItem("chillCount");
// var partyCounter = localStorage.getItem("partyCount");
// var workingCounter = localStorage.getItem("workingCount");
// var feelingGoodCounter = localStorage.getItem("feelingGoodCount");
// var romanticalCounter = localStorage.getItem("romanticalCount");
// var lonelyCounter = localStorage.getItem("lonelyCount");

var creativeCounter = creativeCounter ? parseInt(creativeCounter) : 0;
var bummedCounter = bummedCounter ? parseInt(bummedCounter) : 0;
var chillCounter = chillCounter ? parseInt(chillCounter) : 0;
var partyCounter = partyCounter ? parseInt(partyCounter) : 0;
var workingCounter = workingCounter ? parseInt(workingCounter) : 0;
var feelingGoodCounter = feelingGoodCounter ? parseInt(feelingGoodCounter) : 0;
var romanticalCounter = romanticalCounter ? parseInt(romanticalCounter) : 0;
var lonelyCounter = lonelyCounter ? parseInt(lonelyCounter) : 0;

// $(".dropdown-item").click(function() {
$("#creative").click(function() {
  creativeCounter++;
  renderChart();
});

$("#bummed").click(function() {
  bummedCounter++;
  renderChart();
});

$("#chill").click(function() {
  chillCounter++;
  renderChart();
});

$("#party").click(function() {
  partyCounter++;
  renderChart();
});

$("#working").click(function() {
  workingCounter++;
  renderChart();
});

$("#feeling-good").click(function() {
  feelingGoodCounter++;
  renderChart();
});

$("#romantic").click(function() {
  romanticalCounter++;
  renderChart();
});

$("#lonely").click(function() {
  lonelyCounter++;
  renderChart();
});

// function reload() {
//   var container = document.getElementById("chart-div");
//   var content = container.innerHTML;
//   container.innerHTML = content;

//   //this line is to watch the result in console , you can remove it later
//   console.log("Refreshed");
// }
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

function renderChart() {
  var data = {
    datasets: [
      {
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 205, 0.2)",
          "rgba(150, 100, 64, 0.2)"
        ],
        data: [
          creativeCounter,
          bummedCounter,
          chillCounter,
          partyCounter,
          workingCounter,
          feelingGoodCounter,
          romanticalCounter,
          lonelyCounter
        ]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Creative",
      "Bummed",
      "Chill",
      "Party",
      "Working",
      "Feeling Good",
      "Romantic",
      "Lonely"
    ]
  };

  new Chart(document.getElementById("myChart"), {
    type: "doughnut",
    data: data
  });
}
