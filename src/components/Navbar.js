import React from 'react'
import links from '../assets/links';
import { Link } from "gatsby";
import { FaShoppingBag } from 'react-icons/fa';
import styled from "styled-components"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const tempLinks = [...new Set(links.map((link) => link.page))];
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-headers">
          <Link to="/">
            <FaShoppingBag className="logo"/>
          </Link>
        </div>
        <ul className="nav-links">
          {tempLinks.map((pageLink, index) => {
            return <NavLinks key={index} pageLink={pageLink}/> 
          })}
        </ul> 
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
position: relative;
background: transparent;
height: 5rem;
box-shadow: var(--shadow-1);
z-index: 9999;
align-items: center;
.nav-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content:space-between;
}
  .logo {
    color: var(--clr-lime);
    font-size: 2.5rem;
    margin-top: 1rem;
  }
.toggle-btn {
  width: 3.5rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 2rem;
  border: transparent;
  background: var(--clr-primary-500);
  color: var(--clr-white);
  cursor: pointer;
  transition: var(--transition);
  &:hover{
    background: var(--clr-primary-300);
  }
}
.nav-links {
  display: none;
}
@media screen and (min-width:800px){
  .nav-center{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 2rem;
    grid-gap: 0 4rem;
  } 
  .nav-links {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    max-width: 800px;
  }
  li {
    padding: 1rem 0;
    position: relative;
  }
  button {
   color: var(--clr-lime);
  background: transparent;
    border: transparent;
    font-size:1rem;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
  }
}
`


export default Navbar
