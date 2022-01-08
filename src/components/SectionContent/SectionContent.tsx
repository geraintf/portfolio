import styled from "styled-components";
import { breakpoints, spacing } from "src/theme";

const StyledSectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1200px;
  height: 100%;
  width: 100%;

  padding: ${spacing.md};

  @media ${breakpoints.smallUp} {
    padding: ${spacing.sm} ${spacing.lg} ${spacing.lg} ${spacing.lg};
  }
`;

export default StyledSectionContent;
