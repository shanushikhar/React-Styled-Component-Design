import React from "react";
import { categories } from "../data";
import CategoryItem from "../components/CategoryItem";
import styled from "styled-components";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${Mobile({
    flexDirection: "column",
    padding: "0px",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
