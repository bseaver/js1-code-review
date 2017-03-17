var findDrs = require('./../js/backend/search.js').findDrsModule; 

var displayResults = function(searchResults) {
  var displayResult = "";

  if (displayResult) {
    $("#searchOutput").append(displayResult);
  }
};

var displayFailure = function(errorResult){
  var displayResult = "";

  $("#searchOutput").append(displayResult);
};


$(document).ready(function(){
  // Handle Search Form Here

});
