import React from "react";
import styled from "styled-components";

import { spacing, typography, colors } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";

const StyledSection = styled(Section)`
  background-color: ${colors.main};
`;

const StyledSectionContent = styled(SectionContent)`
  padding: ${spacing.sm};
  color: ${colors.textInvert};
  font-size: ${typography.size.xsp};
  line-height: ${typography.lineHeight.xsp};
`;

const Footer = () => (
  <StyledSection>
    <StyledSectionContent as="footer">
      Designed & built by Geraint Fisher
    </StyledSectionContent>
  </StyledSection>
);

export default Footer;
