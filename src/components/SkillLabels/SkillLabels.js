import React from "react";
import styled from "styled-components";

const StyledLabelContainer = styled.div`
  font-size: 12px;
`;

const SkillLabels = ({ skills }) => (
  <StyledLabelContainer>{skills.join(", ").toString()}</StyledLabelContainer>
);

export default SkillLabels;
