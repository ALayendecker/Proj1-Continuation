//firebase config
var firebaseConfig = {
  apiKey: "AIzaSyC4Rc8sreGaXTBDOt7SZ0MqqUab3uW8D0s",
  authDomain: "peppy-sensor-255201.firebaseapp.com",
  databaseURL: "https://peppy-sensor-255201.firebaseio.com",
  projectId: "peppy-sensor-255201",
  storageBucket: "",
  messagingSenderId: "924132566669",
  appId: "1:924132566669:web:35902be7f88eb27c3aa4c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//----------------------------
//clicker activity code
//----------------------------
var database = firebase.database();

// var creativeCounter = 0;
// var bummedCounter = 0;
// var chillCounter = 0;
// var partyCounter = 0;
// var workingCounter = 0;
// var feelingGoodCounter = 0;
// var romanticalCounter = 0;
// var lonelyCounter = 0;

// console.log(creativeCounter);
// database.ref().set({
//   creativeCount: creativeCounter,
//   bummedCount: bummedCounter,
//   chillCount: chillCounter,
//   partyCount: partyCounter,
//   workingCount: workingCounter,
//   feelingGoodCount: feelingGoodCounter,
//   romanticalCount: romanticalCounter,
//   lonelyCount: lonelyCounter
// });
// function databaseCounter() {
// Setting initial value of our click counter variable to 0

// FUNCTIONS + EVENTS
// --------------------------------------------------------------------------------

// On Click of Button

$(".dropdown-item").on("click", function() {
  console.log($(this).text());
});
//   if ("#creative") function(){
//     creativeCounter++
//     database.ref().set({
//       creativeCount: creativeCounter
//     });
//   }
// )}
// $("#creative").on("click", function() {
//   // Add to creativeCounter
//   creativeCounter++;
//   console.log(this);

//   database.ref().set({
//     creativeCount: creativeCounter
//   });
// });
// $("#bummed").on("click", function() {
//   // Add to bummedCounter
//   bummedCounter++;
//   console.log(this);

//   database.ref().set({
//     bummedCount: bummedCounter
//   });
// });
// $("#chill").on("click", function() {
//   // Add to chillCounter
//   chillCounter++;
//   console.log(this);

//   database.ref().set({
//     chillCount: chillCounter
//   });
// });
// $("#party").on("click", function() {
//   // Add to partyCounter
//   partyCounter++;
//   console.log(this);

//   database.ref().set({
//     partyCount: partyCounter
//   });
// });
// $("#working").on("click", function() {
//   // Add to workingCounter
//   workingCounter++;
//   console.log(this);

//   database.ref().set({
//     workingCount: workingCounter
//   });
// });
// $("#feeling-good").on("click", function() {
//   // Add to feelingGoodCounter
//   feelingGoodCounter++;
//   console.log(this);

//   database.ref().set({
//     feelingGoodCount: feelingGoodCounter
//   });
// });
// $("#romantic").on("click", function() {
//   // Add to romanticalCounter
//   romanticalCounter++;
//   console.log(this);

//   database.ref().set({
//     romanticalCount: romanticalCounter
//   });
// });
// $("#lonely").on("click", function() {
//   // Add to lonelyCounter
//   lonelyCounter++;
//   console.log(this);

//   database.ref().set({
//     lonelyCount: lonelyCounter
//   });
// });

// MAIN PROCESS + INITIAL CODE
// --------------------------------------------------------------------------------

// Using .on("value", function(snapshot)) syntax will retrieve the data
// from the database (both initially and every time something changes)
// This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
database.ref().on(
  "value",
  function(snapshot) {
    // Then we console.log the value of snapshot
    console.log(snapshot.val().creativeCount);
    console.log(snapshot.val().bummedCount);
    console.log(snapshot.val().chillCount);
    console.log(snapshot.val().partyCount);
    console.log(snapshot.val().workingCount);
    console.log(snapshot.val().feelingGoodCount);
    console.log(snapshot.val().romanticalCount);
    console.log(snapshot.val().lonelyCount);

    // Update the counter variable with data from the database.
    creativeCounter = snapshot.val().creativeCount;
    bummedCounter = snapshot.val().bummedCount;
    chillCounter = snapshot.val().chillCount;
    partyCounter = snapshot.val().partyCount;
    workingCounter = snapshot.val().workingCount;
    feelingGoodCounter = snapshot.val().feelingGoodCount;
    romanticalCounter = snapshot.val().romanticalCount;
    lonelyCounter = snapshot.val().lonelyCount;
    // Then we change the html associated with the number.

    // the #creative-value stuff needs to be going into d3 not into
    // $("#creative-value").text(snapshot.val().creativeCount);
    // $("#creative-value").text(snapshot.val().bummedCount);
    // $("#creative-value").text(snapshot.val().chillCount);
    // $("#creative-value").text(snapshot.val().partyCount);
    // $("#creative-value").text(snapshot.val().workingCount);
    // $("#creative-value").text(snapshot.val().feelingCount);
    // $("#creative-value").text(snapshot.val().romanticalCount);
    // $("#creative-value").text(snapshot.val().lonelyCount);

    // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
    // Again we could have named errorObject anything we wanted.
  },
  function(errorObject) {
    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  }
);
// $(document).ready(function() {
//   $(document).on("click", ".dropdown-item", databaseCounter);
// });
//----------------------------
//D3 Code
//----------------------------

// dataset = {
//   children: [
//     { Name: "Creative", Count: 0 },
//     { Name: "Bummed", Count: 0 },
//     { Name: "Chill", Count: 0 },
//     { Name: "Party", Count: 0 },
//     { Name: "Working", Count: 0 },
//     { Name: "Feeling Good", Count: 0 },
//     { Name: "Rommantical", Count: 0 },
//     { Name: "Lonely", Count: 0 }
//   ]
// };

// // dataset = {
// //   children: [
// //     { Name: "Creative", Count: snapshot.val().creativeCount },
// //     { Name: "Bummed", Count: snapshot.val().bummedCount },
// //     { Name: "Chill", Count: snapshot.val().chillCount },
// //     { Name: "Party", Count: snapshot.val().partyCount },
// //     { Name: "Working", Count: snapshot.val().workingCount },
// //     { Name: "Feeling Good", Count: snapshot.val().feelingGoodCout },
// //     { Name: "Rommantical", Count: snapshot.val().romanticalCount },
// //     { Name: "Lonely", Count: snapshot.val().lonelyCount }
// //   ]
// // };
// function createChart() {
//   var diameter = 600;
//   var color = d3.scaleOrdinal(d3.schemeCategory20);

//   var bubble = d3
//     .pack(dataset)
//     .size([diameter, diameter])
//     .padding(1.5);

//   var svg = d3
//     .select("body")
//     .append("svg")
//     .attr("width", diameter)
//     .attr("height", diameter)
//     .attr("class", "bubble");

//   var nodes = d3.hierarchy(dataset).sum(function(d) {
//     return d.Count;
//   });

//   var node = svg
//     .selectAll(".node")
//     .data(bubble(nodes).descendants())
//     .enter()
//     .filter(function(d) {
//       return !d.children;
//     })
//     .append("g")
//     .attr("class", "node")
//     .attr("transform", function(d) {
//       return "translate(" + d.x + "," + d.y + ")";
//     });

//   node.append("title").text(function(d) {
//     return d.Name + ": " + d.Count;
//   });

//   node
//     .append("circle")
//     .attr("r", function(d) {
//       return d.r;
//     })
//     .style("fill", function(d, i) {
//       return color(i);
//     });

//   node
//     .append("text")
//     .attr("dy", ".2em")
//     .style("text-anchor", "middle")
//     .text(function(d) {
//       return d.data.Name.substring(0, d.r / 3);
//     })
//     .attr("font-family", "Days One", "sans-serif")
//     .attr("font-size", function(d) {
//       return d.r / 5;
//     })
//     .attr("fill", "white");

//   node
//     .append("text")
//     .attr("dy", "1.3em")
//     .style("text-anchor", "middle")
//     .text(function(d) {
//       return d.data.Count;
//     })
//     .attr("font-family", "Days One", "sans-serif")
//     .attr("font-size", function(d) {
//       return d.r / 5;
//     })
//     .attr("fill", "white");

//   d3.select(self.frameElement).style("height", diameter + "px");
// }
// //modified from Alok K. Shukla bubble chart
// //found https://bl.ocks.org/alokkshukla/3d6be4be0ef9f6977ec6718b2916d168
