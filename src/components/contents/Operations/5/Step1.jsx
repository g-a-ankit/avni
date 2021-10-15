import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img from "../../../../assets/images/menu/operations/2/1.png";
import historical from "../../../../assets/images/menu/operations/op-5/historical.png";
import styled from "styled-components";
import Button from "../../../Button";
import { SCADA, Image, Img, Text } from "./../Operations";
import { subRoutes } from "../../../../common/constants";
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
          Click on <img src={historical} /> in the title bar options available{" "}
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
    left: 39%;
    top: 3%;
    background: transparent;
    width: 13%;
    height: 6%;
    border: 3px solid red;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Step1;
