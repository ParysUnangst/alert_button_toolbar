React Alert Button Toolbar
This React application demonstrates the use of props and event handlers through a simple yet interactive example: a Toolbar component that contains multiple AlertButton components. Each button, when clicked, displays a unique alert message, showcasing dynamic behavior in React components.

Features
AlertButton Component: A reusable button component that triggers an alert with a custom message.
Toolbar Component: A container that renders multiple AlertButton components, each configured with its unique alert message.
Dynamic Prop Handling: Demonstrates how to pass and use props for customizing component behavior and display.
Event Handling: Showcases the use of onClick event handlers in React.
Getting Started
Follow these instructions to set up the project locally on your machine.

Prerequisites
Ensure you have the following installed:

Node.js (which includes npm)


Installation

Clone the repository:
git clone https://github.com/ParysUnangst/alert_button_toolbar.git

Navigate to the project directory:
cd alert-button-toolbar

Install dependencies:
npm install

Start the development server:
npm start
This runs the app in development mode. Open http://localhost:3000 to view it in your browser.


Usage
The application features a toolbar with buttons. Each button, when clicked, will display an alert with a message passed to it as a prop. This demonstrates how props can be used to customize child components and how event handlers are attached and handled in React.




Using the app2.js file

Toolbar Component
The Toolbar component is enhanced to accept a buttons prop, which is an array of button properties. Each item in the array contains message and children properties, defining the custom alert message and button text, respectively. The map() function is used to iterate over the buttons array and dynamically render AlertButton components based on the provided properties.

Custom Alert Buttons
The AlertButton component, introduced in the previous assignment, handles the display of custom alert messages when clicked. It receives the message prop and uses it to trigger an alert with the specified message when the button is clicked.




# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

