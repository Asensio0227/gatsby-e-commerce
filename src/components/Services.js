import React from 'react'
import services from "../assets/services"
import styled from "styled-components"

const Services = () => {
  return (
    <Wrapper>
      <section className="services-center">
        <article className="title">
          <h2>Set up your own online store in just a few steps</h2>
          <div className="title-underline"></div>
        </article>
        <article className="services">

      {services.map((service) => {
        const {text,icon,label,id}=service
        return (
          <div className="service" key={id}>
            {icon}
            <h4>{label}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </div>
        )
      })}
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: grid;
gap: 2rem;
padding-top: 2rem;
background: var(--grey-200);
.services-center{
  width: 90vw;
  margin: 0 auto;
}
.service{
  padding: 1.5rem 2rem;
  background: var(--clr-white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  text-align: center;
  margin-bottom:2rem ;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.underline {
  width: 3rem;
  height: .12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service p {
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.service:hover {
  background: var(--clr-secondary-8);
  color: var(--clr-white);
}
@media screen and (min-width: 676px) {
  .services {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
    -moz-column-gap: 2rem;
    -webkit-column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services {
    grid-template-columns: repeat(3,1fr);
  }
}

`

export default Services