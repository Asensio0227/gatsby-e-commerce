import React from 'react';
import { Link } from 'gatsby';
import subLinks from '../assets/links';
import { useState } from "react";
import styled from "styled-components"

function NavLinks({ pageLink }) {
  const [links, setLinks] = useState(subLinks);
  return (
    <Wrapper>
      <button>
        {pageLink}
      </button>
      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link
          if (link.page === pageLink) {
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            )
          }
        })}
        <div className="caret"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.li`
position: relative;
padding: 1rem 0;
button {
  color: var(--clr-lime);
  background: transparent;
  border: transparent;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 500;
  padding: 10px 20px;
  width: 100%;
  text-transform: capitalize;
  position: relative;
}
.links {
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  padding: 2rem;
  background: var(--clr-white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  grid-gap: 1rem 4rem;
  a {
    display:grid;
    grid-template-columns: auto 1fr;
    gap: .5rm;
    grid-gap:.5rem;
    align-items: center;
    color: var(--clr-secondary-4);
    text-transform: capitalize;
    font-weight: 700;
    .icon {
      color: var(--clr-gray-200);
      
    }
    &:hover {
      color: var(--clr-lime);
      .icon{
        color: var(--clr-gray-50);
      }
    }
  }
}
&:hover .links {
visibility: visible;
}
.caret {
  display: block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--clr-white);
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}
`

export default NavLinks