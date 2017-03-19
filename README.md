## Access Better Doctors API

#### Epicodus JS Week 1 Code Review, 3/15/2017

#### Front end development using NPM, Gulp, Bower and SASS

#### By Benjamin T. Seaver

## Project Requirements

#### Doctor Lookup
Create a website where users may enter a medical issue (ie: “toothache”) into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue.

Use the BetterDoctors API to retrieve this information. You will need to make an account and an API key.

Place your API key in an .env file at the top level of your directory.

Include .env in .gitignore.

Use at least two JavaScript files: One to receive form input, another to make an API request and display results.

The following starter code will provide a response (logged to the console) containing 20 results from the Portland, OR area. Use it to build an object that can be pushed to an array that can later be returned.

exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

Notice the ?user_key= used with the API key after the username. You must include your personal access token with your request.

Further Exploration

If you have completed all objectives with time to spare, consider adding additional features, such as:

Allow users to search by name and medical issue.

Update the UI if a doctor can't be found (this happens when you search by name and issue quite frequently.)

Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.

Add styling with SASS. Use a Gulp task to compile it.

## Setup Requirements
git https://github.com/

node.js (for npm)  https://nodejs.org/

npm https://www.npmjs.com/

gulp http://gulpjs.com/

bower https://bower.io/

ruby (for gem install) https://www.ruby-lang.org/

sass http://sass-lang.com/install

Optional installation tool: Homebrew https://brew.sh/

## Technologies Used
* See Setup Requirements above plus:
  * Bootstrap http://getbootstrap.com/
  * JQuery https://jquery.com/
  * Ajax
  * JavaScript
  * HTML
  * CSS

## Installation Instructions
* Clone project.

* Acquire API key from https://developer.betterdoctor.com/.

* Create .env file at root of project folder with the following single line:

exports.apiKey = "your-Better-Doctor-API-key-here";

* Run at the command line $:

npm install

bower install

gulp jshint (to check for errors)

gulp servedev (to serve the dev build)

* Other supported gulp tasks (see gulp.js):
  * gulp clean (delete temporary and build files)
  * gulp dev (generate dev build)
  * gulp prod (generate production build)
  * gulp serveprod (serve to browser projection build)
  * gulp bowerJS (package external JS - Bootstrap)
  * gulp bowerCSS (package external CSS - Bootstrap)
  * gulp bower (package both JS and CSS)
  * gulp concatInterface (build JS from frontend and backend requirements)

## Note: Commands Used to Create  Project Dependencies from Scratch

npm init

npm install gulp --save-dev

npm install browserify --save-dev

npm install gulp-concat --save-dev

npm install gulp-uglify --save-dev

npm install gulp-util --save-dev

npm install del --save-dev

npm install jshint --save-dev

npm install vinyl-source-stream --save-dev

npm install browser-sync --save-dev

npm install bower-files --save-dev

npm install gulp-jshint --save-dev

npm install gulp-sass gulp-sourcemaps --save-dev


bower install jquery --save

bower install bootstrap --save

bower install moment --save (Not used in this Project)


## Known Bugs
* No known bugs

## Support and contact details
* No support

## Copyright (c)
* 2017 Benjamin T. Seaver

## License
* MIT

## Implementation Plan
* Prepare this README with implementation plan
* Verify formatting of README.md in markdown viewer
* Initial Hello World framework served by gulp
* Verify JSHint
* Verify Build Dev (viewable build)
* Verify .gitignore
* Verify Build Prod (minified build)
* Verify Serve Dev
* Verify Serve Prod
* Verify automated "Watch", rebuild and refresh browser with:
  * bower install
  * JavaScript backend
  * JavaScript frontend
  * index.html
  * .env


* Capture sample API result from Doctor Search into a variable
* Build initial front end displaying result
* Integrate sample back end query (see Project Requirements above)
* Verify correct display of results

### If time allows consider the following:
* Create form for Doctor and Medical Issue search.
  * Integrate form result with back end query
  * Verify results reflect query

* Verify / Implement that UI reflects empty result in an informative way

* Add an additional API call to retrieve the list of specialities, integrate into, form as dropdown and include with query
  * Verify query appropriately restricts result set

* Add styling with SASS. Use a Gulp task to compile it.
  * $ gem install sass
  * Create scss/styles.scss with background for header
  * Add gulp.js task to build SCSS to
  * Add to production and dev "Watch" to rebuild CSS
  * Verify Dev "Watch" rebuild from SCSS
  * Verify Prod "Watch" rebuild from SCSS

* Implement "continuous scroll down" for additional results
  * Verify results scroll until end of available data

* Capture sample API error result into a variable
* Build initial front end displaying error
* Verify error for:
  * Bad API key
  * Bad query
  * Bad URL for api

* Investigate further API calls to support user entry of location of search

* End specifications
