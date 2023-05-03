import React from "react";
import { useNavigate } from "react-router-dom";

function SignInButton(props) {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signin");
    props.setOpen((prev) => !prev)
  };
  return (
    <button onClick={handleSignInClick}>{props.label}</button>
  );
}

export default SignInButton;
