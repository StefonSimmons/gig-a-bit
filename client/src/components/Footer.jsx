import React from 'react'
import styled from 'styled-components'
import { Divider } from './Header'

const Foot = styled.footer`
  width: 100%;
  text-align: center;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  color: rgb(28,28,28);
  padding: 25px 0; 
`
const Text = styled.h6`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 16px;
  color: rgb(28,28,28);
`
const AboutContact = styled.h6`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: rgb(28,28,28);
  cursor: pointer
`


export default function Footer({ showAboutModal, showContactModal }) {
  return (
    <div>
      <Divider />
      <Foot>
        <Bottom>
          <AboutContact onClick={showAboutModal}>About</AboutContact>
          <Text>&copy; Stefon Simmons</Text>
          <AboutContact onClick={showContactModal}>Contact Developer</AboutContact>
        </Bottom>
      </Foot>
    </div>
  )
}

