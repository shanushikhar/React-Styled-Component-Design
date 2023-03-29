import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Mobile from "../responsive/responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-top: 10px;
  padding: 5px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 0 10px;
  ${Mobile({ flexDirection: "column" })}
`;

const TopButton = styled.button`
  padding: 10px;
  border: 2px solid black;
  font-weight: bold;
  background-color: ${(props) => props.type && "black"};
  color: ${(props) => props.type && "white"};
  font-weight: ${(props) => props.type && "600"};
  cursor: pointer;
`;

const TopTexts = styled.div`
  ${Mobile({ margin: "10px 0", textAlign: "center" })}
`;
const TopText = styled.span`
  margin-right: 10px;
  text-decoration: underline;
  font-weight: 500;
  text-decoration-thickness: 2px;
  cursor: pointer;
`;

const BottomSection = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 6;
  /* margin-right: 40px; */
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  ${Mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  display: flex;
  height: 200px;
`;

const Image = styled.img`
  width: 250px;
  object-fit: contain;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${Mobile({ fontSize: "15px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  padding: 20px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0px 5px;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-top: 10px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 2;
  border: 1px solid lightgray;
  height: 40vh;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${Mobile({ marginTop: "20px" })}
`;

const SummaryTitle = styled.h1``;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${Mobile({ marginTop: "20px" })}
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  &:hover {
    background-color: gray;
    color: white;
    font-weight: bold;
  }
  ${Mobile({ padding: "15px", marginTop: "20px", backgroundColor: "teal" })}
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TopSection>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </TopSection>
        <BottomSection>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/51UDX+yrWXS._UX625_.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> NIKE AIR JORDAN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 435435256576
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon style={{ cursor: "pointer" }} />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>$ {200 * 2}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://static.nike.com/a/images/t_default/ai3jewo0umzzmai3oeuh/air-max-2017-mens-shoes-BVqnkV.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> NIKE AIR MAX
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 14546543543543
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon style={{ cursor: "pointer" }} />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>$ {300 * 1}</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </BottomSection>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
