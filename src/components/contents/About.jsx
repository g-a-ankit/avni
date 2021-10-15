import React, { useState } from "react";
import {
  Redirect,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
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
import logo from "../../assets/images/menu/about.png";
import salvin from "../../assets/images/salvin logo.svg";
import grid from "../../assets/images/grid.svg";
import back from "../../assets/images/back.png";
import Overview from "./About/1";
import Identification from "./About/2";
import Specifications from "./About/3";
import "./menu.css";
import { subRoutes } from "../../common/constants";

const About = () => {
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  let { path, url } = useRouteMatch();
  console.log(useRouteMatch());
  console.log(useLocation());
  console.log("url", path, url);
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.menu} />;
  }

  return (
    <>
      <Switch>
        <Route exact path={`${path}/1`}>
          <Overview />
        </Route>
        <Route exact path={`${path}/2`}>
          <Identification />
        </Route>
        <Route exact path={`${path}/3`}>
          <Specifications />
        </Route>

        <MenuPage className="transition">
          <Grid src={grid} alt="dsf" />
          <MenuCard>
            <div className="logo-wrap">
              <Salvin src={salvin} alt="sdf" />
            </div>
            <Wrap>
              <Logo>
                <Image src={logo} alt="" />
                <span>About Device</span>
              </Logo>
              <ul className="pointers">
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/1`}>
                    <span>Product Overview</span>
                  </Link>
                </li>
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/2`}>
                    <span>Part Identification</span>
                  </Link>{" "}
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/3`}>
                    <span>Specifications</span>
                  </Link>
                </li>
              </ul>
            </Wrap>
            <BackBtn onClick={goBack} className="back-button">
              <img src={back} alt="" />
              <span>Back</span>
            </BackBtn>
          </MenuCard>
        </MenuPage>
      </Switch>
    </>
  );
};

export default About;
