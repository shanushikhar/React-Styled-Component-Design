import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Modal1 from '../Images/modal1.jpg'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    /* background-color: coral; */
    position: relative;
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #f5a1cb8d;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.position === 'left' && "10px"};
    right: ${props => props.position === 'right' && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
   height: 100%;
`

const Slide = styled.div`
   display: flex;
   align-items: center;
   width: 100vw;
   height: 100vh;
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    /* background-color: #ff7300; */
`
const Image = styled.img`
    height:90%;
    width: 100%;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 10px;
  
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow position='left'>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper>
            <Slide>
              <ImgContainer>
                <Image src={Modal1} />
              </ImgContainer>
              <InfoContainer>
                 <Title>SPRING SALE</Title>
                 <Desc>DON'T COMPARE TO STYLE! GET FLAT 50% FOR ALL COLLECTION.</Desc>
                 <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow position='right'>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider