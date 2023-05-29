import { Link } from 'gatsby'
import React from 'react'
import styled from "styled-components" 
import Layout from '../components/Layout'
import Seo from "../components/SEO";

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />
    <Layout>
    <Wrapper className="page container">
      <div className="container-center error-page">
          <h1>404</h1>
          <h3>oopsi it's a dead end</h3>
        <p>page you're looking for is not found</p>
        <hr />
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
    </Layout>
</>
  )
}

const Wrapper = styled.section`
text-align: center;
.error-page {
  color: var(--clr-primary-300);
}
h1 {
  font-size: 7rem;
}
p {
  margin: 0 auto;
  padding-bottom: 1.5rem;
}
hr {
  margin: 1rem;
}
`

export default Error