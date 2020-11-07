import React from "react";
import styled from "styled-components";

import { typography, colors } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";

const StyledSection = styled(Section)`
  background-color: ${colors.main};
`;

const StyledSectionContent = styled(SectionContent)`
  padding: 0;
  color: ${colors.textInvert};
  font-size: ${typography.size.sp};
  line-height: ${typography.lineHeight.sp};

  height: 25px;
`;

const Footer = () => (
  <StyledSection>
    <StyledSectionContent as="footer">
      Designed & built by Geraint Fisher
    </StyledSectionContent>
  </StyledSection>
);

export default Footer;
