import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CarForm from './pages/carform';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import "@aws-amplify/ui/dist/style.css";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const routing = (
  <Router>
  <Switch>
  <Route exact path="/" component={App} />
  <Route path="/pages/carform.js" component={CarForm} />
  <Route component={App} />
  </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
