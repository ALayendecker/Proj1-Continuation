$(".dropdown-item").on("click", function() {
  var searchTerm;
  var moodQuote = $(this).attr("id");
  console.log(moodQuote);
  if (moodQuote === "creative") {
    searchTerm = "love";
  }
  if (moodQuote === "bummed") {
    searchTerm = "motivational";
  }
  if (moodQuote === "chill") {
    searchTerm = "humor";
  }
  if (moodQuote === "party") {
    searchTerm = "happiness";
  }
  if (moodQuote === "party") {
    searchTerm = "happiness";
  }
  if (moodQuote === "working") {
    searchTerm = "wisdom";
  }
  if (moodQuote === "feeling-good") {
    searchTerm = "success";
  }
  if (moodQuote === "romantic") {
    searchTerm = "romance";
  }
  if (moodQuote === "lonely") {
    searchTerm = "death";
  }

  var queryURL = {
    async: true,
    crossDomain: true,
    url: "https://goodreads-best-quotes.p.rapidapi.com/random/" + searchTerm,
    method: "GET",
    headers: {
      "x-rapidapi-host": "goodreads-best-quotes.p.rapidapi.com",
      "x-rapidapi-key": "b530af42f2mshe5e195db1b3a00jsncc9c887382eb"
    }
  };

  $.ajax(queryURL).done(function(response) {
    console.log("Call response: " + response);
    response = JSON.parse(response);
    var targetDiv = document.getElementById("quote");

    targetDiv.textContent = response.data.content;

    var newDiv = document.createElement("div");
    newDiv.textContent = response.data.author[0];

    targetDiv.appendChild(newDiv);
  });
});

// We then apply that CSS to our newDiv.
// newDiv.setAttribute("class", "fancy");
