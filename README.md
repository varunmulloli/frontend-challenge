# FinCompare Front-end Challenge

The application is built as a single page application with server side rendering using React. It uses ReasonML for type safe development and BuckleScript for compiling ReasonML code to JavaScript. Parcel is used to bundle the compiled `.js` files.
The libraries used in this application are mostly the BuckleScript bindings for popularly used libraries, and a few that are specifically required for ReasonML. A few of them are:

* `bs-platform` - The BuckleScript compiler
* `bs-express` - BuckleScript bindings for Express.js
* `bs-css` - Bindings for the CSS-in-JS library Emotion
* `bs-fetch` - Bindings for fetch
* `bs-jest` - Bindings for Jest
* `bs-json` - For type safe JSON handling.

## Code Organisation
All source code are in the `src/` folder and unit tests are in the `__tests__/` folder. Once the code is built, all ReasonML files (with `.re` extension) will be compiled to their corresponding JavaScript files (having the extension `*.bs.js`) in the same folder. 
There are two files in the `src/` folder: `Server.re` and `Client.re`. `Server.re` has the server creation code and it's compiled form `Server.bs.js` is used to start the Node.js server. `Client.re` is the root of the single page application and it's compiled form `Client.bs.js` is used as the entry point to Parcel, which will bundle all `.js` files and places it in `dist/client.js`. `dist/` is the folder from where the static files are being served, so it also contains other media like images as well.

* `src/api` has the code for interacting with external services
* `src/components` has all the React components that are used to build up the page.
* `src/core` has some core modules used in the application like types, reducer etc. As the application grows, each of these may be moved to a folder of their own. 
* `src/helpers` has some utility modules shared across the app.
* `src/records` contains the types for the responses from external services.
* `src/routes` has the route configuration files, that can be used by both server and client.

## Architecture
### Types
An error is represented as a `string`. An API operation either returns some data or throws an error, so it is modelled as a `Result` type. This datatype is provided by Belt, a standard library shipped with BuckleScript. If you expect an integer value from the operation, the datatype will be `Belt.Result.t(int, string)` where string is the error that could've occured.
But the UI may depend on multiple API operations and should be able to display partial data and the errors. So the datatype used is a tuple of data and a list of strings for the errors happened. If the expected data is of an arbitrary type `'a`, then the datatype would be `('a, list(string))`. These are described in `src/core/Types.re`.

### Routing and Persistence
Each page is modelled as a variant in `src/core/Types.re`, and any URL that is hit will be mapped to one of these pages. This code can be found in `src/routes/Routes.re`.
Each page has a component builder that gives the component to render for that corresponding page, as described in `src/routes/RouteComponent.re`. Each page also has a mapping of what data to fetch for that component, as described in `src/routes/RouteData.re`.
When the request hits the server, the URL is mapped to the corresponding page. The data (if required) is fetched for this page and is supplied to the top-level component `App.re` (present in `src/components/App` directory). The App component persists this data, finds the corresponding component for the page and renders it with the necessary data passed to it. The server returns a fully rendered page for the request.
This page also contains the fetched data in serialized form, and it is used by the JavaScript to rehydrate the application.
When a URL change is triggered within the application, the root component of the client (`ClientApp` module present in `Client.re`) which listens to URL changes will re-render, effectively re-rendering `App.re` which loads the corresponding component for the new URL with the data it already has in the state. The newly rendered component on URL changes check whether it has valid data passed as props. If not, it finds it's corresponding page and fetches the required data and dispatches it to the App component. This will re-render it, effectively re-rendering the component with the data it requires.
By this way, if the same page is opened multiple times (without refreshing), data is fetched only once from the external service. If the data is of dynamic nature, it can be fetched on every page load by removing the validity check in the component.

## How to run the code

The purpose of this challenge is to let the developer show familiarity and skills with frontend technologies by creating a simple app using what its judges best, regarding patterns, libraries, and architeture.

## The Challenge

We'll use the [Ergast API](http://ergast.com/mrd/) to create a single page application that
presents a list that shows the F1 world champions starting from 2005 until
2015. Clicking on an item shows the list of the winners for every race for
the selected year. We also request to highlight the row when the winner
has been the world champion in the same season.

Feel free to create the UI the way you think it's best, just make sure it's clean, understandable and it's a single page application. The main goal here is to check your skills with CSS or whatever you use to style your project.

## Delivery

Please use Github to send us your challenge, if you could fork this repo would be even better.

## Extra

- You can use any Javascript library you want, but we would rather if you use React
- Write a readme file explaining4 what you did, what you used and how to run your project.

