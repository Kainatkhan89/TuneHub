

# Assignment 3

* *Date Created*: 25 July 2023
* *Last Modification Date*: 26 July 2023
* *Assignment URL*: <https://dal.brightspace.com/d2l/le/content/274269/viewContent/3608542/View>
* *Git URL*: <https://git.cs.dal.ca/hppatel/csci-5709-grp-05>
* *Git branch URL*: <https://git.cs.dal.ca/hppatel/csci-5709-grp-05/-/tree/kainat?ref_type=heads>
* *Netlify Deployment URL*: <https://tune-hub.netlify.app/>
* *Netlify Deployment URL(User Management feature)*: <https://tune-hub.netlify.app/login>
* *Feature Developed*: User Profile Management ( Register, Login, Logout, View User Profile, Edit User Profile, Forgot
password, Delete user account)

## Authors

* [Kainat Khan](Kainat@dal.ca) - *(Developer)*

## Files developed as a part of this assignment
/server/index.js
/src/pages/Authentication/*
/src/pages/Registration/*
/src/pages/UserProfile/*
/src/components/Messages/*
/server/controllers/users.js
/server/routes/users.js

## Deployment

Deployed on Netlify and Render using a clone repository from GitHub.

## Built With
* [React JS](https://react.dev/) - The web framework used
* [Express JS](https://react.dev/) - Node framework for building REST apis
* [Node](https://nodejs.org/en) - Dependency Management
* [Chakra UI](https://chakra-ui.com/) - Predefined React 


##  File Structure

### Backend:
/server/index.js : Main entry point
/server/routes: Defines the available routes
/server/controllers: Contains the business logic
/server/models: Contains the MongoDB models to interact with the database

### Frontend:
/src/index.js: Main entry point
/src/pages: Contains the UI pages
/src/assets: Contains the images (.png and .svg)
/src/components: Contains custom-made reusable React components like ErrorMessage
/src/pages/Registration: Contains page design and API logic for user registration
/src/pages/Authentication: Contains page design and API logic for user login and change password of existing user
/src/pages/UserProfile: Contains page design and API logic to view, edit or delete User profile
/src/pages/Registration: Contains page design and API logic for user registration
/src/services: Contains the api calls to the backend

## Acknowledgments
Special thanks to Spotify for providing their APIs for free and for comprehensive documentation that helped in overall project development. (https://developer.spotify.com/documentation/web-api)