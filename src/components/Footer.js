import React from 'react'
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <p>
        copyright &copy;{new Date().getFullYear()} <span>Sky coding</span>
        All Rights Reserved.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
padding: 1.5rem 0;
background: var(--clr-lime);
/* text-align: center; */
margin: 0 auto; 
p{
  margin: 0 auto;
  text-transform: uppercase;
  color: var(--clr-white);
}
` 

export default Footer
