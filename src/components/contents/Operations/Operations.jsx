import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  // margin-left: 6.2vw;
  width: 85%;
  height: 85%;
  border-radius: 50px;
  filter: drop-shadow(0px 7px 20px rgba(57, 69, 117, 0.4));
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 567px) {
    & img {
      width: 80%;
    }
    .circle {
      width: 20px;
      height: 20px;
    }
    .circle.active {
      width: 40px;
      height: 40px;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;
export const Circles = styled.div`
  margin: 20px;
  padding: 0px 20px;
  width: 60%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Next = styled.div`
  width: 25vh;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  font-size: 24px;
  background: black;
  cursor: pointer;
`;
export const BackBtn = styled.button`
  position: fixed;
  bottom: 10%;
  left: 3%;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  // align-items: center;
  background: black;

  & img {
    height: 16px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-self: center;
  }

  @media all and (max-width: 767px) {
    left: 3%;
  }
`;
export const BackBtnCard = styled.button`
  position: fixed;
  bottom: 13%;
  left: 13%;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 15px;
  display: flex;
  // align-items: center;
  background: black;

  & img {
    height: 16px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-self: center;
  }

  @media all and (max-width: 767px) {
    bottom: 10%;
    left: 3%;
  }
`;
export const ImageWrap = styled.div`
  width: 80%;
  max-width: 600px;
  height: auto;
  & img {
    max-height: 500px;
  }
  margin: 30px 0;
  position: relative;
  @media all and (max-width: 768px) {
    width: 100%;
    margin: 30px;
  }
`;
export const Image = styled.img`
  position: relative;
  top: 3%;
  left: 5%;
  display: flex;
  height: 40px;
  align-self: flex-start;
`;

export const SCADA = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Img = styled.img`
  width: 100%;
`;

export const Text = styled.div`
  margin: 20px;
  font-family: "Roboto", "serif";
  font-size: 35px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  max-width: 800px;

  text-align: center;
  & img {
    height: 1.5em;
  }
  @media all and (max-width: 768px) {
    font-size: 30px;
    flex-basis: 30%;
  }
  @media all and (max-width: 567px) {
    font-size: 20px;
  }
`;
