import React from 'react'
import styled from 'styled-components'

const HeaderSection = styled.header`
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
  font-size: 20px;
  cursor: pointer
`
export const Divider = styled.hr`
  height: 2px;
  background: grey;
  margin: 0px
`

export default function Header({ showLogInForm, showCreateProfileForm, loggedInUser, logout }) {

  return (
    <>
      <HeaderSection>
        <Title>Gig-A-Bit</Title>
        <NavBar>
          <NavList>

            <NavItems>
              <i className="material-icons w3-xxlarge">home</i>
            </NavItems>
{console.log(loggedInUser)}
            {
              loggedInUser
              ?
              <>
              <NavItems>
                My Profile
              </NavItems>

              </>
              :
              <NavItems onClick={showCreateProfileForm}>
                Create A Profile
              </NavItems>
            }
            {
              loggedInUser
              ?
              <>
              <NavItems onClick={logout}>
                Log Out
              </NavItems>

              </>
              :
              <NavItems onClick={showLogInForm}>
                Log In
              </NavItems>
            }



          </NavList>
        </NavBar>
      </HeaderSection>
      <Divider />
    </>
  )
}
