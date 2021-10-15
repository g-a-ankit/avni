import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  MenuPage,
  MenuCard,
  Image,
  Logo,
  Salvin,
  Wrap,
  Grid,
} from "../../MenuCards";
import Steps from "./Steps";
import Steps2 from "./Steps2";
import Steps3 from "./Steps3";
import { BackBtnCard as BackBtn } from "./../Operations";
import logo from "../../../../assets/images/menu/operation.png";
import back from "../../../../assets/images/back.png";
import salvin from "../../../../assets/images/salvin logo.svg";
import grid from "../../../../assets/images/grid.svg";
import styled from "styled-components";

const Home = () => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  const [next, setNext] = useState(false);
  const [data, setData] = useState("");
  const [redirect, setRedirect] = useState(false);
  const customTab = (e) => {
    console.log(e);
    setNext(true);
    setData(e.target.textContent);
    let options = document.getElementsByClassName("unit-option");
    console.log(options);
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
    }
    e.target.classList.add("active");
    setRedirect(false);
  };

  const nextSteps = () => {
    setRedirect(true);
  };

  if (redirect) {
    if (data === "Heating Zone") {
      return <Steps2 />;
    }
    if (data === "Safety Controller") return <Steps />;
    if (data === "Klin Temperature") return <Steps3 />;
  }

  return (
    <>
      <MenuPage className="operation-2 transition">
        <Grid src={grid} alt="dsf" />
        <MenuCard>
          <Wrap>
            <BackBtn onClick={goToPreviousPath}>
              <img src={back} alt="" />
            </BackBtn>
            <Logo>
              <Image src={logo} alt="" />
              <span>Operation</span>
            </Logo>
            <Wrapper>
              <Text>Select a unit to proceed further</Text>
              <Choices>
                <Choice onClick={customTab} className="unit-option">
                  Heating Zone
                </Choice>
                <Choice className="unit-option" onClick={customTab}>
                  Safety Controller
                </Choice>
                <Choice className="unit-option" onClick={customTab}>
                  Klin Temperature
                </Choice>
              </Choices>
              <Next
                onClick={nextSteps}
                style={!next ? { display: "none" } : {}}
              >
                Next
              </Next>
            </Wrapper>
          </Wrap>
        </MenuCard>
      </MenuPage>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  height: 60%;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.div`
  margin-bottom: 5vh;
  font-family: "Roboto", "serif";
  font-size: 2.4vw;
`;
const Choices = styled.div`
  margin-bottom: 7vh;
  display: flex;
  flex-direction: row;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Choice = styled.div`
  margin: 20px 10px;
  font-size: 17px;
  width: 170px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
  border-radius: 40px;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
`;

export const Next = styled.div`
  width: 150px;
  min-height: 50px;
  padding: auto;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  font-size: 17px;
  background: black;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export default Home;
