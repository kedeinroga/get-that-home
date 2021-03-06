import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Global, css } from "@emotion/react";
import { colors } from "./ui";

import { ApolloProvider } from "@apollo/client";
import client from "./client";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@300;400;500;700&display=swap");

  :root {
    --font-inter: "Inter", sans-serif;
    --font-montserrat: "Montserrat", sans-serif;
  }

  * {
    color: ${colors.darkGray};
    font-family: var(--font-montserrat);
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-weight: 300;
    font-size: 96px;
    line-height: 128px;
    letter-spacing: -1.5px;
    margin: 0;
  }

  h2 {
    font-weight: 300;
    font-size: 64px;
    line-height: 88px;
    letter-spacing: -0.5px;
    margin: 0;
  }

  h3 {
    font-size: 48px;
    line-height: 64px;
    margin: 0;
  }

  h4 {
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 0.25px;
    margin: 0;
  }

  h5 {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }

  h6 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    margin: 0;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  textarea {
    border: none;
    width: 100%;
    height: 60px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
