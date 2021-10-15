import React, { useState, useRef } from "react";
import {
  Redirect,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import {
  MenuPage,
  MenuCard,
  Image,
  Salvin,
  Grid,
  BackCards as BackBtn,
} from "./MenuCards";
import salvin from "../../assets/images/salvin logo.svg";
import grid from "../../assets/images/grid.svg";
import back from "../../assets/images/back.png";
import location from "../../assets/images/location.svg";
import call from "../../assets/images/call.svg";
import mail from "../../assets/images/mail.svg";
import "./menu.css";
import styled from "styled-components";
import axios from "axios";
import cogoToast from "cogo-toast";

const Service = () => {
  const [redirect, setRedirect] = useState(false);
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const goBack = () => {
    console.log("back");
    setRedirect(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    let valid = true;
    let values = {
      full_name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    };
    if (
      values.full_name.trim() == "" ||
      values.email.trim() == "" ||
      values.message.trim() == ""
    ) {
      valid = false;
      cogoToast.error("Please fill all the required fields");
    }
    if (valid) {
      let data = {
        full_name: name.current.value,
        email: email.current.value,
        message: message.current.value,
        source: "SALVIN/PPRKF",
      };
      data = {
        full_name: "Avni",
        email: "avani1agrawal@gmail.com",
        message: "check",
        source: "SALVIN/PPRKF",
      };
      axios
        .post(
          "https://gt97kzfln6.execute-api.ap-south-1.amazonaws.com/stage",
          data
        )
        .then((res) => {
          console.log(res);
          cogoToast.success("Your message has been successfully.");
          name.current.value = "";
          email.current.value = "";
          message.current.value = "";
        })
        .catch((err) => console.log(err));
    }
  };
  let { path, url } = useRouteMatch();
  if (redirect) {
    return <Redirect to="/menu" />;
  }

  return (
    <>
      <MenuPage className="transition">
        <Grid src={grid} alt="dsf" />
        <MenuCard>
          <Logo>
            <img src={salvin} alt="" />
          </Logo>
          <Wrap>
            <Back onClick={goBack} className="back-button">
              <img src={back} alt="" />
            </Back>
            <Abouts>
              <About>
                <img src={location} alt="" />
                <h4>Address</h4>
                <div>
                  75 (New 108), 2nd Floor, I Temple Road, 13th Cross,
                  Malleshwaram,
                </div>
              </About>
              <About>
                <img src={call} alt="" />
                <h4>Phone</h4>
                <div>9341289892</div>
                <div>080-23341756</div>
              </About>
              <About>
                <img src={mail} alt="" />
                <h4>Email</h4>
                <div>salvin@salvininstruments.com</div>
              </About>
            </Abouts>
            <Cutter />
            <Contacts>
              <h3>Send us a message</h3>
              <form action="POST" onSubmit={onSubmitHandler}>
                <input ref={name} type="text" placeholder="Enter your name" />
                <input
                  ref={email}
                  type="email"
                  placeholder="Enter your email"
                  name=""
                  id=""
                />
                <textarea
                  ref={message}
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="Enter your message"
                />
                <input id="submit" type="submit" value="Send Now" />
              </form>
            </Contacts>
          </Wrap>
        </MenuCard>
      </MenuPage>
    </>
  );
};

export default Service;

const Back = styled(BackBtn)`
  margin: 0;

  @media all and (max-width: 900px) {
    position: static;
    margin: 20px 0;
  }
`;
const Logo = styled.div`
  & img {
    height: 40px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  padding: 0 30px;
  flex: 1 1 auto;
  margin: 20px 0;
  justify-content: center;

  @media all and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  @media all and (min-height: 900px) {
    align-items: center;
  }
`;

const Cutter = styled.div`
  height: 80%;
  width: 5px;
  background: rgba(70, 27, 27, 0.1);
`;
const Abouts = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  @media all and (max-width: 1024px) {
    padding: 0 30px;
  }
  @media all and (max-width: 900px) {
    margin-top: 30px;
    width: 90%;
    padding: 0;
  }
`;

const About = styled.div`
  flex-basis: 33.33%;
  flex: 2;
  & img {
    width: 20px;
  }
  & h2 {
  }
  & div {
    color: #b3b3b3;
  }
  text-align: center;
  margin: 10px 20px;
`;
const Contacts = styled.div`
  margin: 0 20px;
  padding: 0 10px;
  width: 60%;
  & form {
    display: flex;
    flex-direction: column;
    & input {
      outline: none;
      background: rgba(70, 27, 27, 0.1);
      border: none;
      height: 50px;
      margin: 7px 0;
      padding: 0 10px;
      border-radius: 10px;
    }
    & #message {
      outline: none;
      background: rgba(70, 27, 27, 0.1);
      border: none;
      height: 100px;
      margin: 7px 0;
      padding: 0 10px;
      border-radius: 10px;
    }
    & input#submit {
      background: rgb(70, 27, 27);
      width: 150px;
      display: inline-block;
      color: white;
    }
  }
  @media all and (max-width: 900px) {
    width: 90%;
    & input#submit {
      align-self: center;
    }
  }
`;
