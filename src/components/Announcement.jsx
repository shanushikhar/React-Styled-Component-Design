import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 40px;
color: white;
background-color: teal;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
`

const Announcement = () => {

  return (
    <Container>
        Super Deal! Free Shipping on order above 40$
    </Container>
  )
}

export default Announcement