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

// Setting initial value of our click counter variable to 0
var clickCounter = 0;

// FUNCTIONS + EVENTS
// --------------------------------------------------------------------------------

// On Click of Button
$("#creative").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#bummed").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#chill").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#party").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#working").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#feeling-good").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#romantic").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});
$("#lonely").on("click", function() {
  // Add to clickCounter
  clickCounter++;

  //  Store Click Data to Firebase in a JSON property called clickCount
  // Note how we are using the Firebase .set() method
  database.ref().set({
    clickCount: clickCounter
  });
});

// MAIN PROCESS + INITIAL CODE
// --------------------------------------------------------------------------------

// Using .on("value", function(snapshot)) syntax will retrieve the data
// from the database (both initially and every time something changes)
// This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
database.ref().on(
  "value",
  function(snapshot) {
    // Then we console.log the value of snapshot
    console.log(snapshot.val());

    // Update the clickCounter variable with data from the database.
    clickCounter = snapshot.val().clickCount;

    // Then we change the html associated with the number.
    $("#click-value").text(snapshot.val().clickCount);

    // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
    // Again we could have named errorObject anything we wanted.
  },
  function(errorObject) {
    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
  }
);

//----------------------------
//D3 Code
//----------------------------
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3
  .pack(dataset)
  .size([diameter, diameter])
  .padding(1.5);

var node = svg
  .selectAll(".node")
  .data(bubble(nodes).descendants())
  .enter()
  .filter(function(d) {
    return !d.children;
  })
  .append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

dataset = {
  children: [
    { Name: "Creative", Count: 0 },
    { Name: "Bummed", Count: 0 },
    { Name: "Chill", Count: 0 },
    { Name: "Party", Count: 0 },
    { Name: "Working", Count: 0 },
    { Name: "Feeling Good", Count: 0 },
    { Name: "Rommantical", Count: 0 },
    { Name: "Lonely", Count: 0 }
  ]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3
  .pack(dataset)
  .size([diameter, diameter])
  .padding(1.5);

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", diameter)
  .attr("height", diameter)
  .attr("class", "bubble");

var nodes = d3.hierarchy(dataset).sum(function(d) {
  return d.Count;
});

var node = svg
  .selectAll(".node")
  .data(bubble(nodes).descendants())
  .enter()
  .filter(function(d) {
    return !d.children;
  })
  .append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

node.append("title").text(function(d) {
  return d.Name + ": " + d.Count;
});

node
  .append("circle")
  .attr("r", function(d) {
    return d.r;
  })
  .style("fill", function(d, i) {
    return color(i);
  });

node
  .append("text")
  .attr("dy", ".2em")
  .style("text-anchor", "middle")
  .text(function(d) {
    return d.data.Name.substring(0, d.r / 3);
  })
  .attr("font-family", "Days One", "sans-serif")
  .attr("font-size", function(d) {
    return d.r / 5;
  })
  .attr("fill", "white");

node
  .append("text")
  .attr("dy", "1.3em")
  .style("text-anchor", "middle")
  .text(function(d) {
    return d.data.Count;
  })
  .attr("font-family", "Days One", "sans-serif")
  .attr("font-size", function(d) {
    return d.r / 5;
  })
  .attr("fill", "white");

d3.select(self.frameElement).style("height", diameter + "px");

//modified from Alok K. Shukla bubble chart
//found https://bl.ocks.org/alokkshukla/3d6be4be0ef9f6977ec6718b2916d168
