import React from "react";
import styled from "styled-components";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import { rem } from "polished";

const StyledSection = styled(Section)`
  background-color: #536565;
`;

const StyledSectionContent = styled(SectionContent)`
  padding: 0;
  color: #ffffff;
  font-size: ${rem("12px")};

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
