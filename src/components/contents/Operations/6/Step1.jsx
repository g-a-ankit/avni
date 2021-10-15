import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import img from "../../../../assets/images/menu/operations/2/1.png";
import online from "../../../../assets/images/menu/operations/op-6/online.png";
import styled from "styled-components";
import Button from "../../../Button";
import { SCADA, Image, Img, Text } from "../Operations";

const Step1 = ({ stepChange }) => {
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
      <Text>
        <span>
          Click on <img src={online} /> in the title bar options available{" "}
        </span>
      </Text>
    </SCADA>
  );
};

const ImageWrap = styled.div`
  & button {
    position: absolute;
    left: 28.9%;
    top: 3%;
    background: transparent;
    width: 11%;
    height: 6%;
    border: 3px solid red;
  }
  width: 80%;
  max-width: 600px;
  margin: 0px 0;
  margin-bottom: 3vw;
  position: relative;
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Step1;
