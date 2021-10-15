import React, { useState, useEffect } from "react";
import { Body, Card, Wrap, Circles } from "./Operations";
import { Grid } from "./../../contents/MenuCards";
import grid from "../../../assets/images/grid.svg";
import machine from "../../../assets/images/menu/operations/machine.png";
const Loader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("active")[0]?.classList?.remove("active");
      document.getElementsByClassName("circle")[1]?.classList?.add("active");
    }, 700);
    setTimeout(() => {
      document.getElementsByClassName("active")[0]?.classList?.remove("active");
      document.getElementsByClassName("circle")[2]?.classList?.add("active");
    }, 1400);
    setTimeout(() => {
      document.getElementsByClassName("active")[0]?.classList?.remove("active");
    }, 2100);
  }, []);
  return (
    <>
      <Body>
        <Grid src={grid} />
        <Card>
          <Wrap>
            <img src={machine} alt="" />
            <Circles>
              <div className="circle active"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </Circles>
          </Wrap>
        </Card>
      </Body>
    </>
  );
};

export default Loader;
