import React, { useState, useEffect } from "react";
import logo from "../../../../assets/images/salvin logo.svg";
import { Redirect } from "react-router-dom";
import img1 from "../../../../assets/images/menu/operations/home/3.png";
import img2 from "../../../../assets/images/menu/operations/TV.png";
import img3 from "../../../../assets/images/menu/operations/TV2.png";
import img4 from "../../../../assets/images/menu/operations/TV3.png";
import styled from "styled-components";
import back from "../../../../assets/images/back.png";
import RepeatCard from "../../RepeatCard";
import {
  Next,
  SCADA,
  Image,
  Img,
  Text,
  BackBtn,
  ImageWrap,
} from "../Operations";

import { subRoutes } from "../../../../common/constants";
const data = [
  {
    img: img1,
    step: "Switch ON the computer to access SCADA.",
  },
  {
    img: img2,
    step: "Open SCADA software on the desktop using mouse.",
  },
  {
    img: img3,
    step: "Enter login credentials and click on Login button.",
  },
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    if (step == 1) {
      setRedirect(true);
    } else setStep(step - 1);
  };
  const repeatHandler = () => {
    setStep(1);
  };

  useEffect(() => {
    if (step == 4) {
      setSuccess(true);
    } else setSuccess(false);
  }, [step]);
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.operation} />;
  }
  if (step === 5) {
    return (
      <RepeatCard repeat={repeatHandler} menu={subRoutes.PPRKF.operation} />
    );
  }
  return (
    <SCADA>
      <Image src={logo} />
      <BackBtn onClick={goBack} className="back-button">
        <img src={back} alt="" />
      </BackBtn>
      {success ? (
        <Card>
          <img src={img4} alt="" />
          <Next
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </Next>
          <Text>Login Successful</Text>
          <Text>
            You are now viewing the dashboard screen on the scada interface.
          </Text>
        </Card>
      ) : (
        <>
          {step === 1 ? (
            <ImageWrap1 className="transition-left">
              <Img1
                className="transition-left"
                src={data[step - 1]?.img}
                alt=""
              />
            </ImageWrap1>
          ) : (
            <ImageWrap className="transition-left">
              <Img
                className="transition-left"
                src={data[step - 1]?.img}
                alt=""
              />
            </ImageWrap>
          )}
          <Next
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Next
          </Next>
          <Text>
            {" "}
            Step {step}: {data[step - 1]?.step}
          </Text>
        </>
      )}
    </SCADA>
  );
};

const Img1 = styled(Img)`
  height: 100%;
  width: auto;
  // margin-bottom: 30vw;
`;

const ImageWrap1 = styled(ImageWrap)`
  height: 60%;
  width: auto;
  margin-bottom: 2%;

  @media all and (max-width: 567px) {
    width: 70%;
    height: auto;
    margin-top: 13%;
  }
`;

const Card = styled.div`
  // margin-top: 5vh;
  display: flex;
  width: 100vw;
  height: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    height: 60%;
    margin: 20px 0;
  }
  @media all and (max-width: 768px) {
    & img {
      width: 80%;
      height: auto;
    }
  }
`;

export default Steps;
