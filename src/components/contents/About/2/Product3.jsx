import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import img1 from "../../../../assets/images/menu/about/img3.png";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";
import {
  Wrapper,
  Wrap,
  Image,
  WrapImg,
  Image1,
  Text,
  Wrapul,
  BackBtn,
} from "./Product1";
const Product2 = ({ goBack }) => {
  return (
    <>
      <Wrapper>
        <Wrap>
          <Image src={logo} />
          <WrapImg>
            <Image1 src={img1} />
            <ol start="1">
              <li>Keyboard Drawer</li>
              <li>Mouse Drawer</li>
              <li>Connection to Thermocouple</li>
              <li>Connection to Control Panel</li>
              <li>Operator Screen</li>
            </ol>
          </WrapImg>

          <Text>Scroll down for more info</Text>
        </Wrap>
        <Wrapul>
          <ul>
            <li>
              The different parts of the Scada Unit are enumerated above.{" "}
            </li>
            <li>
              The Scada Unit is mainly used as an interface to send the data to
              the Thermocouples and Control Panel. The data can be generated
              manually/automatically.{" "}
            </li>
            <li>
              {" "}
              The required connections are propped at their respective chambers.{" "}
            </li>
            <li>
              {" "}
              The operator can perceive all the data interface with the control
              panel by the operator screen.{" "}
            </li>
            <li>
              {" "}
              The keyboard and Mouse are used to write the inputs to the Scada
              Unit and will be placed in their respective drawers.
            </li>
          </ul>
        </Wrapul>
        <BackBtn onClick={goBack} className="back-button">
          <img src={back} alt="" />
        </BackBtn>
      </Wrapper>
    </>
  );
};
export default Product2;
