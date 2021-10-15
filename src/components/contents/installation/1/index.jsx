import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import img1 from "../../../../assets/images/menu/installation/1/1.png";
import img2 from "../../../../assets/images/menu/installation/1/2.png";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";
import { Body, Card, Wrap, Circles, Next } from "../../Operations/Operations";
import { Grid, Back } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";

const Handling = () => {
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/installation" />;
  }

  return (
    <>
      <Body className="transition-left">
        <Grid src={grid} />
        <CardWrap>
          <Back onClick={() => setRedirect(true)}>
            <img src={back} alt="" />
          </Back>
          <Title>Manual Handling</Title>
          <Content>
            <Table>
              <Row>
                <T1>
                  <img src={img1} alt="" />
                </T1>
                <T2>
                  Mechanical lifting equipment may be necessary! Consult
                  responsible personnel for health and safety before attempting
                  to move this machinery. It is the responsibility of the client
                  to provide the required mechanical lifting aids, such as
                  pallet trucks, forklifts or cranes, and to ensure thatall
                  operators of such equipment are fully trained and qualified.
                </T2>
              </Row>
              <Row>
                <T1>
                  <img src={img2} alt="" />
                </T1>
                <T2>
                  All Manual handling must be carried out according to local
                  health and safety guidelines.
                </T2>
              </Row>
            </Table>
          </Content>
        </CardWrap>
      </Body>
    </>
  );
};

export const Table = styled.div`
  font-size: 12px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

export const Heading = styled.div`
  padding-left: 10px;
  border: 0.5px solid black;
  border-bottom: none;
  border-right: none;
  font-weight: bold;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const T1 = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-bottom: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  & img {
    width: 100px;
  }
  @media all and (max-width: 567px) {
    & img {
      width: 50px;
    }
  }
`;
export const T2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
  border: 1px solid black;
  border-bottom: none;
  text-align: center;
`;

export const CardWrap = styled(Card)`
  position: relative;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: flex-start;

  @media all and (max-width: 567px) {
    height: auto;
  }
  @media all and (max-width: 420px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 7vh 0 0 0;
  @media all and (max-width: 567px) {
    font-size: 20px;
  }
`;
export const Content = styled.div`
  font-size: 25px;
  width: 580px;
  margin: 5vh 0 2vh 0;
  @media all and (max-width: 567px) {
    width: 90%;
  }
`;

export default Handling;
