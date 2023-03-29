import styled from "styled-components";
import Mobile from "../responsive/responsive";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.6)),
    url("https://msingermany.co.in/wp-content/uploads/2019/12/%E2%80%94Pngtree%E2%80%94flat-wind-men-s-business_4575829-400x400.png")
      center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 23%;
  ${Mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  /* min-width: 30%; */
  margin: 5px 0;
  margin-right: 7px;
  padding: 9px;
  outline: none;

  &:focus {
    border: 2px solid teal;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 30%;
  cursor: pointer;
  font-weight: bold;
  border: none;
  background: teal;
  &:hover {
    color: #fff;
    background-color: #548585;
  }
  margin: 8px 0;
  ${Mobile({ alignSelf: "center", width: "50%" })}
`;
const LinkContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Link = styled.a`
  color: black;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #fff;
    background-color: #548585;
  }

  ${Mobile({ fontSize: "15px" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <LinkContainer>
            <Link>Do not remember the password?</Link>
            <Link>Create an account</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
