import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import breakpoints from "../../theme/breakpoints";

const StyledLabelContainer = styled.div`
  font-size: 12px;
  width: 100%;
  padding-right: ${({ theme }) => rem(`${theme.spacing.sm}px`)};

  @media ${breakpoints.mediumUp} {
  }
`;

const SkillLabels = ({ skills }) => (
  <StyledLabelContainer>{skills.join(", ").toString()}</StyledLabelContainer>
);

export default SkillLabels;
