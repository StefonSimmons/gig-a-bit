import React from 'react'
import styled from 'styled-components'
import { Divider } from './Header'

const Foot = styled.footer`
  width: 100%;
  text-align: center;
  background: white;

  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  // height: 15px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  color: rgb(28,28,28);
  padding: 25px 0; 

  @media(max-width: 400px){
    flex-direction: column;
  }
`
const Text = styled.h6`
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 18px;
  letter-spacing: 3px;
  color: rgb(28,28,28);

  @media(max-width: 400px){
    margin: 8px
  }
`
const AboutContact = styled.h6`
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 5px;
  color: rgb(28,28,28);
  cursor: pointer;

  &:hover {
    color: rgb(154, 78, 80);
  }
  @media(max-width: 400px){
    margin: 5px
  }
`
export default function Footer({ showAboutModal, showContactModal }) {
  return (
    <div>
      
      <Foot>
      <Divider />
        <Bottom>
          <AboutContact onClick={showAboutModal}>About Gig-A-Bit</AboutContact>
          <Text>&copy; Stefon Simmons</Text>
          <AboutContact onClick={showContactModal}>Contact Developer</AboutContact>
        </Bottom>
      </Foot>
    </div>
  )
}

