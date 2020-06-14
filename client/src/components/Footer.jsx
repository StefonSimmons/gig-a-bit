import React from 'react'
import styled from 'styled-components'
import {Divider} from './Header'

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


export default function Footer({showAboutModal}) {
  return (
    <div>
      <Divider/>
      <Foot>
        <Bottom>
          <Text onClick={showAboutModal}>About</Text>
          <Text>&copy; Stefon Simmons</Text>
          <Text>Contact Developer</Text>
        </Bottom>
      </Foot>
    </div>
  )
}

