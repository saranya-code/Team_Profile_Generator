# Team_Profile_Generator

* A command line application that dynamically generates a html page for a software engineering team.

## Description

* Employee Summary application prompts the user for information about the team manager and then information about the team members. As a user, you can input any number of team members, and they may be a mix of engineers and interns. Once all the team members are logged, the application will create an HTML file as (dist->index.html)  that displays a nicely formatted team roster based on the information provided by the user.

* Used Jest as JavaScript Testing Framework for running the tests.


## Installation

To install node npm package

    npm install

## Usage

 * After cloning the repo, install the required npm packages, use the command line to navigate to the root of the application and run node index.js , Follow prompts to add team members to your roster. Your generated team roster page will be created in the ./dist folder.
   

## Dependencies

* fs     (npm install --save-dev fs)

* jest   (npm install --save-dev jest)

* inquirer  (npm install --save-dev inquirer)

## Tests

To run the tests file

    npm run test


## References

* https://jestjs.io/docs/using-matchers

* https://getbootstrap.com/docs/4.6/components/list-group/

* https://jestjs.io/docs/api#describename-fn



## Screenshot 

    ![Webpage Screenshot](assets/images/commandlinescreenshot.png?raw=true)

    ![Webpage Screenshot](assets/images/indexhtml.png?raw=true)

    ![Webpage Screenshot](assets/images/teamprofilegenerator.png?raw=true)

## Demo

    ![Webpage Screenshot](assets/images/team_profile_generator_demo.gif?raw=true)