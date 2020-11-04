import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import theme from "../../theme/theme";
import { rem } from "polished/lib/index";

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
  
  * {
    font-family: 'Karla', serif;
    line-height: 1.5rem;
    font-size: ${rem("16px")};
    color: ${({ theme }) => theme.colors.text}
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
    margin-block-start: ${({ theme }) => rem(`${theme.spacing.md}px`)};
    margin-block-end: ${({ theme }) => rem(`${theme.spacing.md}px`)};
  }
  
  a {  
    &:hover {
      color: ${({ theme }) => `${theme.colors.highlight}`};
      
      path {
        fill: ${({ theme }) => `${theme.colors.highlight}`};
      }
    }
  }
  
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Layout;
