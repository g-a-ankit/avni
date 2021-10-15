import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img2 from "../../../../assets/images/menu/operations/op-4/2.png";
import img4 from "../../../../assets/images/menu/operations/op-4/4.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import { Next, SCADA, Image, Img, Text, ImageWrap } from "../Operations";
import Step1 from "./Step1";
import Step3 from "./Step3";

const data = [
  {},
  {
    img: img2,
    step: "You are now viewing all manual control panel",
  },
  {},
  {
    img: img4,
    step: "Pre-heating zone-1 switched ON successfully",
  },
];

const Steps = () => {
  const history = useHistory();

  const [step, setStep] = useState(1);
  var interval;
  const repeatHandler = () => {
    setStep(1);
  };

  if (step === 5) {
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
      />
    );

  return (
    <SCADA>
      <Image src={logo} />
      <button onClick={() => setStep(step - 1)} className="back-btn">
        <img src={back} alt="" />
      </button>{" "}
      <ImageWrap>
        <Img src={data[step - 1].img} alt="" />
      </ImageWrap>
      <Next
        onClick={() => {
          setStep(step + 1);
        }}
      >
        Next
      </Next>
      <Text>{data[step - 1].step}</Text>
    </SCADA>
  );
};

export default Steps;
