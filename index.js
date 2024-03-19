import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import dude from './dude';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RegistrationForm from './RegistrationForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : "dude",
    element: <dude/>,
  },
  {
    path : "RegistrationForm",
    element: <RegistrationForm/>,
  },
  {
    path : "x",
    element: <x/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



