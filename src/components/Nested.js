import { useStaticQuery,graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from "styled-components"
import SEO from './SEO'

 const query = graphql`
  query {
    allContentfulModernVisual {
      nodes {
        desc {
          desc
        }
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400,height: 200)
        }
      }
    }
  }
`

const Nested = () => {
  const { allContentfulModernVisual: { nodes: data } } = useStaticQuery(query);
  return (
    <>
    <Wrapper>
      <article className="presets">
        {
          data.map((item) => {
            const {desc,id,image,title}=item
            const description = desc.desc
            const pathToImage=getImage(image)
            return (
              <div className="presets-center" key={id}>
                <GatsbyImage image={pathToImage} alt={title} className="presets-img" />
                <div className="preset">
                  <h2 className="preset-title">{title}</h2>
                  <p className="preset-desc">{description}</p>
                </div>
              </div>
            )
          })
        }
      </article>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.presets{
width: 80vw;
max-width: var(--max-width);
margin: 0 auto;
display: grid;
margin-bottom: 4rem;
}
.presets-center {
  display: grid;
  margin-bottom: 2rem;
}
.presets-img {
  height: 12rem;
  object-fit: contain;
  border-radius: 1rem;
  width: 100%;
  margin-right: 2rem;
  box-shadow: var(--shadow-3);
}
.preset{
  z-index: 1;
}
.preset-desc {
  color: var(--clr-secondary-6);
}
@media screen and (min-width: 576px) {
  .presets-img {
    height: 15rem;
  }
}
@media screen and (min-width: 768px) {
  .presets-img {
    height: 17rem;
  }
}

@media screen and (min-width: 992px) {
  .presets-img {
    grid-column: 1 / span 8;
    grid-row: 1 / 1;
  }
  .preset {
    grid-column: 5 / 12;
    grid-row: 1 /1;
  }
  .presets-center:nth-of-type(even) .presets-img {
    /* grid-column: 5 / -1; */
    grid-row: 1 / 1;
  }
  .presets-center:nth-of-type(even) .preset {
    grid-column: 5 / span 7;
    grid-row: 1 / 1;
    text-align: left;
  }
}
`;

export default Nested