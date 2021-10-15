import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import dsf from "../../";
export const MenuPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #ee3171, #0e263a);
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 567px) {
    background: none;
  }
`;

export const Grid = styled.img`
  position: absolute;
  right: 0;
  height: 200px;
`;
export const MenuCard = styled.div`
  width: 80%;
  height: 85%;
  background: white;
  border-radius: 50px;
  position: relative;
  display: flex;
  flex-direction: column;

  & ul {
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media all and (max-width: 768px) {
    height: 90%;
  }
  @media all and (max-width: 320px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 20vh;
`;

export const Logo = styled.div`
  display: flex;
  width: 20vw;
  height: auto;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  & span {
    font-size: 20px;
    margin: 10px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    & img {
      height: 25vw;
    }
  }
`;

export const Column = styled(Col)`
  width: 12em;
`;

export const Salvin = styled.img`
  height: 40px;

  justify-self: center;
  align-self: center;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 2.2vw 0px 0px 3vw;
  @media all and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0 0 0;
    & .pointers li {
      font-size: 16px;
    }
  }
  @media all and (max-width: 320px) {
    width: 100%;
  }
`;

export const BackBtn = styled.button`
  position: absolute;
  bottom: 5.5vh;
  left: 3vw;
  width: 140px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-image: linear-gradient(to left, #ee3171, #0e263a);
  z-index: 1;

  & img {
    height: 14px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    margin: 0px 10px;
  }

  & span {
    width: 100%;
    justify-self: center;
    align-self: center;
    color: white;
  }
  @media all and (max-width: 768px) {
    left: auto;
    align-self: center;
    margin-bottom: 20px;
  }
  @media all and (max-width: 567px) {
    // position: static;
    // bottom: 0;
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 10%;
  left: 3%;
  width: 140px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  background-image: linear-gradient(to left, #ee3171, #0e263a);
  z-index: 1;

  & img {
    height: 14px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    margin: 0px 10px;
  }

  & span {
    width: 100%;
    justify-self: center;
    align-self: center;
    color: white;
  }
`;

export const Next = styled.div`
  width: 170px;
  height: 50px;
  text-align: center;
  background: black;
`;

export const Back = styled.button`
  position: fixed;
  bottom: 10%;
  left: 3%;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  // align-items: center;
  background: black;

  & img {
    height: 16px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-self: center;
  }

  @media all and (max-width: 767px) {
    left: 3%;
  }
`;

export const BackCard = styled.button`
  position: fixed;
  bottom: 8%;
  left: 12%;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  // align-items: center;
  background: black;

  & img {
    height: 16px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-self: center;
  }

  @media all and (max-width: 767px) {
    left: 3%;
  }
`;
export const BackCards = styled.button`
  position: fixed;
  bottom: 15%;
  left: 12%;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  // align-items: center;
  background: black;

  & img {
    height: 16px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-self: center;
  }

  @media all and (max-width: 767px) {
    left: 3%;
  }
`;
