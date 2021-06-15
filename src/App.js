import './App.css';
import { withAuthenticator } from "aws-amplify-react";
import signUpConfig from "./config/signUpConfig";


function App() {
  return (
    <h1>Welcome Amazon Vehicle Services</h1>
  );
}

export default withAuthenticator(App, {
  usernameAttributes: "email",
  signUpConfig,
});