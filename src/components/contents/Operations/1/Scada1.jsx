import logo from "../../../../assets/images/salvin logo.svg";
import img1 from "../../../../assets/images/menu/operations/home/1.png";
import img2 from "../../../../assets/images/menu/operations/home/2.png";
import img3 from "../../../../assets/images/menu/operations/home/3.png";
import React from "react";
import styled from "styled-components";
import Button from "../../../Button";
import { subRoutes } from "../../../../common/constants";
const Scada1 = () => {
  return (
    <SCADA>
      <Image src={logo} />
      <ImageWrapper>
        <Image1 src={img1} />
        <Image2 src={img2} />
        <Image3 src={img3} />
      </ImageWrapper>
      <Button route={subRoutes.PPRKF.operation} />
    </SCADA>
  );
};

const Image = styled.img`
  position: absolute;
  top: 3%;
  left: 5%;
  height: 73px;
  @media all and (max-width: 567px) {
    position: static;
    width: 260px;
  }
`;

const SCADA = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  // justify-content: center;
  align-items: center;
  @media all and (max-width: 567px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80%;

  @media all and (max-width: 567px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Image1 = styled.img`
  padding: 0px 20px;
  width: 40%;
  height: auto;
  flex: 2;
  @media all and (max-width: 567px) {
    width: 80%;
  }
`;
const Image2 = styled.img`
  height: auto;
  width: 30%;
  flex: 1;
  @media all and (max-width: 567px) {
    width: 60%;
  }
`;
const Image3 = styled.img`
  height: auto;
  width: 30%;
  flex: 1;
  @media all and (max-width: 567px) {
    width: 60%;
    margin: 20px;
  }
`;

export default Scada1;
