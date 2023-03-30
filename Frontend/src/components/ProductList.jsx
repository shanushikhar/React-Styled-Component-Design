import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  /* background-color: rgba(0,0,0,0.1);  */
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0;
  transition: all 1s ease;
`;

const Container = styled.div`
  flex: 1;
  height: 50vh;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  margin: 3px;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 70%;
  z-index: 2;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #aa5050;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #db4c4c;
    transform: scale(1.1);
  }
`;

const ProductList = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductList;
