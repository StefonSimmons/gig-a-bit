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
  color: rgb(154, 78, 80)
`
const NavBar = styled.nav`
`

const NavList = styled.ul`
  display: flex;
  align-items: center;

  @media(max-width: 670px){
    display: block;
    text-align: center;
    position: absolute;
    // right: 45px;
  }
`
const Hamburger = styled.span`
  display: none;

  @media(max-width: 670px){
    display: inline-block;
    // width: 40px;
    // padding-right: 50px;
    cursor: pointer;
  }
`
const NavOptionDropDown = styled.div`
  display:flex;
  align-items: center;

  @media(max-width: 670px){
    margin-top: 15px;
    padding: 20px;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;

  @media(max-width: 670px){
    display: none;
    // width: 40px;
    // padding-right: 50px;
    // cursor: pointer;
  }
`
const NavItems = styled.li`
  padding-right: 50px;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 20px;
  cursor: pointer;

  @media(max-width: 670px){
    display: none;
    // width: 40px;
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