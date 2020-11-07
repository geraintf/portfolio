import styled from "styled-components";
import { breakpoints, spacing } from "src/theme";

const StyledSectionHeading = styled.h2`
  text-align: center;
  position: relative;

  margin: ${spacing.md} 0 0 0;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 50%;
    height: 10px;
    width: 10px;
    bottom: 1px;
    right: -14px;
  }

  @media ${breakpoints.smallUp} {
    margin: ${spacing.lg} 0 0 0;
  }
`;

export default StyledSectionHeading;
