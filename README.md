# DJS-Rental-Car
This repository hosts the frontend for the DJS Rental System prototype. It must be used in conjunction with the CarRentalApp java backend project. The backend code can be found in this repository: https://github.com/edwulitsyr/CarRentalApp. Instructions on how to start the server can be found in that project's README.

## Project Overview
The DJS Rental Car project provides a UI for a user to rent a vehicle. It currently allows a user to browse and filter vehicles retrieved from the backend server, then book one by filling out informational forms. The frontend presents the user with a confirmation code that, in theory, can be used to claim the purchased vehicle at a rental distribution center.

## Project setup
```
npm install
npm run serve -- --port 3000
```
After running the serve command, the website can be accessed with the url http://localhost:3000/carlistview
Note: The corresponding backend project server MUST be running.

## Components
1. App.vue - The main application vue file
2. routes.js - Routing definitions
3. AdminPage.vue - Template, Stylesheet, and script code for the admin page. The admin page should be used by administrators of the DJS Rental company to add, update, and delete Users and Vehicles. It is not directly accessible from other parts of the website.
4. BookingView.vue - Template, stylesheet, and script code for the booking view page. The booking view page contains the 3 panels that are shown to the user when they select "Book Now" on a vehicle listing.
5. BookingConfirmation.vue - Template, stylesheet, and script code for the booking confirmation page. The booking confirmation page shows details about a booking and provides confirmation number that the user can show to a rental vehicle distribution center worker to claim the vehicle they booked. Currently the project is just using a random number generator. In the future, real booking system can be implemented in the backend project and integrated with in this frontend project.
6. CarListView.vue - Template, stylesheet, and script code for the main page that has the grid of vehicles and the sidebar containing filtering options.
