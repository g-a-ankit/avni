import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img from "../../../../assets/images/menu/operations/op-4/3.png";
import manual from "../../../../assets/images/menu/operations/op-4/manual.png";
import styled from "styled-components";
import { Next, SCADA, Image, Img, Text } from "../Operations";
import { subRoutes } from "../../../../common/constants";
const Step3 = ({ stepChange }) => {
  const history = useHistory();

  return (
    <SCADA>
      <Image src={logo} />
      <button onClick={() => history.goBack()} className="back-btn">
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
      <Text>Click on the knob to turn ON the heating zone -1</Text>
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
    left: 7.35%;
    top: 24.7%;
    background: transparent;
    width: 10.7%;
    height: 17%;
    border: 3px solid red;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Step3;
