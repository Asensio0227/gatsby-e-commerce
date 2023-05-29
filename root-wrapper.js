import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* 
==========
VARIABLES
==========
*/
:root {
  /* secondary color */
  --clr-secondary-1: hsl(181, 100%,19%);
  --clr-secondary-2: hsl(184, 91%,21%);
  --clr-secondary-4: hsl(183, 85%,23%);
  /* light secondary color */
  --clr-secondary-5: #28cab2;
  --clr-secondary-6: hsl(184, 80%,66%);
  --clr-secondary-7: hsl(181, 79%,71%);
  --clr-secondary-8: hsl(181, 60%,65%);
  --clr-secondary-9: hsl(181, 65%,70%);
  --clr-secondary-10: hsl(181, 75%,80%);
  /* dark primary color*/
  --clr-primary-0: #f0efff;
  --clr-primary-50: #d8d6ff;
  --clr-primary-100: #c1beff;
  --clr-primary-200: #817dcf;
  --clr-primary-300: #938dff;
  --clr-primary-400: #7b74ff;
  /* main */
  --clr-primary-500: #645cff;
  --clr-primary-600: #554ed9;
  --clr-primary-700: #4640b3;
  --clr-primary-800: #4640b3;
  --clr-primary-900: #37338c;
  --clr-primary-100: #191740;
  --clr-primary-1100: #0a0919;
  /* grey color */
  --grey-0: #fafbfc;
  --grey-50: #f2f4f8;
  --grey-100: #eaedf3;
  --grey-200: #e2e7ef;
  --grey-300: #dbe0ea;
  --grey-400: #d3dae6;
  --grey-500: #cbd3e1;
  --grey-600: #adb3bf;
  --grey-700: #8e949e;
  --grey-800: #70747c;
  --grey-900: #51545a;
  --grey-1000: #333538;
  --grey-1100: #141516;
  /* other color*/
  --clr-black: #222;
  --clr-white:#fff;
  --clr-red-dark:#842029;
  --clr-red-light: #f8d7da;
  --clr-green-dark: #0f551342;
  --clr-green-light: #d1e7dd;
  --clr-pink:#f28cab;
  --clr-lime:#f65d5c;
  --clr-dodge:#4eacdc;
  /* shadow */
  --shadow-1: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  --shadow-2: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-3: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2p rgba(0,0,0,0.05);
  --shadow-4: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  /* typography */
  --defaultFontSize:87.5%;
   --headingFont: "Inconsolata", monospace;
  --bodyFont: "Montserrat", sans-serif;
  --smallText:.8em;
  --extraSmallText:.7em;
  /* rest */
  --backgroundColor:var(var(--grey-50));
  --textColor: hsl(210, 22%, 49%);
  --borderRadius:.25rem;
  --letterSpacing:1px;
  --transition:.3s ease-in-out all;
  --max-width:1120px;
  --fixed-width:600px;
}

*,
::after,
::before{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{
  font-size: var(--defaultFontSize);
}
@media only screen and (min-width:576px) {
  :root{
    --defaultFontSize: 100%
  }
}
@media only screen and (min-width: 768px){
  :root {
    --defaultFontSize: 112.5%;
  }
}
body{
  background: var(--backgroundColor);
  color: var(--textColor);
  letter-spacing: var(--letterSpacing);
  font-weight: 400;
  line-height: 1.75
}
p {
  margin-bottom: 1rem;
  max-width: 40em;
}
h1,
h2,
h3,
h4,
h5 {
margin-bottom: 1.38rem;
font-family: var(--headingFont);
font-weight: 400;
line-height: 1.3;
color: hsl(209, 61%, 16%);;
text-transform: capitalize;
letter-spacing: var(--letterSpacing);
}
h1{
  font-size: 3.052rem;
}
h2 {
  font-size: 2.441rem;
}
h3 {
  font-size: 1.953rem;
}
h4 {
  font-size: 1.563rem;
}
h5 {
  font-size: 1.25rem;
}
.text-small,
small {
  font-size: var(--smallText);
}
ul,
a {
  padding: 0;
  list-style-type: none;
  text-decoration: none;
}
.img {
  width: 100%;
  display: block;
  object-fit: cover;
} 
.form {
  width: 100%;
  padding: 2rem 2.5rem;
  background: var(--clr-white);
  border-radius: var(--borderRadius);
}
label {
  display: block;
  font-size: var(--smallText);
  margin-bottom: .5rem;
  text-transform: capitalize;
}
input,
textarea {
  width: 100%;
  padding: .375rem .75rem;
  border-radius: var(--borderRadius);
  background: var(--grey-0);
  border-color: transparent;
  border: 1px solid var(--grey-300); 
}
.form-row {
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  height: 7rem;
}
::placeholder {
  color: var(--grey-600);
}
.form-alert{
  color: var(--clr-red-dark);
  font-size: var(--extraSmallText);
  letter-spacing: var(--letterSpacing);
  text-transform: capitalize;
}
hr {
  border-top: 1px solid var(--grey-900);
}
button,
.btn {
  cursor: pointer;
  appearance: none;
  color: var(--clr-white);
  background: var(--clr-primary-500);
  border: none;
  border-radius: var(--borderRadius);
  padding: .37rem .75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
}
.bth:hover,
button:hover {
  color: var(--clr-white);
  background: var(--clr-primary-700);
  box-shadow: var(--shadow-2);
}
button.small {
  padding: .25rem .5rem;
  font-size: var(--smallText);
}
button.hipster {
  color: var(--clr-primary-500);
  background: var(--clr-primary-50);
  box-shadow: var(--shadow-1);
}
button.hipster:hover {
  background: var(--clr-primary-100);
  box-shadow: var(--shadow-2);
}
button.block {
  width: 100%;
}
.alert {
  padding: .375rem .75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: var(--borderRadius);
}
.alert-success {
  color: var(--clr-green-dark);
  background-color: var(--clr-green-light);
}
.alert-danger {
  color: var(--clr-red-dark);
  background-color: var(--clr-red-light);
}
.container {
  padding: 5rem 0;
}
.container-center {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
}
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.title-underline {
  height: .2rem;
  width: 7rem;
  background: var(--clr-primary-800);
  margin: 0 auto;
}
form>*:last-child{
  margin-bottom: 0;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.loading {
  width: 6rem;
  height: 6rem;
  border-radius: 50;
  border-top-color: var(--clr-secondary-5);
  border: 3px solid #ccc;
  animation: spinner .6s linear infinite;
}
.loading {
  margin:0 auto ;
}
.form-loading {
  position: relative;
}
.form-loading:before {
  background: var(--clr-white);
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: var(--borderRadius);
  opacity: .8;
}
.form-loading::after {
  content: "";
  position: absolute;
  left: calc(50% -3rem);
  top: calc(50% -3rem);
  width: 6rem;
  height: 6rem;
  border: 3px solid 50%;
  border-top-color: var(--clr-primary-500);
  animation: spinner .6s linear infinites;
}
.service-icon {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}`


export const wraRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle/>
      {element}
    </>
  )
}