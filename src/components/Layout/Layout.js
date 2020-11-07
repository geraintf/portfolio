import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import { Helmet } from "react-helmet";

import theme from "src/theme/theme";
import { spacing } from "src/theme";
import { rem } from "polished";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute; 
    white-space: nowrap;
    width: 1px;
  }
  
  h1, h2, h3, h4, h5, h6, div, span, p, a {
    font-family: 'Karla', serif;
    line-height: 1.5rem;
    font-size: ${rem("16px")};
    color: ${({ theme }) => theme.colors.text};
  }
  
  h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
  }
  
  h2 {
    font-size: ${rem("30px")};
  }
  
  h3 {
    font-size: ${rem("22px")};
  }
  
  p {
    margin-block-start: ${spacing.md};
    margin-block-end: ${spacing.md};
  }
  
  a {  
    &:hover {
      color: ${({ theme }) => `${theme.colors.highlight}`};
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Geraint Fisher</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
