import React, { useState, useEffect } from "react";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import img2 from "../../../../assets/images/menu/operations/op-5/2.png";
import img3 from "../../../../assets/images/menu/operations/op-5/3.png";
import print from "../../../../assets/images/menu/operations/op-5/print.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import Step1 from "./Step1";
import Step3 from "./Step3";
import { Next, SCADA, Image, Img, Text, ImageWrap } from "../Operations";

const data = [
  {
    img: img2,
    step: "",
  },
  {
    img: img3,
    step: "Click on the individual motor to set value in the table to configure",
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
    return <RepeatCard repeat={repeatHandler} menu="/operation" />;
  }

  if (step === 1)
    return (
      <Step1
        stepChange={() => {
          setStep(step + 1);
        }}
      />
    );
  if (step === 3)
    return (
      <Step3
        stepChange={() => {
          setStep(step + 1);
        }}
        stepBack={() => setStep(step - 1)}
      />
    );

  return (
    <SCADA>
      <Image src={logo} />
      <button onClick={() => setStep(step - 1)} className="back-btn">
        <img src={back} alt="" />
      </button>{" "}
      <ImageWrap>
        <Img src={data[step - 2].img} alt="" />
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
