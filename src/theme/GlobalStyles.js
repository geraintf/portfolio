import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { spacing, typography } from "./index";

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
  
  div, span, p, a {
    font-size: ${typography.size.p};
    line-height: ${typography.lineHeight.p};
    font-family: ${typography.family.body};
    color: ${({ theme }) => theme.colors.text};

  }
  
  h1 {
    font-family: ${typography.family.headline};
    font-size: ${typography.size.h1};
    line-height: ${typography.lineHeight.h1};
  
    color: ${({ theme }) => theme.colors.highlight};
  }
  
  h2, h3, h4, h5, h6 {
    font-family: ${typography.family.heading};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
  
  h2 {
    font-size: ${typography.size.h2};
    line-height: ${typography.lineHeight.h2};
  }
  
  h3, h4, h5, h6 {
    font-size: ${typography.size.h3};
    line-height: ${typography.lineHeight.h3};
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

export default GlobalStyles;
