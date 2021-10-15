import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Back } from "../../MenuCards";
import img1 from "../../../../assets/images/menu/operations/home/1.png";
import img2 from "../../../../assets/images/menu/operations/home/2.png";
import img3 from "../../../../assets/images/menu/operations/home/3.png";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";
const Overview = () => {
  const [redirect, setRedirect] = useState(false);
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to={subRoutes.PPRKF.about} />;
  }

  return (
    <Wrap className="transition">
      <Back onClick={goBack}>
        <img src={back} alt="" />
      </Back>
      <Image src={logo} />
      <Title>Product Overview</Title>
      <Image1 src={img1} />
      <WrapImg>
        <img src={img2} />
        <img src={img3} />
      </WrapImg>
      <About>
        <h3>About device:</h3>
        <p>
          The product is intended to use in a laboratory environment to pellet
          reduction process.
        </p>
        <p>
          The device has mainly 3 parts, the main furnace attached with rotary
          klin, the control panel and the Scada unit. The main furnace set-up
          starts with a disc palletizer followed by a 6 level heating zone
          poceeding to a rotary heating chamber and then to the cooling chamber
          after where the end product of the process is recieved.
        </p>
        <p>
          Further the disc palletizer is supplied with water in sufficient
          manner to help prepare the mixture which is then placed on the
          conveyer belt taking from heating zone 1 to 6 here in the heating zone
          the mixture is treated with nitrogen gas. Further leading the process
          is the heating chamber where the mixture is treated with hydrogen gas
          and then dispatched to the cooling chamber.
        </p>
        <br />
        <p>
          The system is completely controlled by the control panel to which the
          data is sent using the Scada interface, this data is manually/
          automatically generated and sent to the PLC from where the control
          panel understands & controls the entire procedure. Further all the
          heating zones are equipped with a safety thermocouple which in the
          case of failure of the PLC makes sure that the temperature does not
          precede the safety point.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </About>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  padding: 2vh 3vw;
`;
const WrapImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //   width: 100vw;
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
  // width: 22vw;
  align-self: flex-start;
  margin-bottom: 20px;
  @media all and (max-width: 567px) {
    height: 8vh;
    align-self: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "PlayFair Display", "serif";
`;

const Image1 = styled.img`
  width: 40vw;
  margin-bottom: 40px;
  @media all and (max-width: 567px) {
    width: 60vw;
    align-self: center;
    width: 100%;
  }
`;

const About = styled.div``;

export default Overview;
