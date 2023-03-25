import React from 'react'
import {categories} from '../data'
import CategoryItem from '../components/CategoryItem'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
 
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories