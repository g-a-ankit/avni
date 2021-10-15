import React, { useState, useEffect } from "react";
import { MenuPage, MenuCard, Image, Logo, Salvin, Grid } from "../../MenuCards";
import { BackBtn, Circles, Wrap, Wrapper } from "./../Operations";
import machine from "../../../../assets/images/menu/operations/machine.png";

import Steps from "./Steps";
import grid from "../../../../assets/images/grid.svg";
import styled from "styled-components";

const Home = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("circle")[0]?.classList?.add("active");
    }, 700);
    setTimeout(() => {
      document.getElementsByClassName("active")[0]?.classList?.remove("active");
      document.getElementsByClassName("circle")[1]?.classList?.add("active");
    }, 1400);
    setTimeout(() => {
      document.getElementsByClassName("active")[0]?.classList?.remove("active");
      document.getElementsByClassName("circle")[2]?.classList?.add("active");
    }, 2100);
    setTimeout(() => {
      document.getElementsByClassName("active")[0]?.classList?.remove("active");
      setRedirect(true);
    }, 2800);
  }, []);
  if (redirect) {
    return <Steps />;
  }
  return (
    <>
      <MenuPage className="operation-3">
        <Grid src={grid} alt="dsf" />
        <MenuCard>
          <Wrapper>
            <Wrap>
              <img src={machine} alt="" />
              <Circles>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </Circles>
            </Wrap>
          </Wrapper>
        </MenuCard>
      </MenuPage>
    </>
  );
};

export default Home;
