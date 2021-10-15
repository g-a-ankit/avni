import React, { useState, useEffect } from "react";
import { Body, Card, Wrap, Circles, Next } from "../../Operations/Operations";
import { Redirect } from "react-router-dom";

import { Grid, Back } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";
import back from "../../../../assets/images/back.png";
import img1 from "../../../../assets/images/menu/prerequisites/1/1.png";
import img2 from "../../../../assets/images/menu/prerequisites/1/2.png";
import img3 from "../../../../assets/images/menu/prerequisites/1/3.png";
import img4 from "../../../../assets/images/menu/prerequisites/1/4.png";
import styled from "styled-components";
import { subRoutes } from "../../../../common/constants";
const data = [
  {
    img: img1,
    text: "Read and understood the information contained within this manual.",
  },
  {
    img: img2,
    text: "Received the relevant training regarding safety and operation of the product.",
  },
  {
    img: img3,
    text: "Been  provided with the appropriate PPE (Personal Protective Equipment) required for the safe operation of this product.",
  },
];
const Safety = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.prerequisites} />;
  }
  return (
    <Body>
      <Grid src={grid} />
      <CardWrap>
        <Back onClick={() => setRedirect(true)}>
          <img src={back} alt="" />
        </Back>
        <Title>Operator Safety</Title>
        <Content>
          It is the responsibility of the customer to ensure that all personnel
          requried to operate this product are fully trained and equipped with
          the appropriate PPE (Personal Protective Equipment).
        </Content>
      </CardWrap>
    </Body>
  );
};
const CardWrap = styled(Card)`
  position: relative;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: flex-start;
  & img {
    height: 60%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 7vh 0 0 0;
  @media all and (max-width: 567px) {
    font-size: 25px;
  }
`;
const Content = styled.div`
  font-size: 25px;
  width: 70%;
  margin: 10vh 0 2vh 0;
  text-align: center;
  @media all and (max-width: 567px) {
    font-size: 18px;
  }
`;

export default Safety;
