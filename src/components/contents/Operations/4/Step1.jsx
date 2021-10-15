import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img from "../../../../assets/images/menu/operations/op-4/1.png";
import manual from "../../../../assets/images/menu/operations/op-4/manual.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import { Next, SCADA, Image, Img, Text } from "../Operations";
import { subRoutes } from "../../../../common/constants";
const Step1 = ({ stepChange }) => {
  const history = useHistory();

  return (
    <SCADA>
      <Image src={logo} />
      <button onClick={() => history.goBack()} className="back-btn">
        <img src={back} alt="" />
      </button>
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
          Click on <img src={manual} /> in the title bar options available{" "}
        </span>
      </Text>
    </SCADA>
  );
};

const ImageWrap = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0px 0;
  position: relative;
  & button {
    position: absolute;
    left: 59.5%;
    top: 14%;
    background: transparent;
    width: 10%;
    height: 5%;
    border: 3px solid red;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Step1;
