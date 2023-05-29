import React, { useEffect, useState } from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import styled from "styled-components"
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from "react-icons/fa";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const query = graphql`
  query {
    allContentfulReviews {
      nodes {
        id
        name
        job
        img {
          gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 150, height: 150)
        }
        text {
          text
        }
      }
      totalCount
    }
  }
`

const Reviews = () => {
  const { allContentfulReviews: { nodes: data } } = useStaticQuery(query);
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);
  
  const nextSlide = () => { 
    setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > reviews.length - 1) {
          index = 0;
        }
        return index;
      })
  }
  
  const prevSlide = () => {
    setIndex((oldIndex) => {
        let index = oldIndex - 1;
        if (index < 0) {
          index = reviews.length - 1;
        }
        return index;
      })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > reviews.length - 1) {
          index = 0;
        }
        return index;
      })
    }, 10000);
    return () => {
      clearInterval(slider);
    }
  },[index])
  return (
    <Wrapper>
      <div className="title">
        <h2>our members</h2>
        <div className="title-underline"></div>
      </div>
      <section className="container-center reviews">
        {
          reviews.map((review, reviewIndex) => {
            const { img, text:{text:desc}, job, name } = review
            const pathToImage = getImage(img)
            let position = 'nextSlide';
            if (reviewIndex === index) {
              position='activeSlide';
            }
            if (reviewIndex === index - 1 || (index === 0 && reviewIndex.length - 1)) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={reviewIndex}>
                  <GatsbyImage image={pathToImage} className="review-img" alt={name}></GatsbyImage>
                <h4 className="review-title">{name}</h4>
                <p className="review-job">{job}</p>
                <p className="review-desc">{desc}</p>
                  <FaQuoteRight className="quote-icon"/>
              </article>
            )
          })
       }
        <button className="btn prev-btn" onClick={prevSlide}>
          <FaChevronCircleLeft />
        </button>
        <button className="btn next-btn" onClick={nextSlide}>
          <FaChevronCircleRight />
        </button>
      </section>
    </Wrapper>
  )
};

const Wrapper = styled.section`
background: var(--grey-200);

.reviews {
  margin-top: 4rem;
  width: 80vw;
  height: 600px;
  max-width: var(--fixed-width);
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
}
article {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: var(--transition);
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide{
  transform: translateX(100%);
}
.review-img{
  border-radius: 50%;
  display: inline-block !important;
}
.quote-icon {
  font-size: 3rem;
  color: var(--clr-secondary-2);
  margin-top: 1.5rem;
}
.info {
  transform: translateX(-100%);
}
.review-title{
  text-transform: uppercase;
  margin-bottom: .25rem;
}
.review-job {
  color: var(--clr-dodge);
  margin-bottom: .75rem;
  text-transform: capitalize;
}
.review-desc {
  max-width: 40em;
  text-align: center;
  line-height: 2;
}
.prev-btn,
.next-btn{
  position: absolute;
  top: 200px;
  display: grid;
  width: 1.25rem;
  height: 1.25rem;
  color: var(--clr-lime);
  transition: var(--transition);
  background: transparent;
  &:hover {
    background: transparent;
    opacity:.6;
  }
}
.prev-btn {
  left: 0;
}
.next-btn {
  right: 0;
}
@media screen {
  .prev-btn,
  .next-btn {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
`;

export default Reviews