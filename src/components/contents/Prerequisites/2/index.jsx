import React, { useState, useEffect } from "react";
import { Body, Card } from "../../Operations/Operations";
import { Redirect } from "react-router-dom";

import { Grid, BackCard } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";
import back from "../../../../assets/images/back.png";
import styled from "styled-components";

import img1 from "../../../../assets/images/menu/prerequisites/2/1.png";
import img2 from "../../../../assets/images/menu/prerequisites/2/2.png";
import img3 from "../../../../assets/images/menu/prerequisites/2/3.png";
import img4 from "../../../../assets/images/menu/prerequisites/2/4.png";
import img5 from "../../../../assets/images/menu/prerequisites/2/5.png";
import img6 from "../../../../assets/images/menu/prerequisites/2/6.png";
import img7 from "../../../../assets/images/menu/prerequisites/2/7.png";
import img8 from "../../../../assets/images/menu/prerequisites/2/8.png";
import img9 from "../../../../assets/images/menu/prerequisites/2/9.png";
import img10 from "../../../../assets/images/menu/prerequisites/2/10.png";
import img11 from "../../../../assets/images/menu/prerequisites/2/11.png";
import img12 from "../../../../assets/images/menu/prerequisites/2/12.png";
import img13 from "../../../../assets/images/menu/prerequisites/2/13.png";
import img14 from "../../../../assets/images/menu/prerequisites/2/14.png";
import img15 from "../../../../assets/images/menu/prerequisites/2/15.png";
import img16 from "../../../../assets/images/menu/prerequisites/2/16.png";
import img17 from "../../../../assets/images/menu/prerequisites/2/17.png";
import img18 from "../../../../assets/images/menu/prerequisites/2/18.png";
import img19 from "../../../../assets/images/menu/prerequisites/2/19.png";
import img20 from "../../../../assets/images/menu/prerequisites/2/20.png";
import img211 from "../../../../assets/images/menu/prerequisites/2/21-1.png";
import img212 from "../../../../assets/images/menu/prerequisites/2/21-2.png";
import img22 from "../../../../assets/images/menu/prerequisites/2/22.png";
import img23 from "../../../../assets/images/menu/prerequisites/2/23.png";
import img24 from "../../../../assets/images/menu/prerequisites/2/24.png";

const Symbol = () => {
  const [redirect, setRedirect] = useState(false);

  const data = [
    [
      {
        img: img1,
        text: "Refer to the Instruction Manual before Operating or Maintaining the Equipment",
      },
      {
        img: img2,
        text: "Disconnect the Production from the Power Supply before performing any Maintenance",
      },
    ],
    [
      {
        img: img3,
        text: "Wear Eye protection",
      },
      {
        img: img4,
        text: "Wear a Heat-Resistant Face Shield",
      },
    ],
    [
      {
        img: img5,
        text: "Wear Heat-Resistant Gloves",
      },
      {
        img: img6,
        text: "Wear Breathing Apparatus",
      },
    ],
    [
      {
        img: img7,
        text: "Wear Protective Footwear",
      },
      {
        img: img8,
        text: "Wear Protective Clothing",
      },
    ],
    [
      {
        img: img9,
        text: "Minimum of two poeple required to Lift",
      },
      {
        img: img10,
        text: "DANGER: Heavy Load Specialist Equipment required",
      },
    ],
    [
      {
        img: img11,
        text: "Warning",
      },
      {
        img: img12,
        text: "DANGER: Risk of Electric Shock",
      },
    ],
    [
      {
        img: img13,
        text: "DANGER: Fire Risk",
      },
      {
        img: img14,
        text: "DANGER: Hot Surface",
      },
    ],
    [
      {
        img: img15,
        text: "CAUTION: Double Pole/ Neutral Fusing",
      },
      {
        img: img16,
        text: "DANGER: Slippery Surface",
      },
    ],
    [
      {
        img: img17,
        text: "DANGER: Suspended Loads",
      },
      {
        img: img18,
        text: "WARNING: Adequate Ventilation required",
      },
    ],
    [
      {
        img: img19,
        text: "CAUTION: Rotating Equipment",
      },
      {
        img: img20,
        text: "DANGER: Risk of Crushing Injury",
      },
    ],
  ];

  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.prerequisites} />;
  }
  return (
    <Wrap className="transition-left">
      <Grid src={grid} />
      <BackCard onClick={() => setRedirect(true)}>
        <img src={back} alt="" />
      </BackCard>
      <CardWrap>
        <Title>Symbols and Warnings</Title>
        <Content>
          <Table>
            <Heading>
              <strong>Note:</strong> Observe and act accordingly to the
              precautions given below, if any of the following warning symbols
              are displayed on this product or at your working environment.
            </Heading>
            {data.map((data) => (
              <Row>
                <Col>
                  <T1>
                    <img src={data[0].img} />
                  </T1>
                  <T2>{data[0].text}</T2>
                </Col>
                <Col>
                  <T1>
                    <img src={data[1].img} />
                  </T1>
                  <T2>{data[1].text}</T2>
                </Col>
              </Row>
            ))}
            <Row>
              <Col>
                <T1>
                  <img src={img211} />
                  <img src={img212} />
                </T1>
                <T2>DANGER: Explosive Materials/ Atmosphere</T2>
              </Col>
              <Col>
                <T1>
                  <img src={img22} />
                </T1>
                <T2>Action Forbidden</T2>
              </Col>
            </Row>
            <Row>
              <Col>
                <T1>
                  <img src={img23} />
                </T1>
                <T2>Heating/ Cooling any Food/ Beverages is Forbidden</T2>
              </Col>
              <Col>
                <T1>
                  <img src={img24} />
                </T1>
                <T2>DO NOT Dispose</T2>
              </Col>
            </Row>
          </Table>
        </Content>
      </CardWrap>
    </Wrap>
  );
};
const Wrap = styled(Body)`
  padding: 40px 0;
  height: auto;
  @media all and (max-width: 768px) {
    padding: 0;
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
const Col = styled.div`
  display: flex;
  flex: 1;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media all and (max-width: 479px) {
    flex-direction: column;
  }
`;
const T1 = styled.div`
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
const T2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 10px;
  border: 1px solid black;
  border-bottom: none;
  text-align: center;
`;

const CardWrap = styled(Card)`
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: flex-start;
  height: auto;
  margin: 5vh 0;
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin: 7vh 0 0 0;
  @media all and (max-width: 567px) {
    font-size: 25px;
  }
`;
const Content = styled.div`
  font-size: 25px;
  width: 60%;
  margin: 5vh 0 2vh 0;
  @media all and (max-width: 567px) {
    width: 80%;
  }
`;
export default Symbol;
