var creativeCounter = creativeCounter ? parseInt(creativeCounter) : 0;
var bummedCounter = bummedCounter ? parseInt(bummedCounter) : 0;
var chillCounter = chillCounter ? parseInt(chillCounter) : 0;
var partyCounter = partyCounter ? parseInt(partyCounter) : 0;
var workingCounter = workingCounter ? parseInt(workingCounter) : 0;
var feelingGoodCounter = feelingGoodCounter ? parseInt(feelingGoodCounter) : 0;
var romanticalCounter = romanticalCounter ? parseInt(romanticalCounter) : 0;
var lonelyCounter = lonelyCounter ? parseInt(lonelyCounter) : 0;

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
