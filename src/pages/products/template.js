import React from 'react'
import Layout from "../../components/Layout"
import styled from "styled-components"
import carrier from '../../assets/carrier';
import Seo from '../../components/SEO';

const template = ({pageContext:{title}}) => {
  return (
    <>
<Seo title={title} description="Easy integrations are essential to running an ecommerce store with efficiency. Here is a list of all our integrations that can help run your business smoothly."/>
    <Layout>
      <Wrapper className="container page">
        <header>
          <div className="hero">
            <div className="hero-center">
            <h2>Integrations
            </h2>
            <p>
              Easy integrations are essential to running an ecommerce store with efficiency. Here is a list of all our integrations that can help run your business smoothly.
            </p>
            <button className="btn">
              signup for free
            </button>
            </div>
          </div>
        </header>
        <article className="container-center">
          <h4>shipping center</h4>
          <div className="section">
            {carrier.map((item, index) => {
              const { via, icon, origin, title } = item;
              return (
                <div className="section-center" key={index}>
                  <span className='via'>{via}</span>
                  <span className='icon'>{icon}</span>
                  <div className='info'>
                    <hr />
                    <h5 className='section-title'>{title}</h5>
                    <p className='origin'>{origin}</p>
                  </div>
            </div>
              )
            })}
          </div>
        </article>
      </Wrapper>
    </Layout>
    </>
  )
};

const Wrapper = styled.section`
header {
  height: 69vh;
  position: relative;
}
.hero-center {
  text-align: center;
  margin: 0 auto;
  display: grid;
  place-items: center;
}
  p {
    max-width: 30em;
  }
  .btn {
    background: var(--clr-lime);
    padding: .75rem 1rem;
    &:hover {
      background: transparent;
      border: 2px solid var(--clr-lime);
      color: var(--clr-lime);
    }
  }
  .section{
    display: grid;
    width: 80vw;
    gap: 1.25rem;
    max-width: var(--max-width);
    text-align: center;
    margin: 2rem 0;
  }
  .section-center {
    background:  var(--clr-white);
    padding: 2rem 1.5rem;
    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
    text-align: center;
    display: grid;
    position: relative;
    border-radius: 1rem;
    &hover {
      box-shadow: var(--shadow-4);
    }
  }
  .via {
    position: absolute;
    top: 0;
    right: 0;
    background: hsl(205, 86%, 73%);
    padding: .25rem .5rem;
    font-size: var(--extraSmallText);
    border-top-right-radius: 1rem;
  }
  .icon {
    font-size: 4rem;
    color: var(--clr-lime);
  }
  .info {
    text-align: left;
    font-size: var(--extraSmallText);
    .section-title {
      margin: .2rem;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 676px) {
    .section {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    -moz-column-gap: 2rem;
    -webkit-column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .section {
      grid-template-columns: repeat(3,1fr)
    }
  }
`;

export default template