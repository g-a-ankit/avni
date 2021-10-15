import React, { useState, useEffect } from "react";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img2 from "../../../../assets/images/menu/operations/op-3/2.png";
import img3 from "../../../../assets/images/menu/operations/op-3/3.png";
import img4 from "../../../../assets/images/menu/operations/op-3/4.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import { Next, SCADA, Image, Img, Text, ImageWrap } from "../Operations";
import Steps1 from "../2/Steps1";

const data = [
  {
    img: [img2],
    step: "You are now viewing speed settings of different motors",
  },
  {
    img: [img3, img4],
    step: "Click on the individual motor to set value in the table to configure Max: 50Hz",
  },
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  //   const [data1, setImgs] = useState(data);\
  var interval;
  const repeatHandler = () => {
    setStep(1);
    setCount(0);
  };

  useEffect(() => {
    if (step === 3) {
      if (count == 2) setCount(0);
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (step === 4) {
      clearInterval(interval);
    }
  }, [step, count]);
  if (step === 4) {
    return (
      <RepeatCard repeat={repeatHandler} menu={subRoutes.PPRKF.operation} />
    );
  }

  if (step === 1)
    return (
      <Steps1
        stepChange={() => {
          setStep(step + 1);
        }}
      />
    );

  return (
    <SCADA>
      <Image src={logo} />
      <button
        onClick={() => {
          setStep(step - 1);
        }}
        className="back-btn"
      >
        <img src={back} alt="" />
      </button>
      <ImageWrap>
        <Img src={data[step - 2].img[count]} alt="" />
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
