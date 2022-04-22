import { useContext } from "react";
import AppContext from "../AppContext";
import Navigation from "../components/Navigation";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function About() {
  const value = useContext(AppContext);
  let { aboutTitle, aboutContent } = value.state.info;

  return (
    <div>
      <Navigation />
      <div className="page" css={styles.myDiv}>
        <h2>{aboutTitle}</h2>
        <p>{aboutContent}</p>
      </div>
    </div>
  );
}
const styles={
  myDiv:css`
  margin-top: 5rem;
  margin-left: 17%;
  & h2{
    font-size: 40px;
  }
  `
}