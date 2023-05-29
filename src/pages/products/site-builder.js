import React from 'react'
import Layout from "../../components/Layout"
import styled from "styled-components"
import Nested from '../../components/Nested';
import Seo from '../../components/SEO';

const siteBuilder = ({pageContext:{title}}) => {
  
  return (
    <>
      <Seo
       title={title}
        description="Building an online storefront has never been easier. Simply drag and drop elements and sections, and add your unique creative touch with a single click."s
        />
    <Layout>
      <Wrapper>
        <header>
          <div className="hero">
            <div className="hero-center">
        <h5>Build a professionally designed store that you love</h5>
        <p>
          Building an online storefront has never been easier. Simply drag and drop elements and sections, and add your unique creative touch with a single click.
        </p>
        <button className="btn">
          sign up today
        </button>
            </div>
          </div>
        </header>
        <Nested/>
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
`;

export default siteBuilder