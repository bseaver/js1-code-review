var apiKey = require('./../../.env').apiKey;


function betterDoctorAPI() {
  // this.queryParametersGoHere = arguments;
}

// betterDoctorAPI.prototypes go here to process parameters, prepare URL and process results
// https://api.betterdoctor.com/2016-03-01/doctors?query=Toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=82077cc707ef1e19cafb5f861298526c
betterDoctorAPI.prototype.findDrs = function (nextResultSet, successCallBack, failCallBack){
  medicalIssue = 'teeth';
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=100&user_key=' + apiKey)
  .done(function(response){
    console.log(response);
    successCallBack(response);
  })
  .fail(function(error){
    console.log(error);
    // Back End Processing goes Here
    // failCallBack(errrosGoHere);
  });

};

exports.findDrsModule = betterDoctorAPI;
