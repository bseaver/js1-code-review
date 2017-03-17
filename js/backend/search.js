var apiKey = require('./../../.env').apiKey;


function betterDoctorAPI(drFirstName, drLastName, medicalIssue) {
  this.drFirstName = drFirstName;
  this.drLastName = drLastName;
  this.medicalIssue = medicalIssue;
}

// betterDoctorAPI.prototypes go here to process parameters, prepare URL and process results
// https://api.betterdoctor.com/2016-03-01/doctors?query=Toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=82077cc707ef1e19cafb5f861298526c

// https://api.betterdoctor.com/2016-03-01/doctors?first_name=W&last_name=Q&query=teeth&location=45.5138462%2C-122.6307609%2C20&user_location=45.5138462%2C-122.6307609&sort=distance-asc&skip=0&limit=10&user_key=82077cc707ef1e19cafb5f861298526c

// 'https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=100&user_key=' + apiKey


betterDoctorAPI.prototype.constructURL = function (apiKey, skip) {
  var url = "https://api.betterdoctor.com/2016-03-01/doctors";

  url += '?';
  url += $.param(
    {
      'first_name': this.drFirstName,
      'last_name': this.drLastName,
      'query': this.medicalIssue,
      'location': '45.5138462,-122.6307609,20',
      'user_location': '45.5138462,-122.6307609',
      'sort': 'distance-asc',
      'skip': skip,
      'limit': 10,
      'user_key': apiKey
    }
  );

  return url;
};


betterDoctorAPI.prototype.findDrs = function (skip, successCallBack, failCallBack){
  var url = this.constructURL(apiKey, skip);

  $.get(url)
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
