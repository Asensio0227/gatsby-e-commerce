import React from 'react'
import Layout from "../../components/Layout"
import styled from "styled-components"
import Nested from '../../components/Nested';
import Seo from '../../components/SEO';

const fashion = ({pageContext:{title}}) => {
  return (
    <>
      <Seo title={title} description="responsive ecommerce templates." />
    <Layout>
      <Wrapper>
        <header>
          <div className="hero">
            <div className="hero-center">
        <h5>Bring your business to life with
        </h5>
        <p>
          responsive ecommerce templates.
        </p>
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

export default fashion