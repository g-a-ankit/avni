import React, { useState, useEffect } from "react";
import { Body, Card, Wrap, Circles, Next } from "../../Operations/Operations";
import { Redirect } from "react-router-dom";

import { Grid, BackCards as Back } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";
import back from "../../../../assets/images/back.png";
import styled from "styled-components";
import { subRoutes } from "../../../../common/constants";

const Post = () => {
  const [redirect, setRedirect] = useState(false);

  const data = [
    {
      t1: "Power Switch",
      t2: "Check that when turned to the On position, the instrumentation on the control cabinet illuminates.",
    },
    {
      t1: "Safety Switch",
      t2: "Check that the power to the rotation system is switched off when the guard is opened.",
    },
    {
      t1: "Rotation System",
      t2: "Check that all moving parts are sufficiently lubricated, and that they move freely without obstruction.",
    },
  ];

  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.commissioning} />;
  }
  return (
    <Body className="transition-left">
      <Grid src={grid} />
      <Back onClick={() => setRedirect(true)}>
        <img src={back} alt="" />
      </Back>
      <CardWrap>
        <Title>Commissioning</Title>
        <Content>
          <Table>
            <Heading>
              When the product has been connected to the mains electrical
              supply, check the following:
            </Heading>
            {data.map((data) => (
              <Row>
                <T1>{data.t1}</T1>
                <T2>{data.t2}</T2>
              </Row>
            ))}
          </Table>
        </Content>
      </CardWrap>
    </Body>
  );
};

const StyledBody = styled(Body)`
  @media all and (max-width: 420px) {
    height: auto;
  }
`;

const Table = styled.div`
  font-size: 12px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

const Heading = styled.div`
  padding-left: 10px;
  border: 0.5px solid black;
  border-bottom: none;
  border-right: none;
  font-weight: bold;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const T1 = styled.div`
  flex: 1;
  padding-left: 10px;
  border: 1px solid black;
  border-bottom: none;
  @media all and (max-width: 420px) {
    flex: 2;
  }
`;
const T2 = styled.div`
  padding-left: 10px;
  border: 1px solid black;
  border-bottom: none;
  border-right: none;
  flex: 4;
  & ul {
    list-style: disc;
  }
  & ul li {
    width: 100%;
    display: list-item;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    margin: 0;
  }
  @media all and (max-width: 420px) {
    flex: 3;
  }
`;

const CardWrap = styled(Card)`
  position: relative;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: flex-start;

  @media all and (max-width: 567px) {
    // height: auto;
  }
  @media all and (max-width: 420px) {
    width: 100%;
    border-radius: 0;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 7vh 0 0 0;
  @media all and (max-width: 567px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  font-size: 25px;
  width: 580px;
  margin: 5vh 0 2vh 0;
  @media all and (max-width: 567px) {
    width: 90%;
  }
`;

export default Post;
