import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  height: 60px;
  ${Mobile({ height: "40px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px; //top-bottom left-right
  display: flex; // default it is Row wise
  justify-content: space-between;
  align-items: center;
  ${Mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1; // it will make sure the Left content should not come Across/Under Center
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${Mobile({ marginLeft: "13px" })}
`;

const Input = styled.input`
  border: none;
  ${Mobile({ width: "80px" })}
`;

const Center = styled.div`
  /* flex: 2; // it will take more space and so on */
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${Mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${Mobile({ flex: 2, justifyContent: "flex-start" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${Mobile({ fontWeight: "600", fontSize: "13px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BANG.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
