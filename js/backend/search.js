var apiKey = require('./../../.env').apiKey;


function betterDoctorAPI(drName, drCity, drState, medicalIssue) {
  this.drName = drName.trim();
  this.drCity = drCity.trim();
  this.drState = drState.trim();
  this.medicalIssue = medicalIssue.trim();
}


betterDoctorAPI.prototype.constructURL = function (apiKey, skip) {
  var url = "https://api.betterdoctor.com/2016-03-01/doctors";
  var location = "";

  if (this.drState) {
    location = this.drState.toLowerCase();
    if (this.drCity) {
      location += "-" + this.drCity.toLowerCase().replace("  ", " ").replace(" ", "-");
    }
  }

  url += '?';
  url += $.param(
    {
      'name': this.drName,
      'location': location,
      'query': this.medicalIssue,
      'sort': 'full-name-asc',
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
    failCallBack(error);
  });

};

exports.findDrsModule = betterDoctorAPI;
