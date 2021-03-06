import { useContext } from "react";
import AppContext from "../AppContext";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Navigation from "../components/Navigation";

export default function Home() {
  const value = useContext(AppContext);
  let { homeTitle, homeContent } = value.state.info;

  return (
    <div>
      <Navigation />
      <div className="page" css={styles.myDiv}>
        <h2>{homeTitle}</h2>
        <p>{homeContent}</p>
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
  & p{
    font-size: 15px;
  }
  `
}