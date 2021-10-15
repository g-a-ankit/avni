import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import {
  MenuPage,
  MenuCard,
  Image,
  Logo,
  Salvin,
  Wrap,
  Grid,
  BackBtn,
} from "./MenuCards";
import logo from "../../assets/images/menu/commissioning.png";
import salvin from "../../assets/images/salvin logo.svg";
import grid from "../../assets/images/grid.svg";
import back from "../../assets/images/back.png";
import Pre from "./Commissioning/1";
import Post from "./Commissioning/2";
import "./menu.css";

const Commissioning = () => {
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  let { path, url } = useRouteMatch();
  if (redirect) {
    return <Redirect to="/menu" />;
  }

  return (
    <>
      <Switch>
        <Route exact path={`${path}/1`}>
          <Pre />
        </Route>
        <Route exact path={`${path}/2`}>
          <Post />
        </Route>

        <MenuPage className="transition">
          <Grid src={grid} alt="dsf" />
          <MenuCard>
            <BackBtn onClick={goBack} className="back-button">
              <img src={back} alt="" />
              <span>Back</span>
            </BackBtn>
            <div className="logo-wrap">
              <Salvin src={salvin} alt="sdf" />
            </div>
            <Wrap>
              <Logo>
                <Image src={logo} alt="" />
                <span>Commissioning</span>
              </Logo>
              <ul className="pointers">
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/1`}>
                    <span>Pre-Commissioning</span>
                  </Link>
                </li>
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/2`}>
                    <span>Commissioning</span>
                  </Link>{" "}
                </li>
              </ul>
            </Wrap>
          </MenuCard>
        </MenuPage>
      </Switch>
    </>
  );
};

export default Commissioning;
