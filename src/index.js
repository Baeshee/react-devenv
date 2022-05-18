import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Uncomment/comment to use/disable SASS/SCSS
import './styles/scss/index.scss';

// Uncomment/comment to use/disable Tailwind or default CSS
//import './styles/css/index.css';

// Uncomment/comment to use/disable WebVitals
//import reportWebVitals from './reportWebVitals';

// Redux imports, uncomment to use
//import {Provider} from "react-redux";
//import { store } from './redux/store';

// !! This template uses a custom react redux implementation
// !! (Separate reducers, actions and store files)
// !! which is NOT the same as the official react-redux implementation.
// !! For the official react-redux implementation, see the following link:
// !! https://react-redux.js.org/

// Place <Provider store={store}> around the <App /> component
// Dont forget to connect the components to the store
// !! To get more information about the react-redux implementation,
// !! see the following file:
// !! Configurations -> Redux -> connect-to-store.txt

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();