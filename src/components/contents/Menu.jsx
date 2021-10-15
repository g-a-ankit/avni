import React, { useState } from "react";
import logo from "../../assets/images/salvin logo.svg";
import download from "../../assets/images/download.png";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Redirect } from "react-router-dom";
import back from "../../assets/images/back.png";
import about from "../../assets/images/menu/about.png";
import prerequisites from "../../assets/images/menu/prerequisites.png";
import installation from "../../assets/images/menu/installation.png";
import commissioning from "../../assets/images/menu/commissioning.png";
import operation from "../../assets/images/menu/operation.png";
import service from "../../assets/images/menu/service.png";
import curve from "../../assets/images/menu/curve.png";
import logoFooter from "../../assets/images/salvin.svg";
import aplos from "../../assets/images/aplos.svg";
import "../../slideDown.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Menu = () => {
  const menus = [
    { img: about, text: "About Device", link: "/about" },
    {
      img: prerequisites,
      text: "Prerequisites & Safety",
      link: "/prerequisites",
    },
    { img: commissioning, text: "Commissioning", link: "/commissioning" },
    { img: installation, text: "Installation", link: "/installation" },
    { img: operation, text: "Operation", link: "/operation" },
    { img: service, text: "Service Accessories", link: "/service" },
  ];
  const datas = menus.map((menu) => (
    <Wrap>
      <InnerWrap>
        <Link className="link" to={menu.link}>
          <StyledCard>
            <img src={menu.img} alt="" />
            <span>{menu.text}</span>
          </StyledCard>
        </Link>
      </InnerWrap>
    </Wrap>
  ));
  console.log(datas);
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Tint className="bg" />
      <TintLeft>
        <div className=""></div>
      </TintLeft>
      <div className="menu transition">
        <div className="height">
          <header>
            <img src={logo} alt="" />
            <a
              href="https://drive.google.com/file/d/1K8-FuI2PFhbDQRbkJ7l5Xy81M2rXElr0/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={download} alt="" />
            </a>
          </header>

          <h2>Menu</h2>
          <MenuWrapper>
            {menus.map((menu) => (
              <Wrap>
                <InnerWrap>
                  <Link className="link" to={menu.link}>
                    <StyledCard>
                      <img src={menu.img} alt="" />
                      <span>{menu.text}</span>
                    </StyledCard>
                  </Link>
                </InnerWrap>
              </Wrap>
            ))}
          </MenuWrapper>
          <AliceCarousel
            items={datas}
            responsive={responsive}
            autoPlayInterval={3000}
            autoPlayDirection="ltr"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            disableAutoPlayOnAction={true}
          />
        </div>
        <StyledButton
          onClick={() => {
            setRedirect(true);
          }}
          className="back-btn"
        >
          <img src={back} alt="" />
        </StyledButton>
        <Footer>
          <Cover>
            <Row>
              <Col>
                <h3>Product manufactured by,</h3>
                <img src={logoFooter} alt="" />
                <div>
                  for more info about salvin instruments{" "}
                  <a
                    href="http://www.salvininstruments.com/index.html"
                    target="_blank"
                  >
                    click here
                  </a>{" "}
                </div>
              </Col>
              <Col>
                <h3>Quick Links</h3>
                <div className="tags">
                  <a
                    href="http://www.salvininstruments.com/about.html"
                    target="_blank"
                  >
                    - About us
                  </a>
                </div>{" "}
                <div className="tags">
                  <a
                    href="http://www.salvininstruments.com/index.html#testimonials"
                    target="_blank"
                  >
                    - Testimonials
                  </a>
                </div>{" "}
                <div className="tags">
                  <a
                    href="http://www.salvininstruments.com/contact.html"
                    target="_blank"
                  >
                    - Contact us
                  </a>
                </div>
              </Col>
            </Row>
            <Cutter />
            <Row>
              <Col>
                <h3>Website designed and developed by,</h3>
                <img className="aplo" src={aplos} alt="" />
                <div>
                  for more info about interactive user manual{" "}
                  <a
                    href="https://www.aplos.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>{" "}
                </div>
              </Col>
              <Col>
                <h3>Quick Links</h3>
                <div className="tags">
                  <a href="https://www.aplos.in/basic-01" target="_blank">
                    - About us
                  </a>
                </div>
                <div className="tags">
                  <a href="https://www.aplos.in/technology" target="_blank">
                    - Projects
                  </a>
                </div>{" "}
              </Col>
            </Row>
          </Cover>
        </Footer>
      </div>
    </>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  @media all and (max-width: 576px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.div`
  @media all and (max-width: 576px) {
    position: sticky;
  }
`;

const TintLeft = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  & div {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #fb005b, #6c134a);
    -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%);
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  @media all and (max-width: 767px) {
    display: none;
  }
`;
const Cutter = styled.div`
  min-height: 80%;
  min-width: 3px;
  border-radius: 3px;
  background: #ee3171;
  margin: 0 40px;
  @media all and (max-width: 1024px) {
    min-width: 70%;
    min-height: 3px;
    margin: 30px 0;
  }
`;
const Footer = styled.div`
  margin: 30px 0 30px 0;
  width: 80%;
  // min-height: 180px;
  background: black;
  color: #b3b3b3;
  z-index: 1;
  font-family: "Roboto", "Helvetica Neue", "Helvetica";
  font-size: 12px;
  padding: 30px 40px;
  & a {
    text-decoration: none;
  }
  & .tags a {
    color: #b3b3b3;
  }
  & .tags a:hover {
    color: #0d6efd;
  }
  @media all and (max-width: 1024px) {
    width: 100%;
    border-radius: 0;
    margin: 100px 0 0 0;
  }
`;
const Cover = styled.div`
  display: flex;
  // flex-direction: column;
  // flex: 1;
  justify-content: space-between;
  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    color: white;
    font-size: 14px;
    font-weight: bold;
  }
  & img {
    min-height: 50px;
    max-height: 50px;
    margin: 10px 0;
  }
  @media all and (max-width: 576px) {
    // width: 100px;
    margin: 10px 0px;
  }
`;

const Wrap = styled.div`
  flex-basis: 33.33%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerWrap = styled.div`
  display: inline-block;
`;

const StyledCard = styled(Card)`
  font-size: 24px;
  width: 300px;
  height: 200px;
  align-items: center;
  border: none;
  text-align: center;
  filter: drop-shadow(0px 7px 20px rgba(57, 69, 117, 0.4));
  margin: 10px auto;
  border-radius: 40px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: red;
    filter: drop-shadow(0px 7px 20px rgba(57, 69, 117, 0.7));
  }
  & img {
    // width: 150px;
    height: 90px;
    margin-top: 30px;
    margin-bottom: 5px;
  }
  & span {
    margin: 10px;
  }
  @media all and (max-width: 320px) {
    width: 270px;
  }
`;
const MenuWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-self: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media all and (max-width: 767px) {
    display: none;
  }
`;

const Tint = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 400px;
  height: 300px;
  @media all and (max-width: 767px) {
    display: none;
  }
`;
export default Menu;
