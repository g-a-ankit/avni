import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import back from "../../../../assets/images/back.png";
import img4 from "../../../../assets/images/menu/installation/1/img4.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";
import { Back } from "../../MenuCards";
import { Wrapper, Image, Text, Bar } from "../2";

const Connections = () => {
  const [redirect, setRedirect] = useState(false);

  const data = [
    "The parts of the machinery covered by this manual require a single-phase A.C supply, which may  be Live to Neutral non-reversible, Live to Neutral reversible or Live to Live and for some parts, the three- phase will be used, which may be with or without Neutral.",
    "The supply voltage and the supply capacity should be analogous to the voltage and current on the label respectively.",
    "When the mains cable is factory-fitted/supplied, internal fuses are also fitted. The operator must ensure that the power supply is correctly fused.",
    "Products with a factory-fitted supply cable but without a plug are designed to be wired directly to an isolator or fitted with a line plug, compliant with the customer’s local regulations and supply.",
    "Products without a factory-fitted supply cable require a permanent connection to a fused and  isolated supply. The product’s electrical component access panel should be temporarily removed, and connections made to the internal terminals/fuse holder.",
  ];
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/installation" />;
  }

  return (
    <>
      <Wrapper className="transition-left">
        <Image src={logo} />
        <Text>Unpacking</Text>
        <Bar>
          <p>
            Note: Check that all items intended for delivery are available and
            undamaged before proceeding to install the machinery.
          </p>
        </Bar>
        <ul>
          {data.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <Bar>
          <Back onClick={goBack}>
            <img src={back} alt="" />
          </Back>
          <p>Note:The Supply MUST be incorporated with an earth connection.</p>
        </Bar>
      </Wrapper>
    </>
  );
};

export default Connections;
