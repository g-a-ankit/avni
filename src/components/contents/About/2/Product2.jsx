import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import img1 from "../../../../assets/images/menu/about/img2.png";
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
              <li>Power Supply Chamber</li>
              <li>Operational Indicators</li>
              <li>Information Panel</li>
              <li>Ammeters</li>
              <li>Main Power Supply Switch</li>
              <li>Coonections Chamber</li>
              <li>Wiring Chamber</li>
              <li>Main Control Panel Chamber</li>
              <li>Ventilation Slots</li>
            </ol>
          </WrapImg>

          <Text>Scroll down for more info</Text>
        </Wrap>
        <Wrapul>
          <ul>
            <li>The different parts of the Scada Unit are enumerated above.</li>
            <li>
              The Main Control Panel consists of PLC’s (Programmable Logic
              Controller) which will obtain the data from the Scada Unit and
              convert the data logically and will permute the data to different
              elements of the Machinery.
            </li>
            <li>
              The connections of the total power supply of the machinery were
              drawn from the Power Supply chamber.
            </li>
            <li>
              The Operational Indicators signifies three colours like Red,
              Yellow and Green which describes the elements of the machinery are
              at a halt, Maintenance and Working condition respectively.
            </li>
            <li>
              The operator can manually write the information to the elements of
              the machinery by the Information Panel.
            </li>
            <li>
              The operator can view and adjust the temperature of the six
              Heating Furnace Zones by the Ammeters.
            </li>{" "}
            <li>
              The total machinery can draw the power supply from the Main Power
              Supply Switch, which is a manual switch.{" "}
            </li>
            <li>
              {" "}
              The connection between the Power Supply Chamber and Main Control
              Chamber is stowed in the Connections Chamber.{" "}
            </li>
            <li>
              The wiring of different elements of the machinery to the control
              panel is stowed in the Wiring Chamber. • The air can be circulated
              to the chambers of the control panel by the Ventilation Slots.
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
