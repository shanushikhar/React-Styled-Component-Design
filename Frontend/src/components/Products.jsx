import React from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import ProductList from "./ProductList";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductList item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
