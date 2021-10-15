import React, { useState, useEffect } from "react";
import logo from "../../../../assets/images/salvin logo.svg";
import img2 from "../../../../assets/images/menu/operations/2/2.png";
import img3 from "../../../../assets/images/menu/operations/2/3.png";
import img4 from "../../../../assets/images/menu/operations/2/4.png";
import styled from "styled-components";
import Button from "../../../Button";
import RepeatCard from "../../RepeatCard";
import { Next, SCADA, Image, Img, Text } from "../Operations";
import Steps1 from "./Steps1";
import { subRoutes } from "../../../../common/constants";
const data = [
  {
    img: [img2],
    step: "You are now viewing all zone control panel",
  },
  {
    img: [img3, img4],
    step: "Temperature SV: set value (Max: 1400C)",
  },
];

const Steps3 = () => {
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
    console.log("outside", step, count);
    if (step === 3) {
      console.log("inside", step, count);
      if (count == 2) setCount(0);
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
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
    <SCADA className="transition-left">
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

const ImageWrap = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 30px 0;
  position: relative;
  & button {
    position: absolute;
    left: 18.5%;
    top: 3%;
    background: transparent;
    width: 11%;
    height: 6%;
    border: 3px solid red;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`;

export default Steps3;
