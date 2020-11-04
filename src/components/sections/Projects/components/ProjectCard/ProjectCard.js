import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import SkillLabels from "../../../../SkillLabels/SkillLabels";

const StyledProjectCard = styled.li`
  background-color: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  justify-content: space-between;
  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => rem(`${theme.spacing.md}px`)};
`;

const StyledProjectCardUpper = styled.div`
  display: flex;
`;

const StyledProjectCardImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 4px;

  margin-right: ${({ theme }) => rem(`${theme.spacing.sm}px`)};
`;

const StyledProjectCardTitle = styled.h3`
  margin: 0;
`;

const StyledProjectCardLower = styled.div``;

const StyledProjectCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAnchor = styled.a``;

const StyledAnchorContainer = styled.div`
  ${StyledAnchor} + ${StyledAnchor} {
    margin-left: ${({ theme }) => rem(`${theme.spacing.md}px`)};
  }
`;

const StyledBodyContainer = styled.p`
  margin: ${({ theme }) => rem(`${theme.spacing.md}px`)} 0
    ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0;
`;

const ProjectCard = ({ title, body, labels, image, viewUrl, githubUrl }) => {
  return (
    <StyledProjectCard>
      <StyledProjectCardUpper>
        <StyledProjectCardImage src={image.url} />
        <div>
          <StyledProjectCardTitle>{title}</StyledProjectCardTitle>
        </div>
      </StyledProjectCardUpper>
      <StyledProjectCardLower>
        <StyledBodyContainer>{body}</StyledBodyContainer>
        <StyledProjectCardBottom>
          <SkillLabels skills={labels} />

          <StyledAnchorContainer>
            <StyledAnchor href={viewUrl} target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="md" />
            </StyledAnchor>

            {githubUrl ? (
              <StyledAnchor href={githubUrl} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </StyledAnchor>
            ) : null}
          </StyledAnchorContainer>
        </StyledProjectCardBottom>
      </StyledProjectCardLower>
    </StyledProjectCard>
  );
};

export default ProjectCard;
