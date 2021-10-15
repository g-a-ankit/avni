import React, { useState } from "react";
import logo from "../assets/images/salvin logo.svg";
import { Redirect } from "react-router-dom";
import arrow from "../assets/images/arrow.svg";
import "../responsive.css";

const Home = () => {
  const [changePage, setChangePage] = useState(false);
  if (changePage) return <Redirect to="/menu" />;
  return (
    <div className="home">
      <header>
        <img src={logo} alt="" />
      </header>
      <div className="content">
        <h1>Pilot Pellet Reduction Klin Furnace</h1>
        <h3>User Manual</h3>
        <img
          onClick={() => {
            setChangePage(true);
          }}
          src={arrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
