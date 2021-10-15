import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import img1 from "../../../../assets/images/menu/installation/1/1.png";
import img2 from "../../../../assets/images/menu/installation/1/2.png";
import back from "../../../../assets/images/back.png";
import { Body, Card, Wrap, Circles, Next } from "../../Operations/Operations";
import { Grid, Back } from "../../MenuCards";
import grid from "../../../../assets/images/grid.svg";
import { Table, Heading, Row, T1, T2, CardWrap, Title, Content } from "./../1";
import { subRoutes } from "../../../../common/constants";

const Setting = () => {
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.installation} />;
  }

  return (
    <>
      <Body className="transition-left">
        <Grid src={grid} />
        <CardWrap>
          <Back onClick={() => setRedirect(true)}>
            <img src={back} alt="" />
          </Back>
          <Title>Siting and Setting Up</Title>
          <Content>
            <Table>
              <Row>
                <T1>
                  <img src={img1} alt="" />
                </T1>
                <T2>
                  Use the manual handling method recommended by your health and
                  safety officer to place the product on a level, stable surface
                  that is not prone to vibration or movement. The surface upon
                  which the product is placed must be of a height suitable to
                  allow the operator to easily and safely use the equipment.
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

export default Setting;
