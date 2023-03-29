import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Mobile from "../responsive/responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${Mobile({
    flexDirection: "column",
    padding: "10px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${Mobile({
    padding: 0,
  })}
`;
const Title = styled.h1`
  font-weight: 700;
  ${Mobile({
    margin: "5px 0",
  })}
`;
const Desc = styled.p`
  margin: 20px 0;
  ${Mobile({
    margin: "10px 0",
  })}
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 10px 0;
  ${Mobile({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
  cursor: pointer;
  border: 2px solid teal;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 30px;
  ${Mobile({
    width: "100%",
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 10px;
`;
const Button = styled.button`
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid teal;
  transition: all 1.5s ease;
  &:hover {
    background-color: #76acac;
    color: #fff;
    transform: scale(1.1);
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jeans</Title>
          <Desc>
            We do not recommend using this approach in production. It requires
            the client to download the entire library—regardless of which
            components. Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
