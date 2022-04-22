import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '../AppContext';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Navigation() {
  const value = useContext(AppContext);
  let { languageSelected } = value.state;
  let { navbarAboutLink, navbarContactLink } = value.state.info;
  return (
    <div css={styles.myDiv}>
      <Link href="/">
        <a className="context">Next Context API</a>
      </Link>
      <Link href="/about" >
        <a className="about">{navbarAboutLink}</a>
      </Link>
      <Link href="/contact" >
        <a className="contact">{navbarContactLink}</a>
      </Link>
    </div>
    

  );
}
const styles = {
  myDiv: css`
  width: 100%;
  height: 70px;
  margin-top: 0;
  display: flex;
  background-color: lightgray;
  & a{
    text-decoration: none;
    color: black;
  }
  & .context{
    width: 50%;
    margin-left: 17%;
    margin-top: 1.3rem;
    font-size: 1.5rem;
    font-weight: 450;
    
  }
  & .about{
   
    width: 5%;
    margin-top: 1.3rem;
    font-weight: 450;
    
  }
  & .contact{
    width: 5%;
    margin-top: 1.3rem;
    font-weight: 450;
  }
  `
}