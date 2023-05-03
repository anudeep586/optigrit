import React, { useState } from "react";
import axios from "axios";
import "./SignInForm.css";
import * as CryptoJS from 'crypto-js';

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const inputText = { email: email, password: password };
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(inputText), process.env.REACT_APP_CLIENT_SECRET);
      const encryptedText = encrypted.toString();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `http://localhost:8080/token/${process.env.REACT_APP_CLIENT_ID}`,
        {
          token: encryptedText,
        },
        config
      );
      props.onSignIn(response.data.token);
    } catch (error) {
      console.log(error)
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In With Optigrit</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default SignInForm;
