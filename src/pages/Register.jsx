import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(255,255,255,0.6)), url("https://msingermany.co.in/wp-content/uploads/2019/12/%E2%80%94Pngtree%E2%80%94flat-wind-men-s-business_4575829-400x400.png") center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    /* padding: 80px; */
    width: 50%;
 
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 5px 0;
    margin-right: 7px;
    padding: 9px;
    outline: none;

    &:focus{
        border: 2px solid teal;
    }
`

const Agreement = styled.span`
    margin: 10px 0px;
    font-weight: 600;
    font-size: 12px;
`
const Button = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    background: teal;
    &:hover{
        color: #fff;
        background-color: #548585;
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By Creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register