import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <Wrapper>
      <article className="container page">
        <section className="container-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h4>Build your business with us</h4>
              <p>
                sky coding Commerce contains all the tools you need to build a website, accept orders, track inventory, process payments, manage shipping, market your brand, and analyze your data.
              </p>
              <button className="btn">
                create your store now
              </button>
            </div>
          </article>
        </section>
      </article>
      <StaticImage src="../assets/images/projects-2.jpg" alt="portfolio" placeholder='blurred' className='img'/>
    </Wrapper>
  )
}

const Wrapper = styled.header`
height:100vh;
margin-top: -6rem;
padding: 5rem;
position: relative;
::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-white);
  }
.img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* z-index: 1; */
  width: 100%;
  object-fit: contain;
  display: block;
  grid-row: 1/1;
  grid-column: 7/-1;
  width: 100%;
}
.hero-center {
  display: grid;
  position: absolute;
  top: 50%;
  left: 0;
  display: grid;
  justify-content: center;
  z-index: 2;
}
.hero-info {
  color: var(--clr-white);
  max-width: 30em;
}
`

export default Hero