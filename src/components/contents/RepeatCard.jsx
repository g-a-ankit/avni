import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import logo from "../../assets/images/salvin logo.svg";
import curve1 from "../../assets/images/curve1.png";
import curve2 from "../../assets/images/curve2.png";
import { subRoutes } from "../../common/constants";
const RepeatCard = (props) => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to={props.menu} />;
  }
  return (
    <Wrap>
      <Logo src={logo} />
      <ImageTop src={curve1} />
      <ImageBottom src={curve2} />
      <Wrapper>
        <Button onClick={props.repeat}>Repeat</Button>
        <Button onClick={() => setRedirect(true)}>Menu</Button>
      </Wrapper>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const Wrapper = styled.div`
  position: relative;
  width: auto;
  top: 30%;
  left: 15%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.img`
  //   height: 73px;
  width: 30vw;
  position: absolute;
  top: 2vh;
  left: 5vw;
`;

const ImageTop = styled.img`
  position: absolute;
  height: 53%;
  //   width: 60%;
  right: 0;
`;
const ImageBottom = styled.img`
  position: absolute;
  height: 60%;
  bottom: 0;
  right: 0;
`;

const Button = styled.div`
  font-size: 16px;
  color: white;
  background: black;
  border-radius: 15px;
  width: 130px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
`;

export default RepeatCard;
