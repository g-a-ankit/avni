import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../../assets/images/salvin logo.svg";
import back from "../../../../assets/images/back.png";
import img2 from "../../../../assets/images/menu/operations/2/2.png";
import img3 from "../../../../assets/images/menu/operations/2/3.png";
import img4 from "../../../../assets/images/menu/operations/2/4.png";
import img5 from "../../../../assets/images/menu/operations/2/5.png";
import img6 from "../../../../assets/images/menu/operations/2/6.png";
import img7 from "../../../../assets/images/menu/operations/2/7.png";
import img8 from "../../../../assets/images/menu/operations/2/8.png";
import styled from "styled-components";
import RepeatCard from "../../RepeatCard";
import { Next, SCADA, Image, Img, Text } from "../Operations";
import Steps1 from "./Steps1";

const data = [
  {
    img: [img2],
    step: "You are now viewing all zone control panel",
  },
  {
    img: [img3, img4],
    step: "Temperature SV: set value (Max: 1400 C)",
  },
  {
    img: [img5, img6, img7],
    step: "Enter the temperature in the value table",
  },
  {
    img: [img8],
    step: "Temperature set successfully",
  },
];

const Steps = () => {
  const history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
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
      return () => {
        clearInterval(interval);
      };
    }
    if (step === 4) {
      if (count == 3) setStep(step + 1);
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    if (step === 5) {
      setCount(0);
    }
  }, [step, count]);
  if (step === 0) {
    console.log(history);
    goToPreviousPath();
  }
  if (step === 6) {
    return <RepeatCard repeat={repeatHandler} menu="/operation" />;
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
          setCount(0);
        }}
        className="back-btn"
      >
        <img src={back} alt="" />
      </button>
      <ImageWrap className="transition-left">
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

const ImageWrap = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0px 0;
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

export default Steps;
