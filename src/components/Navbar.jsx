import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    height : 60px;
`

const Wrapper = styledComponents.div `
    padding: 10px 20px;
    display:flex;
    justify-content: space-between
    
`

const Left = styledComponents.div`

`
const Centre = styledComponents.div``
const Right = styledComponents.div``



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Left</Left>
            <Centre>Centre</Centre>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar