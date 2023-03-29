import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import styled from "styled-components";
import { MailOutline, Phone, Room } from "@mui/icons-material";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({ flexDirection: "column", width: "90%" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 2rem;
  ${Mobile({ textAlign: "center" })}
`;
const Desc = styled.p`
  margin: 20px 0;
  font-weight: bold;
  line-height: 1.2;
  ${Mobile({ textAlign: "center" })}
`;
const SocialContainer = styled.div`
  display: flex;
  ${Mobile({ alignItem: "center", justifyContent: "space-around" })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #${(props) => props.bgColor};
    transform: scale(1.1);
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 20px;
  ${Mobile({ textAlign: "center" })}
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 15px 0;
  font-weight: 600;
`;

const Payment = styled.img`
  width: 50%;
  ${Mobile({ width: "80%" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BANG.</Logo>
        <Desc>
          We do not recommend using this approach in production. It requires the
          client to download the entire library—regardless of which components
          are actually used—which negatively impacts performance and bandwidth
          utilization.
        </Desc>
        <SocialContainer>
          <SocialIcon bgColor="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bgColor="ff0000">
            <YouTubeIcon />
          </SocialIcon>
          <SocialIcon bgColor="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bgColor="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bgColor="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracing</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Shanti Tola, Bedhana, Barh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 80 321338
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> Contact@bang.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
