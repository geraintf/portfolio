import styled from "styled-components";
import { breakpoints, spacing, colors } from "src/theme";

const StyledSectionHeading = styled.h2`
  text-align: center;
  position: relative;

  margin: ${spacing.md} 0 0 0;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: ${colors.highlight};
    border-radius: 50%;
    height: 10px;
    width: 10px;
    bottom: 5px;
    right: -14px;
  }

  @media ${breakpoints.smallUp} {
    margin-top: ${spacing.lg};
  }
`;

export default StyledSectionHeading;
