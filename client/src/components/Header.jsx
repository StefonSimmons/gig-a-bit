import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 45px
`

const Title = styled.h1`
  font-size: 32px;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-weight: 700;
  font-style: italic;
  color: rgb(154, 78, 80)
`
const NavBar = styled.nav`
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
`
const NavItems = styled.li`
  padding-right: 50px;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 20px
`
const Divider = styled.hr`
  height: 2px;
  background: grey;
  margin: 0px
`

export default function Header() {
  return (
    <>
      <Head>
        <Title>Gig-A-Bit</Title>
        <NavBar>
          <NavList>
            <NavItems><i class="material-icons w3-xxlarge">home</i></NavItems>
            <NavItems>Create A Profile</NavItems>
            <NavItems>Log In</NavItems>
          </NavList>
        </NavBar>
      </Head>
      <Divider/>
    </>
  )
}
