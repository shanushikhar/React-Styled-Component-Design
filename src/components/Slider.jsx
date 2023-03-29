import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Data } from "../data";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  /* background-color: #bee4e2a; */
  position: relative;
  overflow: hidden;
  z-index: 2;
  ${Mobile({ display: "none" })}
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f5a1cb8d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === "left" && "10px"};
  right: ${(props) => props.position === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slide * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 90%;
  width: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: "red";
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  background-color: transparent;
`;

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const handleClick = (position) => {
    if (position === "left") {
      setSlider(slider > 0 ? slider - 1 : Data.length - 1);
    } else {
      setSlider(slider < Data.length - 1 ? slider + 1 : 0);
    }
  };

  /* console.log({slider}) */

  return (
    <Container>
      <Arrow position="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slide={slider}>
        {Data.map((slide) => (
          <Slide key={slide.id} bg={slide.bg}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow position="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
