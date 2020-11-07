import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rem } from "polished";

const StyledLabelContainer = styled.div`
  font-size: 12px;
  width: 100%;
  padding-right: ${({ theme }) => rem(`${theme.spacing.sm}px`)};
`;

const SkillLabels = ({ skills }) => (
  <StyledLabelContainer>{skills.join(", ").toString()}</StyledLabelContainer>
);

SkillLabels.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
};

SkillLabels.defaultProps = {
  skills: [],
};

export default SkillLabels;
