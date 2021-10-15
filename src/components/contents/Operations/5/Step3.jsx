import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import img from "../../../../assets/images/menu/operations/op-5/3.png";
import print from "../../../../assets/images/menu/operations/op-5/print.png";
import styled from "styled-components";
import Button from "../../../Button";
import { SCADA, Image, Img, Text } from "../Operations";
import { subRoutes } from "../../../../common/constants";
const Step1 = ({ stepChange, stepBack }) => {
  return (
    <SCADA>
      <Image src={logo} />
      <button onClick={stepBack} className="back-btn">
        <img src={back} alt="" />
      </button>{" "}
      <ImageWrap>
        <Img src={img} alt="" />
        <button
          onClick={() => {
            stepChange();
          }}
        />
      </ImageWrap>
      <Text>
        <span>
          Click on <img src={print} /> to print the historical trends of the
          machine process{" "}
        </span>
      </Text>
    </SCADA>
  );
};

const ImageWrap = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 30px 0;
  position: relative;
  & button {
    position: absolute;
    left: 21.7%;
    top: 12.7%;
    background: transparent;
    width: 2.8%;
    height: 5%;
    cursor: pointer;
    border: 3px solid red;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Step1;
