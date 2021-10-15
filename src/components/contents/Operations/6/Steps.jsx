import React, { useState, useEffect } from "react";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import img2 from "../../../../assets/images/menu/operations/op-6/2.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import { Next, ImageWrap } from "../Operations";
import Step1 from "./Step1";
import { SCADA, Image, Img, Text } from "../Operations";

const data = [
  {
    img: img2,
    step: "You are now viewing real-time trends of all heating zones",
  },
  {
    img: img2,
    step: "Change parameter using the zone bar on the screen",
  },
];

const Steps = () => {
  const [step, setStep] = useState(1);
  //   const [data1, setImgs] = useState(data);\
  var interval;
  const repeatHandler = () => {
    setStep(1);
  };

  if (step === 4) {
    return (
      <RepeatCard repeat={repeatHandler} menu={subRoutes.PPRKF.operation} />
    );
  }

  if (step === 1)
    return (
      <Step1
        stepChange={() => {
          setStep(step + 1);
        }}
      />
    );

  return (
    <SCADA>
      <Image src={logo} />
      <button onClick={() => setStep(step - 1)} className="back-btn">
        <img src={back} alt="" />
      </button>{" "}
      <ImageWrap className="transition-left">
        <Img className="transition-left" src={data[step - 2].img} alt="" />
      </ImageWrap>
      <Next
        onClick={() => {
          setStep(step + 1);
        }}
      >
        Next
      </Next>
      <Text>{data[step - 2].step}</Text>
    </SCADA>
  );
};

export default Steps;
