import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  letter-spacing: 5px;
  color: rgb(154, 78, 80)
`
const NavBar = styled.nav`
`

const NavList = styled.ul`
  display: flex;
  align-items: center;

  @media(max-width: 700px){
    display: block;
    text-align: center;
    position: absolute;
  }
`
const Hamburger = styled.span`
  display: none;

  @media(max-width: 700px){
    display: inline-block;

    cursor: pointer;
  }
`
const NavOptionDropDown = styled.div`
  display:flex;
  align-items: center;

  @media(max-width: 700px){
    margin-top: 15px;
    padding: 20px;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;

  @media(max-width: 700px){
    display: none;
  }
`
const NavItems = styled.li`
  padding: 0px 50px;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: rgb(154, 78, 80);
  }
  @media(max-width: 700px){
    display: none;
    padding: 25px 0px;
    cursor: pointer;
  }
`
export const Divider = styled.hr`
  height: 2px;
  background: grey;
  margin: 0px
`

export default class Header extends Component {

  state = {
    openMenu: false
  }

  toggleOpenMenu = () => {
    this.setState(prevState => ({ openMenu: !prevState.openMenu }))
  }

  render() {
    const { showLogInForm, showCreateProfileForm, loggedInUser, logout } = this.props
    const { openMenu } = this.state

    return (
      <>
        <HeaderSection>
          <Title>Gig-A-Bit</Title>
          <NavBar>

            <NavList style={openMenu ? {right: "0px"} : {right: "45px"}}>
              <Hamburger onClick={this.toggleOpenMenu}>
                {openMenu ? 
                  <i className="material-icons w3-xxlarge">menu</i>
                :
                  <i className="material-icons w3-xxlarge">menu_open</i>
                }
                
              </Hamburger>
              <NavOptionDropDown style={openMenu ? { display: "block", backgroundColor: "rgb(216,224,233)", height: "100rem"} : { display: "" }}>
                <NavLink to="/" style={openMenu ? { display: "block" } : { display: "" }}>
                  <NavItems style={openMenu ? { display: "block" } : { display: "" }}>
                    <i className="material-icons w3-xxlarge">home</i>
                  </NavItems>
                </NavLink>
                {
                  loggedInUser
                    ?
                    <>
                      <NavLink to='/my_profile' style={openMenu ? { display: "block" } : { display: "" }}>
                        <NavItems style={openMenu ? { display: "block" } : { display: "" }}>
                          My Profile
                        </NavItems>
                      </NavLink>
                    </>
                    :
                    <NavItems onClick={showCreateProfileForm} style={openMenu ? { display: "block" } : { display: "" }}>
                      Create A Profile
                    </NavItems>
                }
                {
                  loggedInUser
                    ?
                    <>
                    <NavItems onClick={logout} style={openMenu ? { display: "block" } : { display: "" }}>
                        Log Out
                    </NavItems>

                    </>
                    :
                    <NavItems onClick={showLogInForm} style={openMenu ? { display: "block" } : { display: "" }}>
                      Log In
                    </NavItems>
                }
              </NavOptionDropDown>
            </NavList>
          </NavBar>
        </HeaderSection>
        <Divider />
      </>
    )
  }
}