import React, { useState, useEffect } from "react";
import Steps from "./Steps";
import styled from "styled-components";
import { subRoutes } from "../../../../common/constants";
const Home = () => {
  return (
    <>
      <Steps />
    </>
  );
};

export const Next = styled.div`
  width: 150px;
  height: 50px;
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
