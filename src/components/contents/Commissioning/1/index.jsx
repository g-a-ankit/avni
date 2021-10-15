import React, { useState, useEffect } from "react";
import { Body, Card, Wrap, Circles, Next } from "../../Operations/Operations";
import { Redirect } from "react-router-dom";

import { Grid, BackCards as Back } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";
import back from "../../../../assets/images/back.png";
import styled from "styled-components";
import { subRoutes } from "../../../../common/constants";

const Pre = () => {
  const [redirect, setRedirect] = useState(false);

  const data = [
    {
      t1: "Siting/ Securing",
      t2: "Check that the product is placed on a secure, level surface and cannot topped over.",
    },
    {
      t1: "Packaging",
      t2: "Check that the packaging material has been removed from inside and around the product.",
    },
    {
      t1: "General Condition",
      t2: "Check that no damage has occurred during delivery and siting",
    },
    {
      t1: "Panels",
      t2: "Check that all covers and access pnales are securely fitted.",
    },
    {
      t1: "General Access",
      t2: "Check that there is sufficient clearance around the top and all sides of the product.",
    },
    {
      t1: "Electrical Supply",
      t2: "Check that the product is placed on a secure, level surface and cannot topped over.",
    },
  ];

  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.commissioning} />;
  }
  return (
    <StyledBody className="transition-left">
      <Grid src={grid} />
      <Back onClick={() => setRedirect(true)}>
        <img src={back} alt="" />
      </Back>
      <CardWrap>
        <Title>Pre-Commissioning</Title>
        <Content>
          <Table>
            <Heading>
              When the product is cold and disconnected from the power supply,
              visually check the following:
            </Heading>
            {data.map((data) => (
              <Row>
                <T1>{data.t1}</T1>
                <T2>{data.t2}</T2>
              </Row>
            ))}
            <Row>
              <T1>Electrical Supply</T1>
              <T2>
                <ul>
                  <li>
                    Check that the voltage stated on the product rating label
                    matches the electrical supply of the installation site.
                  </li>
                  <li>
                    Check that the voltage stated on the product rating label
                    matched the electrical supply of the installation site.
                  </li>
                </ul>
              </T2>
            </Row>
            <Row>
              <T1>Earth Connection</T1>
              <T2>
                Check that an earth connection has been made. The control
                cabinet and all removable panels on the furnace should be
                earthed.
              </T2>
            </Row>
            <Row>
              <T1 style={{ borderTop: "none" }}>
                <br />
                Rating Label/ Warming Labels
              </T1>
              <T2 style={{ borderTop: "none" }}>
                <br />
                Check that all labels are fitted and all information is legible.
              </T2>
            </Row>
          </Table>
        </Content>
      </CardWrap>
    </StyledBody>
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

  height: auto;
  @media all and (max-width: 567px) {
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

export default Pre;
