import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { spacing, typography, colors } from "./index";

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
    color: ${colors.text};

  }
  
  h1 {
    font-family: ${typography.family.headline};
    font-size: ${typography.size.h1};
    line-height: ${typography.lineHeight.h1};
  
    color: ${colors.headline};
    
    margin: 0;
  }
  
  h2, h3, h4, h5, h6 {
    font-family: ${typography.family.heading};
    font-weight: 600;
    
    color: ${colors.text};
    
    margin: 0;
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
      color: ${colors.anchorHover};
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
`;

export default GlobalStyles;
