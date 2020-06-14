import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: .1vh;
  text-align: center;
  opacity: .9
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(28,28,28);
  padding: 1px 0; 
`
const Text = styled.h6`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 16px;
  color: #DAE2DF;
`

export default function Footer() {
  return (
    <div>
      <Foot>
        <Bottom>
          <Text>About</Text>
          <Text>&copy; Stefon Simmons</Text>
          <Text>Contact Developer</Text>
        </Bottom>
      </Foot>
    </div>
  )
}

