import React, { useState, useEffect } from "react";
import logo from "../../../../assets/images/salvin logo.svg";
import img2 from "../../../../assets/images/menu/operations/1/2.png";
import img3 from "../../../../assets/images/menu/operations/1/3.png";
import img4 from "../../../../assets/images/menu/operations/1/4.png";
import img5 from "../../../../assets/images/menu/operations/1/5.png";
import img6 from "../../../../assets/images/menu/operations/1/6.png";
import img7 from "../../../../assets/images/menu/operations/1/7.png";
import img8 from "../../../../assets/images/menu/operations/1/8.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import { Next, SCADA, Image, Img, Text, ImageWrap } from "../Operations";
import Steps1 from "./Steps1";
import { subRoutes } from "../../../../common/constants";
const data = [
  {
    img: [img2],
    step: "You are now viewing safety controller temperature settings",
  },
  {
    img: [img3, img4, img5, img6, img7, img8],
    step: "Click on the set value table to enter the threshold values (Max: 1400C)",
  },
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  //   const [data1, setImgs] = useState(data);\
  var interval;
  const [success, setSuccess] = useState(false);
  const repeatHandler = () => {
    setStep(1);
    setCount(0);
  };

  useEffect(() => {
    if (step === 3) {
      if (count == 6) setCount(0);
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
      <Button />
      <ImageWrap className="transition-left">
        <Img
          className="transition-left"
          src={data[step - 2].img[count]}
          alt=""
        />
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
