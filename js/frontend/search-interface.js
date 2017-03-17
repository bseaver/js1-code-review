var findDrs = require('./../js/backend/search.js').findDrsModule;
var findDrsSample = require('./../js/backend/search_sample.js').findDrsSample;



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
                '<th style="width:150px">Address</th>' +
                '<th>Phone</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>';

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
  var displayResult = "";

  $("#searchOutput").append(displayResult);
};



var newFindDrs;
var searchPending;
var lastResults;

$(document).ready(function(){
  // The following enables developing the Dr. Result Output without
  // frequent hit of the API:
  // displayResults(findDrsSample);

  $("#drSearch").submit(function(event) {
    event.preventDefault();

    if (!searchPending) {
      searchPending = true;
      lastResults = false;
      var drFirstName = $("#drFirstName").val();
      var drLastName = $("#drLastName").val();
      var medicalIssue = $("#medicalIssue").val();

      $("#searchOutput").html('<h3>Search pending. One moment please...<h3>');
      newFindDrs = new findDrs(drFirstName, drLastName, medicalIssue);
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
