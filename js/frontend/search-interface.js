var findDrs = require('./../js/backend/search.js').findDrsModule;
var digger = require('./../js/backend/digger.js').digger;



var displayResults = function(searchResults) {
  lastResults = searchResults;
  var displayResult = "";
  if (!lastResults.data.length) {
    if (searchPending) {
      displayResult = '<h3>No doctors matched!<h3>';
    } else {
      displayResult = '<h3>No additional doctors matched.<h3>';
    }
  }

  if (searchPending) {
    searchPending = false;
    $('#searchOutput').html("");
  }

  var website;
  lastResults.data.forEach(function(drRecord){
    displayResult +=
      '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
          drRecord.profile.first_name + " " +
          (drRecord.profile.middle_name?drRecord.profile.middle_name + " ":"") +
          drRecord.profile.last_name + " " +
          (drRecord.profile.title?drRecord.profile.title:'') +
        '</div>' +
        '<div class="panel-body">' +
          '<table class="table table-striped">' +
            '<thead>' +
              '<tr>' +
                '<th>New Patients</th>' +
                '<th>Description</th>' +
                '<th>Languages</th>' +
                '<th class="addressColumn">Address</th>' +
                '<th class="phoneColumn">Phone</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>';

    if (drRecord.practices) {
      drRecord.practices.forEach(function(practice) {
        website = '';
        if ('website' in practice) {
          website = practice.website;
        }

        displayResult +=
              '<tr>' +
                '<td>' + (practice.accepts_new_patients?'Yes':'No') + '</td>' +
                '<td>' +
                  (practice.description?'<p>' + practice.description + '</p>':'') +
                  (website?'<a href="' + website + '">' + website + '</a>':'') +
                '</td>' +
                '<td>';
        practice.languages.forEach(function(language, index){
          displayResult +=
                  (index?', ':'') + language.name;
        });
        displayResult +=
                '</td>' +
                '<td>' +
                  practice.visit_address.street + '<br>' +
                  ('street2' in practice.visit_address?practice.visit_address.street2+'<br>':'') +
                  practice.visit_address.city + ' ' + practice.visit_address.state + ' ' + practice.visit_address.zip +
                '</td>' +
                '<td>' ;
        practice.phones.forEach(function(phone) {
          displayResult +=
                  '<p>' +
                    (phone.number.length === 10?phone.number.substring(0, 3) + '-' + phone.number.substring(3, 6) + '-' + phone.number.substring(6):phone.number) +
                    // (phone.number.length === 10?phone.number.slice(0, 3) + '-' + phone.number.slice(3, 3) + '-' + phone.number.slice(6):phone.number) + // Middle slice returned nothing!?
                  '</p>';
        });
        displayResult +=
                '</td>' +
              '</tr>';
      });
    }
    displayResult +=
            '</tbody>' +
          '</table>' +

        '</div>' +
      '</div>' ;
  });


  if (displayResult) {
    $("#searchOutput").append(displayResult);
  }
};



var displayFailure = function(errorResult){
  var lastResults = false,
    displayResult = "",
    done = false,
    displayPiece = "";

  if (searchPending) {
    searchPending = false;
    $('#searchOutput').html("");
  }

  if (typeof errorResult != "object") {
    displayResult = "No further details available.";
    done = true;
  }

  if (!done) {
    displayPiece = digger(errorResult, "responseJSON", "meta", "message");
    if (!displayPiece) {
      displayPiece = digger(errorResult, "statusText");
    }
    if (displayPiece) {
      displayResult += (displayResult?"<br>":"") + "Message: " + displayPiece;
    }
  }

  if (!done) {
    displayPiece = digger(errorResult, "responseJSON", "meta", "http_status_code");
    if (!displayPiece) {
      displayPiece = digger(errorResult, "status");
    }
    if (displayPiece) {
      displayResult += (displayResult?"<br>":"") + "Status Code: " + displayPiece;
    }
  }

  if (!displayResult) {
    displayResult = "Unable to retrieve further details.";
  }

  displayResult =
    '<div class="well"><h4>Error occurred during search:</h4><p>' +
      displayResult +
    '</p></div>';

  $("#searchOutput").append(displayResult);
};



var newFindDrs;
var searchPending;
var lastResults;

$(document).ready(function(){
  /*
  ** The following commented lines
  ** enable developing and testing the
  ** dislay functions without
  ** repeated hits to the API
  */
  // var findDrsError = require('./../js/backend/search_sample.js').errorSample;
  // displayFailure(findDrsError);
  // var findDrsSample = require('./../js/backend/search_sample.js').findDrsSample;
  // displayResults(findDrsSample);

  $("#drSearch").submit(function(event) {
    event.preventDefault();

    if (!searchPending) {
      searchPending = true;
      lastResults = false;
      var drName = $("#drName").val();
      var drCity = $("#drCity").val();
      var drState = $("#drState").val();
      var medicalIssue = $("#medicalIssue").val();

      $("#searchOutput").html('<h3>Search pending. One moment please...<h3>');
      newFindDrs = new findDrs(drName, drCity, drState, medicalIssue);
      newFindDrs.findDrs(0, displayResults, displayFailure);
    }
  });

  var win = $(window);
  win.scroll(function(){
    if($(document).height() - win.height() == win.scrollTop()){
      // console.log("end of document reached.");
      if (!lastResults) {
        return;
      }
      if (!lastResults.data.length) {
        return;
      }
      var skip = lastResults.data.length + lastResults.meta.skip;
      newFindDrs.findDrs(skip, displayResults, displayFailure);
    }
  });
});
