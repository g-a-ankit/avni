import React, { useState, useEffect } from "react";
import { Body, Card, Wrap, Circles, Next } from "../../Operations/Operations";
import { Back } from "../../MenuCards";
import { Redirect } from "react-router-dom";

import { Grid } from "../../MenuCards";
import RepeatCard from "../../RepeatCard";
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
const Use = () => {
  const [step, setStep] = useState(1);
  const [redirect, setRedirect] = useState(false);

  const onBackHandler = () => {
    if (step == 1) setRedirect(true);
    else setStep(step - 1);
  };
  const repeatHandler = () => {
    setStep(1);
  };

  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.prerequisites} />;
  }

  if (step === 5) {
    return (
      <RepeatCard repeat={repeatHandler} menu={subRoutes.PPRKF.prerequisites} />
    );
  }
  return (
    <Body>
      <Grid src={grid} />
      <CardWrap>
        <Back onClick={onBackHandler}>
          <img src={back} alt="" />
        </Back>
        {step === 1 ? (
          <>
            <Title>Prerequisites to Use</Title>
            <Content>
              Prior to the commisioning and use of this product, all personnel
              involved in its installation, operation and maintenance must be
              deemed competent and follow the further steps.
            </Content>
            <Next onClick={() => setStep(2)}>Next</Next>
          </>
        ) : (
          <>
            <img className="img" src={data[step - 2].img} alt="" />
            <Content>{data[step - 2].text}</Content>
            <Next onClick={() => setStep(step + 1)}>Next</Next>
          </>
        )}
      </CardWrap>
    </Body>
  );
};
const CardWrap = styled(Card)`
  position: relative;
  flex-direction: column;
  font-family: "Lucida Sans", "PlayFair Display", sans-serif;
  justify-content: flex-start;
  & .img {
    height: 60%;
    max-height: 450px;
    padding-top: 30px;
  }
  @media all and (max-width: 768px) {
    & .img {
      width: 80%;
      height: auto;
      max-height: 450px;
    }
  }
`;

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  margin: 7vh 0 0 0;
  @media all and (max-width: 567px) {
    font-size: 25px;
    margin: 20px;
  }
`;
const Content = styled.div`
  font-size: 25px;
  width: 60%;
  margin: 7vh 0 2vh 0;
  text-align: center;
  @media all and (max-width: 567px) {
    font-size: 16px;
    margin: 15px;
  }
`;

export default Use;
