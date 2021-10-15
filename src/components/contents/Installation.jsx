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
import logo from "../../assets/images/menu/installation.png";
import salvin from "../../assets/images/salvin logo.svg";
import grid from "../../assets/images/grid.svg";
import back from "../../assets/images/back.png";
import Handling from "./installation/1";
import Unpacking from "./installation/2";
import Setting from "./installation/3";
import Connections from "./installation/4";
import "./menu.css";
import { subRoutes } from "../../common/constants";

const Installation = () => {
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  let { path, url } = useRouteMatch();
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.menu} />;
  }

  return (
    <>
      <Switch>
        <Route exact path={`${path}/1`}>
          <Handling />
        </Route>
        <Route exact path={`${path}/2`}>
          <Unpacking />
        </Route>
        <Route exact path={`${path}/3`}>
          <Setting />
        </Route>
        <Route exact path={`${path}/4`}>
          <Connections />
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
                <span>Installation</span>
              </Logo>
              <ul className="pointers">
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/1`}>
                    <span>Manual Handling</span>
                  </Link>
                </li>
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/2`}>
                    <span>Unpacking</span>
                  </Link>{" "}
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/3`}>
                    <span>Siting and Setting Up</span>
                  </Link>
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/4`}>
                    <span>Electrical Connections</span>
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

export default Installation;
