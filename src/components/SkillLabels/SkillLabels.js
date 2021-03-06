import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, typography } from "src/theme";

const StyledLabelContainer = styled.div`
  font-size: ${typography.size.sp};
  line-height: ${typography.lineHeight.sp};
  width: 100%;
  padding-right: ${spacing.sm};
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
