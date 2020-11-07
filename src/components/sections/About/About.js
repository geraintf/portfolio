import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import breakpoints from "src/theme/breakpoints";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";

import styled from "styled-components";
import { rem } from "polished";

const StyledAboutSection = styled(Section)``;

const StyledSectionHeading = styled(SectionHeading)`
  color: #fff;
  width: 50px;

  text-align: left;

  line-height: 1.1;

  margin-top: 0;
  margin-bottom: ${({ theme }) => rem(`${theme.spacing.md}px`)};

  &::after {
    bottom: 6px;
    right: -10px;
  }
`;

const StyledAboutSectionContent = styled(SectionContent)`
  align-items: flex-start;

  margin: ${({ theme }) => rem(`${theme.spacing.lg}px`)}
    ${({ theme }) => rem(`${theme.spacing.md}px`)}
    ${({ theme }) => rem(`${theme.spacing.sm}px`)}
    ${({ theme }) => rem(`${theme.spacing.md}px`)};

  @media ${breakpoints.mediumUp} {
    margin: ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0
      ${({ theme }) => rem(`${theme.spacing.md}px`)} 0;

    width: 80%;
  }

  @media ${breakpoints.largeUp} {
    margin: ${({ theme }) => rem(`${theme.spacing.xl}px`)} 0
      ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0;

    width: 60%;
  }

  background-color: #536565;

  padding: ${({ theme }) => rem(`${theme.spacing.md}px`)};

  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

const StyledAboutSectionPara = styled.p`
  margin-top: 0;
  color: #ffffff;
`;

const StyledStackList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const StyledStackListItem = styled.li`
  color: #ffffff;
  width: 100%;

  path {
    fill: ${({ theme }) => `${theme.colors.highlight}`};
  }

  @media ${breakpoints.smallUp} {
    width: 50%;
  }
`;

const About = () => {
  return (
    <StyledAboutSection>
      <StyledAboutSectionContent id="about">
        <StyledSectionHeading>About Me</StyledSectionHeading>
        <StyledAboutSectionPara>
          Hi, I'm Geraint, I'm a Senior Javascript/UX engineer based in London.
        </StyledAboutSectionPara>

        <StyledAboutSectionPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </StyledAboutSectionPara>

        <StyledAboutSectionPara>
          I'm currently using the following stack:
        </StyledAboutSectionPara>

        <StyledStackList>
          <StyledStackListItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" /> Javascript
            (ES6+/ESNext)
          </StyledStackListItem>
          <StyledStackListItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" />{" "}
            CSS/LESS/Styled Components
          </StyledStackListItem>
          <StyledStackListItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" /> React/Redux
          </StyledStackListItem>
          <StyledStackListItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" /> HTML5
          </StyledStackListItem>
          <StyledStackListItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" /> Node
          </StyledStackListItem>
          <StyledStackListItem>
            <FontAwesomeIcon icon={faAngleDoubleRight} size="sm" /> Jest/Enzyme
          </StyledStackListItem>
        </StyledStackList>
      </StyledAboutSectionContent>
    </StyledAboutSection>
  );
};

export default About;
