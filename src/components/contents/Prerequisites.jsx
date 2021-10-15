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
import logo from "../../assets/images/menu/prerequisites.png";
import salvin from "../../assets/images/salvin logo.svg";
import grid from "../../assets/images/grid.svg";
import back from "../../assets/images/back.png";
import Use from "./Prerequisites/1";
import Symbol from "./Prerequisites/2";
import Safety from "./Prerequisites/3";
import Risk from "./Prerequisites/4";
import "./menu.css";

const Prerequisites = () => {
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
          <Use />
        </Route>
        <Route exact path={`${path}/2`}>
          <Symbol />
        </Route>
        <Route exact path={`${path}/3`}>
          <Safety />
        </Route>
        <Route exact path={`${path}/4`}>
          <Risk />
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
                <span>Prerequisites & Safety</span>
              </Logo>
              <ul className="pointers">
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/1`}>
                    <span>Prerequisites to Use</span>
                  </Link>
                </li>
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/2`}>
                    <span>Symbols and Warning</span>
                  </Link>{" "}
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/3`}>
                    <span>Operator Safety</span>
                  </Link>
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/4`}>
                    <span>Risk Prevention</span>
                  </Link>
                </li>
              </ul>
            </Wrap>
          </MenuCard>
        </MenuPage>
      </Switch>
    </>
  );
};

export default Prerequisites;
