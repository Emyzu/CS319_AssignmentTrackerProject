Project Name: The Ultimate Assignment Tracker

Purpose: The purpose of this project is to create an assignment tracker/organizer that is easy to use, effective, and fun! This project will include many features to help make organizing assignments more effective and enjoyable. 

My Name: Emina Zukic

Technologies Used: React.js (Version 19.3.0, built with Vite Version 8.3.5) 

Prerequisites:
- Node Version v22.17.1
- NPM Version 10.9.2
- A modern web browser (I used google chrome)

Installation:
- Install Node.js
    - verify correct versions in the terminal with commands "node -v" and "npm -v"
- Download the GitHub repo files as a zip and extract the zip- save it in your preferred location on your device
- Open the terminal
- Navigate to the location of the extracted files with command "cd"
- Once in the correct directory, run "npm install" to make sure all dependencies are correctly installed.

Configuration: There are not any required settings to change in order to run this project.

Running the application: 
- To run the application, you will need to use the terminal. In the terminal, navigate to the project's directory, and run the command "npm run dev".
- When the command is run, a localhost URL will be generated. The URL will most likely will be: http://localhost:5173/

Trying the Sprint 1 Functionality
- Run the application on the localhost server via the "npm run dev" command in the terminal.
- Click on the "Add Assignment" button.
- Fill in the required information.
    - If you would like to view the error that appears on an invalid form submit, do not enter any data or purposefully only fill one input, then click submit. An alert will appear requesting the user to try again with all the fields filled out.
- Click submit and view the assignment on the left side of the page.
- Repeat steps 2-4 until you have enough assignments that the scroll feature becomes enabled.

This will allow you to view all the functionality implemented in Sprint 1.

Known limitations: 
- The filter button and calendar do not have functionality. They will be added in future sprints, but in this sprint 1 the main goal was to get the initial assignment input and display to work.
- The data (assignments) is only saved in an array, it is not being saved to local storage yet, so the data is not being saved (it will be lost on refresh). this will be implemented later on.
- The project has not been optimized for responsive design yet, this will also be done at a later point.

  
