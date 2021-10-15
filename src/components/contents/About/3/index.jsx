import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Back } from "../../MenuCards";
import back from "../../../../assets/images/back.png";
import caution from "../../../../assets/images/menu/about/caution.png";
import { subRoutes } from "../../../../common/constants";
const Specifications = () => {
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.about} />;
  }
  return (
    <Wrap className="transition-left">
      <Title>Specifications & Dimensions</Title>
      <Section>
        <div>Device</div>
        <div>External Dimensions (closed):</div>
        <div>
          {" "}
          Height x Width x Length (between doors) (mm):4500 x N/A x 12000
        </div>
        <div>
          Scada & control systems Dimensions (open): Height x Width (mm):2500 x
          3750
        </div>
        <div>Speed (rpm) :50Hz</div>
      </Section>
      <Section>
        <h2>Fuses and Power Settings:</h2>
        <div>
          Please refer to the supplementary electrical information in the
          product document pack provided with this product
        </div>
      </Section>
      <Section>
        <h2>Operating / Storage Environment:</h2>
        <div>
          The products covered by this manual contain electrical parts and
          should be stored and used in indoor conditions as follows:
        </div>
        <div>Temperature: 5°C - 40°C</div>
        <div>
          Relative humidity: Maximum 80% up to 31°C decreasing linearly to 50%
          at 40°C
        </div>
        <div>Altitude: Not exceeding 2000 metres</div>
      </Section>
      <Footer>
        <h2>This equipment MUST be earthed!</h2>
      </Footer>
      <Image src={caution} alt="" />
      <Back
        onClick={() => {
          setRedirect(true);
        }}
      >
        {" "}
        <img src={back} alt="" />
      </Back>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  padding: 5vh 3vw;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom 3vh;
`;
const Section = styled.div`
  margin: 5vh 0;
  & h2 {
    font-size: 20px;
  }
`;
const Footer = styled.div``;

const Image = styled.img`
  margin: 3vw 0;
`;

export default Specifications;
