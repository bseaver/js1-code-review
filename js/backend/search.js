var apiKey = require('./../../.env').apiKey; 
console.log(apiKey);

var findDrsSample = require('./search_sample.js').findDrsSample;
console.log(findDrsSample);

function betterDoctorAPI() {
  // this.queryParametersGoHere = arguments;
}

// betterDoctorAPI.prototypes go here to process parameters, prepare URL and process results

betterDoctorAPI.prototype.findDrs = function (nextResultSet, successCallBack, failCallBack){
  $.get("URL-Goes-Here")
  .done(function(response){
    console.log(response);
    // Back End Processing goes Here
    // successCallBack(resultsGoHere);
  })
  .fail(function(error){
    console.log(error);
    // Back End Processing goes Here
    // failCallBack(errrosGoHere);
  });

};

exports.findDrsModule = betterDoctorAPI;
