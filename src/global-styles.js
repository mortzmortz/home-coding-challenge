import React from 'react';
import { Global, css } from '@emotion/core';
import theme from './theme';

export const styles = css`
  html {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 100%;
    font-family: ${theme.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  html {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
}
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
