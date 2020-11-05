import styled from "styled-components";
import { rem } from "polished";

const StyledSectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1200px;
  height: 100%;
  width: 100%;

  padding: ${({ theme }) => rem(`${theme.spacing.sm}px`)}
    ${({ theme }) => rem(`${theme.spacing.lg}px`)}
    ${({ theme }) => rem(`${theme.spacing.lg}px`)}
    ${({ theme }) => rem(`${theme.spacing.lg}px`)};
`;

export default StyledSectionContent;