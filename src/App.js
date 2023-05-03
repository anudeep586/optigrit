import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInButton from "./SignInButton";
import SignInForm from "./SignInForm";

function App() {
  const [user, setUser] = useState(false);
  const [open,setOpen]=useState(true)
  const handleSignIn = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div className="App">
        <h1>My App</h1>
       {open && <SignInButton label="Sign In With OptiGrit" setOpen={setOpen}/>} 
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path="/signin"
            element={<SignInForm onSignIn={handleSignIn} />}
          />
        </Routes>
        {/* <SignInForm onSignIn={handleSignIn} /> */}
      </div>
    </Router>
  );
}

export default App;







// we should send that site data which he is using like clientid and secret key and our c/c login credentails

//response userID and userdata

// a middleware service to authentication url we are giving to the user (auth Middleware)