import styled from "styled-components";
import { rem } from "polished/lib/index";

const StyledSectionHeading = styled.h2`
  text-align: center;
  position: relative;

  margin: ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0 0 0;

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
`;

export default StyledSectionHeading;
