import { Search } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    height : 60px;
`

const Wrapper = styledComponents.div `
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
    
`

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styledComponents.span`
  font-size:14px;
  cursor:pointer;
`
const SearchContainer = styledComponents.div`
  border: 0.5px solid light gray;
  display: flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`
const Input = styledComponents.input`  
`
const Centre = styledComponents.div`
flex: 1;
text-align:center;
`
const Logo = styledComponents.h1`
  font-weight: Bold;
`
const Right = styledComponents.div`flex: 1;`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input/>
                <Search/>
              </SearchContainer>
            </Left>
            <Centre><Logo>VENICA LADY</Logo></Centre>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar