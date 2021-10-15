import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import back from "../../../../assets/images/back.png";
import logo from "../../../../assets/images/salvin logo.svg";
import styled from "styled-components";
import { Back } from "../../MenuCards";

const Unpacking = () => {
  const [redirect, setRedirect] = useState(false);

  const data = [
    "For safety and manoeuvrability, the machinery parts are secured to a pallet inside a crate.",
    "It is advised that the machinery parts are left on the pallet until the parts have been moved as close to the intended installation location.",
    "Using appropriate tools, carefully open the crate and remove all the external packaging and retain the crate panels and packaging.",
    "Ensuring that the product is stable and secure, remove any straps retaining the parts to the pallet.",
    "Use appropriate lifting equipment to lift the unit from underneath the base.",
    "Manoeuvre the parts into the desired position, ensuring that there is sufficient clearance above and around the sides of the furnace body.",
    "Make a suitable spot at the intended machinery area to place the Exhaust Burner, which is used to evict the gases.",
    "Ensure the proper ventilation to the machinery area and don’t keep any individual small items/parts near to the heating zones, blowers and above the machinery.",
    "Products with a factory-fitted supply cable but without a plug are designed to be wired directly to an isolator or fitted with a line plug, compliant with the customer’s local regulations and supply.",
    "Products without a factory-fitted supply cable require a permanent connection to a fused and isolated  supply. The product’s electrical component access panel should be temporarily removed, and connections made to the internal terminals/fuse holder.",
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
        <br />
        <br />
      </Wrapper>
    </>
  );
};

export const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  & p {
    width: 50%;
    border: 2px solid #b3b3b3;
    padding: 10px;
  }
  @media all and (max-width: 567px) {
    & p {
      width: 80%;
    }
  }
`;
export const Text = styled.h4`
  display: flex;
  flex: 1 1 auto;
  padding: 40px 0px 40px 0;
  font-size: 30px;
`;
export const Wrapper = styled.div`
  padding: 2vh 0vw 4vh 2vw;
  font-family: "Lucida Sans";
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & ul {
    list-style: disc;
    margin-right: 20px;
  }
  & ul li {
    display: list-item;
    font-family: "Lucida Sans";
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media all and (max-width: 567px) {
    padding: 2vh 0vw 4vh 2vw;
  }
`;
export const Image = styled.img`
  height: 40px;
  align-self: flex-start;
`;

export default Unpacking;
