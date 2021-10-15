import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import back from "../assets/images/back.png";

const Button = (props) => {
  const { route } = props;
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to={route} />;
  }
  return (
    <div onClick={() => setRedirect(true)} className="back-btn">
      <img src={back} alt="" />
    </div>
  );
};

export default Button;
