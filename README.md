# To-Do App

This web application allows you to have a list of todos assigned to your user.

The technologies I have used are:

- The app is made in React, making use of its reusable components and custom hooks (useNavigate, useContext).

- Context to make the parent component provide data to the other components, in this app the data is the user and some functions that create one, log in or out of the users database.

- Firebase Auth for user access and Cloud Firestore to store the list items of every user. I had never used Firebase services before, its documentation is really good and easy to integrate.

- Tailwind for styling because it is highly customizable, reponsive and specially because of its consistency.

- Toastify

- React Router for client-side routing because it has great implementation in react applications and has some useful features like nested routes and most importantly Protected Routes, which only allows the user to access some routes depending on if it is authenticated. Also implemented Link component that allows app navigation without requiring a page refresh.

- React-spinners which is a lightweight library that provides loading indicators.

- React-icons for adding some icons like the NavBar ones or the 'add list item' one, this library allows you to import only the icons that you are using, so it is really lightweight aswell.

- Some utils I made to make reusable code were two functions, addDelay (which sets a timeout promise) and an handleFirebaseError which handles firebase errors.
