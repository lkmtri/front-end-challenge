# oddle-front-end-challenge

An universal web application using Github RESTApi v3.0 to search for Github users by username. 

Technology stack:
- Server-side rendering framework: next.js
- Front-end framework: react.js
- State management framework: redux
- Built-in CSS-in-JS by next.js

# Installation

1. Clone code from the repo and run `yarn` (recommended) or `npm install`
2. For development, run `yarn run dev`. Hot Module Reloading is enabled for development.
3. For production, run `yarn run build` to build and then `yarn run start` to start/restart the server. 
4. Once the server is up, it listens on port 3010

# Checklist of basic requirements
- [x] There is a search bar to let the user search by username (login name)
- [x] While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed)
- [x] After the search is completed, the application shows the list of users along with their avatar and their username on the same page
- [x] If the results are not complete in one page, the pagination is shown on the screen
- [x] When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user
- [x] The new page also has to display the list of the user's repositories, followers and following
- [x] The application is built by [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)
- [x] [Webpack](https://github.com/webpack/webpack) is being used to build the application
- [x] The application style is built by one of the CSS preprocessors or CSS-in-JS
- [x] The application has to be responsive and optimised for mobile
- [x] A documentation on how the application works and how to set up and build the project is provided
- [x] The application is production ready (__HINT:__ try Google’s PageSpeed or Lighthouse)

# Checklist of bonus points
- [ ] The application is deployed on [AWS](https://aws.amazon.com) instead of [Heroku](http://heroku.com) or [Now](https://zeit.co/now)
- [ ] The application supports IE10 and/or Android native browser (Chrome 30.0)
- [x] The pages are server-side rendered and are cached in the server
- [x] All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
- [ ] All pages are SEO optimised
- [x] The project supports code splitting for each pages
- [x] The results list also asynchronous-ly shows the number of followers and following of each user without going the user page
- [x] The search input does the searching as you type (See google search as an example)
- [ ] There is animated transition between pages
- [ ] The application supports theming and can easily be switched between themes
