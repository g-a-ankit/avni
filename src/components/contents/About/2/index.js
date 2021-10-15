import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Back as BackBtn } from "../../MenuCards";
import img1 from "../../../../assets/images/menu/operations/home/1.png";
import img2 from "../../../../assets/images/menu/operations/home/2.png";
import img3 from "../../../../assets/images/menu/operations/home/3.png";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";

const Identification = () => {
  const [redirect, setRedirect] = useState(false);
  const [change, setChange] = useState(0);
  const goBack = () => {
    setChange(0);
  };
  const page = [
    <Product1 goBack={goBack} />,
    <Product2 goBack={goBack} />,
    <Product3 goBack={goBack} />,
  ];
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.about} />;
  }
  if (change) {
    return page[change - 1];
  }

  return (
    <Wrap className="transition">
      <BackBtn
        onClick={() => {
          setRedirect(true);
        }}
        className="back-button"
      >
        <img src={back} alt="" />
      </BackBtn>
      <Image src={logo} />
      <Title>Product Overview</Title>
      <Image1
        onClick={() => {
          setChange(1);
        }}
        src={img1}
      />
      <WrapImg>
        <img
          onClick={() => {
            setChange(2);
          }}
          src={img2}
        />
        <img
          onClick={() => {
            setChange(3);
          }}
          src={img3}
        />
      </WrapImg>

      <h2>Select the Equipment for more Info.</h2>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  padding: 2vh 3vw 0vh 3vw;
  & h2 {
    margin-top: 2vh;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }
  & img {
    cursor: pointer;
  }
`;
const WrapImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40vh;
  max-width: 100vw;
  & img {
    padding: 0 20px;
    height: 100%;
  }

  @media (max-width: 567px) {
    height: auto;
    margin-bottom: 40px;
    & img {
      width: 50%;
      height: auto;
    }
  }
`;
const Image = styled.img`
  height: 40px;
  align-self: flex-start;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;

  height: 7vh;
`;

const Image1 = styled.img`
  width: 40vw;
  @media all and (max-width: 567px) {
    width: 60vw;
    align-self: center;
    width: 100%;
  }
`;

export default Identification;
