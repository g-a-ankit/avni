import React, { useState, useEffect } from "react";
import { Body, Card } from "../../Operations/Operations";
import { Redirect } from "react-router-dom";

import { Grid, BackCard as Back } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";
import back from "../../../../assets/images/back.png";
import styled from "styled-components";

import img1 from "../../../../assets/images/menu/prerequisites/4/1.png";
import img2 from "../../../../assets/images/menu/prerequisites/4/2.png";
import img3 from "../../../../assets/images/menu/prerequisites/4/3.png";
import img4 from "../../../../assets/images/menu/prerequisites/4/4.png";
import img5 from "../../../../assets/images/menu/prerequisites/4/5.png";
import { subRoutes } from "../../../../common/constants";
const Risk = () => {
  const [redirect, setRedirect] = useState(false);

  const data = [
    {
      img: img1,
      data: "Hot Surface",
      points: [
        "Wear appropriate PPE Kit and Heat Resistant Gloves",
        "Don’t keep any object on the top of the Machinery.",
        "Ensure the Machinery is sited on a Non-Flammable Surface along with the adjacent surfaces.",
      ],
    },
    {
      img: img2,
      data: "Ventilation Required",
      points: [
        "Operate in a well-Ventilated area.",
        "Operate only in a Fume Cupboard only, If Necessary.",
      ],
    },
    {
      img: img3,
      data: "Fire/ Explosion",
      points: [
        "The Machinery should be operated by trained professionals.",
        "Only the process Materials which are suitable for Risk- Assessment has to be carried out.",
      ],
    },
    {
      img: img4,
      data: "Electric Shock",
      points: [
        "Before Maintenance, the Machinery has to be isolated from all the power supplies.",
      ],
    },
    {
      img: img5,
      data: "Unit Toppling Over",
      points: [
        "During Maneuvering the Machinery, the exact manual handling procedures have to be followed.",
      ],
    },
  ];

  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.prerequisites} />;
  }
  return (
    <Wrap className="transition-left">
      <Grid src={grid} />
      <Back onClick={() => setRedirect(true)}>
        <img src={back} alt="" />
      </Back>
      <CardWrap>
        <Title>Symbols and Warnings</Title>
        <Content></Content>
        <Table>
          <Row>
            <th colspan="2">Risk</th>
            <th>Prevention Measures</th>
          </Row>
          {data.map((data1) => (
            <Row>
              <Col>
                <img src={data1.img} />
              </Col>
              <Col className="center">{data1.data}</Col>
              <Col>
                <ul>
                  {data1.points.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </Table>
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
const Table = styled.table`
  font-size: 12px;
  width: 70%;
  border: 2px solid black;
  margin-bottom: 7vw;
  & ul {
    list-style: disc;
  }
  & ul li {
    width: 100%;
    display: list-item;
    font-family: "Poppins", "serif";
    font-weight: 400;
    font-size: 12px;
    margin: 0;
  }
  @media all and (max-width: 567px) {
    & img {
      width: 50px;
    }
  }

  @media all and (max-width: 479px) {
    width: 90%;
  }
`;

const Row = styled.tr`
  border: 2px solid black;
  & img {
    width: 100px;
    margin: 20px;
  }
  & th {
    background: #b3b3b3;
    border-left: 2px solid black;
    text-align: center;
    font-size: 15px;
  }

  @media all and (max-width: 420px) {
    & img {
      margin: 10px;
      width: 50px;
    }
    width: 100%;
    border-radius: 0;
  }
`;
const Col = styled.td`
  border-left: 2px solid black;
  &.center {
    text-align: center;
    padding: 10px;
  }
  @media all and (max-width: 320px) {
    padding: 0px;
  }
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
  @media all and (max-width: 320px) {
    width: auto;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin: 7vh 0 0 0;
  @media all and (max-width: 567px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  font-size: 25px;
  width: 60%;
  margin: 2vh 0 2vh 0;
`;

export default Risk;
