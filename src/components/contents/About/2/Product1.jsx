import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import img1 from "../../../../assets/images/menu/about/img1.png";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";

const Product1 = ({ goBack }) => {
  return (
    <>
      <Wrapper>
        <Wrap>
          <Image src={logo} />
          <WrapImg>
            <Image1 src={img1} />
            <ol start="1">
              <li>Heating Furnace Zone</li>
              <li>Safety Thermocouples</li>
              <li>Conveyor Belt</li>
              <li>Conveyor Motor</li>
              <li>Heating Chamber</li>
              <li>Exhaust Burner</li>
              <li>Cooling Chamber</li>
              <li>Blowers</li>
            </ol>
          </WrapImg>

          <Text>Scroll down for more info</Text>
        </Wrap>
        <Wrapul>
          <ul>
            <li>
              The six Heating Furnace Zones are Accompanied by the heating rods
              to transmit the heat to the blended material and supplied with
              Nitrogen gas as a carrier gas for the reactive furnace atmosphere.
            </li>
            <li>
              The Heating Zones are equipped with SafetyThermocouples to
              maintain the temperature Set Value in the Furnaces.{" "}
            </li>
            <li>
              The Motor along with the Conveyor Belt is rotated at a pre-defined
              speed to move the material blend through the furnaces.
            </li>
            <li>
              The Heat is distributed to the Heating Chamber by burning the air
              and fuel mixture in the Exhaust Burner.{" "}
            </li>
            <li>
              The Heating Chamber with Hydrigen gas and the Cooling Chamber with
              water is supplied to carry out the post-processing process, i.e.
              HEating and Cooling of the blended material.{" "}
            </li>
            <li>
              The Total Machinery is equipped with Blowers to blow off the heat
              generated by the heating furnaces and heating chamber from the
              machinery area.
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
export const Text = styled.h4`
  position: relative;
  bottom: 10px;
  display: flex;
  flex: 1 1 auto;
  justify-items: flex-end;
  align-items: flex-end;
  padding-bottom: 50px;
  color: #a3a3a3;
`;
export const Wrapper = styled.div`
  padding: 2vh 0vw 4vh 3vw;

  //   overflow: hidden;
  & ol li::before {
    padding-right: 10px;
  }
  & ul {
    list-style: disc;
  }
  & ul li {
    width: 100%;
    display: list-item;
    font-family: "Gotham", "serif";
    font-weight: 400;
    font-size: 16px;
    margin: 0;
  }
`;
export const Wrapul = styled.div``;
export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  width: 90vw;
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  height: 100vh;
  & h2 {
    margin-top: 2vh;
    font-family: "Roboto", sans-serif;
  }
`;
export const WrapImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50vh;
  max-width: 100vw;
  & img {
    padding: 0 20px;
  }
  @media all and (max-width: 768px) {
    height: 70vh;
    flex-direction: column;
    & img {
      height: auto;
      padding: 0;
    }
    & ol {
      margin-top: 40px;
    }
  }
`;
export const Image = styled.img`
  width: 22vw;
  align-self: flex-start;
  @media all and (max-width: 768px) {
    width: 66vw;
    align-self: center;
  }
`;

export const Image1 = styled.img`
  width: 40vw;

  @media all and (max-width: 768px) {
    align-self: center;
    width: 100%;
    height: auto;
  }
`;

export const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  & img {
    height: 14px;
    display: flex;
    align-self: center;
  }
`;
export default Product1;