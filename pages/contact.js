import { useContext } from "react";
import AppContext from "../AppContext";
import Navigation from "../components/Navigation";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function About() {
  const value = useContext(AppContext);
  let { emailLabel, phoneLabel } = value.state.info;

  return (
    <div>
      <Navigation />
      <div className="page" css={styles.myDiv}>
        <h2>{value.state.info.contactTitle}</h2>
        <div>
          <li>{`${emailLabel}: annamo@nexbe.sg`}</li>
          <li>{`${phoneLabel}: +09123123123`}</li>
        </div>
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