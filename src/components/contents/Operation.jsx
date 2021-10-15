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
import logo from "../../assets/images/menu/operation.png";
import salvin from "../../assets/images/salvin logo.svg";
import grid from "../../assets/images/grid.svg";
import back from "../../assets/images/back.png";
import SCADA from "./Operations/SCADA";
import Temp from "./Operations/Temp";
import Speed from "./Operations/Speed";
import Control from "./Operations/Control";
import Historical from "./Operations/Historical";
import Analysis from "./Operations/Analysis";
import styled from "styled-components";
import "./menu.css";

const Operation = () => {
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
          <SCADA />
        </Route>
        <Route exact path={`${path}/2`}>
          <Temp />
        </Route>
        <Route exact path={`${path}/3`}>
          <Speed />
        </Route>
        <Route exact path={`${path}/4`}>
          <Control />
        </Route>
        <Route exact path={`${path}/5`}>
          <Historical />
        </Route>
        <Route exact path={`${path}/6`}>
          <Analysis />
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
                <span>Operation</span>
              </Logo>
              <ul className="pointers">
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/1`}>
                    <span>How to login SCADA?</span>
                  </Link>
                </li>
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/2`}>
                    <span>How to set configure temperature?</span>
                  </Link>{" "}
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/3`}>
                    <span>How to control motor speed?</span>
                  </Link>
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/4`}>
                    <span>How to control manually?</span>
                  </Link>
                </li>
                <li>
                  <div />
                  <Link className="link" to={`${url}/5`}>
                    <span>
                      How to print the historical trends for detailed analysis?
                    </span>
                  </Link>
                </li>
                <li>
                  <div />{" "}
                  <Link className="link" to={`${url}/6`}>
                    <span>How to view real-time analysis?</span>
                  </Link>
                </li>
              </ul>
            </Wrap>
            <StyledBackBtn onClick={goBack} className="back-button">
              <img src={back} alt="" />
              <span>Back</span>
            </StyledBackBtn>
          </MenuCard>
        </MenuPage>
      </Switch>
    </>
  );
};

const StyledBackBtn = styled(BackBtn)`
  @media all and (max-width: 567px) {
    position: static;
    // bottom: 0;
  }
`;

export default Operation;
