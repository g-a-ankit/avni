import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img from "../../../../assets/images/menu/operations/1/1.png";
import parameters from "../../../../assets/images/menu/operations/1/parameters.png";
import styled from "styled-components";
import { Next, SCADA, Image, Img, Text } from "../Operations";

const Steps1 = ({ stepChange }) => {
  const history = useHistory();
  const goToPreviousPath = () => {
    console.log(history);
    history.goBack();
  };
  return (
    <SCADA>
      <Image src={logo} />
      <button className="back-btn" onClick={goToPreviousPath}>
        <img src={back} alt="" />
      </button>
      <ImageWrap className="transition-left">
        <Img className="transition-left" src={img} alt="" />
        <button
          onClick={() => {
            stepChange();
          }}
        />
      </ImageWrap>
      <Text>
        <span>
          Click on <img src={parameters} /> in the title bar options available{" "}
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
    left: 18.5%;
    top: 3%;
    background: transparent;
    width: 11%;
    height: 6%;
    border: 3px solid red;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Steps1;
