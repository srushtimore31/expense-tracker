React Expense Tracker

 Overview

This project is a React-based Expense Tracker built using Vite. The application allows users to record and manage their daily expenses through a simple and responsive interface. Users can add expenses by entering an expense name, amount, and selecting a category such as Food, Travel, Marketing, Utilities, or Other. Each expense appears in a list where it can also be deleted if needed. The application automatically calculates the running total of all expenses and displays a category-wise breakdown so users can quickly understand how their spending is distributed.

 Features

* Add new expenses with name, amount, and category
* Delete existing expenses
* Automatically updated running total
* Category-wise spending breakdown
* Currency conversion of total expenses
* Category filtering
* LocalStorage persistence (expenses remain after refresh)
* Responsive layout for desktop and mobile

 API Used

This project integrates the *Frankfurter Exchange Rates API* to convert the total expense value into different currencies.

API Endpoint Example:
https://api.frankfurter.app/latest?from=USD

The application fetches the latest exchange rates using a custom React hook and converts the total expense amount based on the currency selected by the user. Loading and error states are handled to ensure the UI remains stable if the API request fails.

API Documentation:
https://www.frankfurter.app/docs/

 Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS
* Frankfurter API

 Challenges Faced

One challenge during development was managing state across multiple components while keeping the architecture clean. Since the application follows a single source of truth in App.jsx, functions and data had to be passed correctly between components using props. Ensuring that totals and category breakdowns updated correctly whenever expenses were added or deleted required careful handling of derived state.

 Possible Improvements

With more time, several improvements could be added:

* Data visualization using charts for category spending
* Editing existing expenses
* Backend database integration instead of LocalStorage
* User authentication for multi-user expense tracking
* More advanced UI styling and animations

 Deployment

The project is deployed using *Vercel*.

Live Application:
https://expense-tracker-kappa-umber.vercel.app/
