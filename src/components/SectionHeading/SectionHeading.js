import styled from "styled-components";
import { rem } from "polished";
import breakpoints from "src/theme/breakpoints";

const StyledSectionHeading = styled.h2`
  text-align: center;
  position: relative;

  margin: ${({ theme }) => rem(`${theme.spacing.md}px`)} 0 0 0;

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
    margin: ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0 0 0;
  }
`;

export default StyledSectionHeading;
