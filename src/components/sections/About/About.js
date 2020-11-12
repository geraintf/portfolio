import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import { breakpoints, spacing, colors } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";

const StyledSectionHeading = styled(SectionHeading)`
  color: ${colors.textInvert};
  line-height: 1.1;
  text-align: left;
  width: 50px;
  margin-top: 0;
  margin-bottom: ${spacing.md};

  &::after {
    bottom: 7px;
    right: -7px;
  }
`;

const StyledAboutSectionContent = styled(SectionContent)`
  align-items: flex-start;
  margin: ${spacing.lg} ${spacing.md} ${spacing.sm} ${spacing.md};
  padding: ${spacing.md};
  background-color: ${colors.main};
  border-radius: 4px;

  @media ${breakpoints.mediumUp} {
    margin: ${spacing.lg} 0 ${spacing.md} 0;

    width: 80%;
  }

  @media ${breakpoints.largeUp} {
    margin: ${spacing.xl} 0 ${spacing.lg} 0;

    width: 60%;
  }
`;

const StyledAboutSectionPara = styled.p`
  margin-top: 0;
  color: ${colors.textInvert};
`;

const StyledStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledStackListItem = styled.li`
  color: ${colors.textInvert};
  width: 100%;

  @media ${breakpoints.smallUp} {
    width: 50%;
  }
`;

const About = () => (
  <Section>
    <StyledAboutSectionContent id="about">
      <StyledSectionHeading>About Me</StyledSectionHeading>

      <StyledAboutSectionPara>
        Hi, I'm Geraint, I'm a Senior Javascript/UX engineer based in London.
      </StyledAboutSectionPara>

      <StyledAboutSectionPara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </StyledAboutSectionPara>

      <StyledAboutSectionPara>
        I'm currently using the following stack:
      </StyledAboutSectionPara>

      <StyledStackList>
        {[
          "Javascript (ES6+/ESNext)",
          "CSS/LESS/Styled Components",
          "React/Redux",
          "HTML5",
          "Node",
          "Jest/Enzyme",
        ].map((text, i) => (
          <StyledStackListItem key={i}>
            <FontAwesomeIcon
              color={colors.highlight}
              icon={faAngleDoubleRight}
              size="sm"
            />{" "}
            {text}
          </StyledStackListItem>
        ))}
      </StyledStackList>
    </StyledAboutSectionContent>
  </Section>
);

export default About;
