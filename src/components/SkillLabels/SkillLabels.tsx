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

const propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
}

const defaultProps = {
  skills: [],
};

type IProps = PropTypes.InferProps<typeof propTypes> & typeof defaultProps

const SkillLabels = ({ skills }: IProps) => (
  <StyledLabelContainer>{skills.join(", ").toString()}</StyledLabelContainer>
);

SkillLabels.propTypes = propTypes;

SkillLabels.defaultProps = defaultProps;

export default SkillLabels;
