import React from 'react'
import Layout from "../../components/Layout"
import styled from "styled-components"
import Nested from '../../components/Nested';
import Seo from '../../components/SEO';

const visual = ({pageContext:{title}}) => {
  return (
    <>
      <Seo
        title={title}
        description="Change every single aspect of your storefront, from header styles to banner layouts to cart icons and more, using our powerful Visual Editor." />
  <Layout>
      <Wrapper>
        <header>
          <div className="hero">
            <div className="hero-center">
              <h5>
                Take complete control
of your website's look and feel
              </h5>
              <p>
                Change every single aspect of your storefront, from header styles to banner layouts to cart icons and more, using our powerful Visual Editor.
              </p>
              <button className="btn">
                singup today
              </button>
            </div>
          </div>
        </header>
        <Nested/>
      </Wrapper>
    </Layout>
    </>
  )
}

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

export default visual