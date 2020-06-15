
import React from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  margin: 15px auto;
  width: 450px;
  height: 400px;
  border: rgb(216,224,233) solid 2px;
  font-family: 'Pathway Gothic One', sans-serif; 
  text-align: center;
  background-color: rgb(245,247,249);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  max-width: 600px
`
export const Title = styled.h3`
  margin-top: 5px;
  font-size: 28px;
  font-family: 'Pathway Gothic One', sans-serif;  
  color: rgb(61,77,92);
`
export const AppLogo = styled.h4`
  font-size: 18px;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-weight: 700;
  font-style: italic;
  color: rgb(154, 78, 80)
`
export const Circle = styled.div`
  border-radius: 50%;
  background-color: rgb(216,224,233);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
`
const Statement = styled.ul`
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 18px;
  line-height: 3;
  letter-spacing: 2px
`
const Strong = styled.span`
  font-weight: 900
`
export default function ContactModal({ contactClicked, hideContactModal }) {
  return (
    <>
      <div className="w3-modal" style={contactClicked ? { display: "block" } : { display: "none" }}>
      <Contact className="w3-modal-content w3-card-4 w3-animate-zoom">
        <span className="w3-button w3-xlarge w3-hover-red w3-display-topright" onClick={hideContactModal}>&times;</span>
        <Wrapper>
          <Title>.Contact.</Title>
          <Circle>
            <AppLogo>Gig-A-Bit</AppLogo>
          </Circle>
          <Statement>
            <li><Strong>Email:</Strong> <a href='mailto:stefonsimmons1@gmail.com' target='_blank' rel="noopener noreferrer">stefonsimmons1@gmail.com</a></li>
            <li><Strong>LinkedIn:</Strong> <a href='https://linkedin.com/in/stefonsimmons' target='_blank' rel="noopener noreferrer">linkedin.com/in/stefonsimmons</a></li>
          </Statement>
        </Wrapper>
      </Contact>
      </div>
    </>
  )
}
