import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  height: 70vh;
  padding: 20px;
  background-color: #f8eff1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 15px;
`;
const Desc = styled.div`
  font-size: 26px;
  margin-bottom: 20px;
  ${Mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ width: "90%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 0 10px 0 10px;
  margin-right: 20px;
  border: 1px solid #a5868c;

  &:focus {
    outline: none;
    border-color: #be7987;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${Mobile({ flex: 1.5 })}
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products</Desc>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
