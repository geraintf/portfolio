import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rem } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import SkillLabels from "src/components/SkillLabels/SkillLabels";

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
  border: 1px solid lightgrey;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  opacity: 0.6;

  margin-right: ${({ theme }) => rem(`${theme.spacing.md}px`)};
`;

const StyledProjectCardTitle = styled.h3`
  margin: 0;
`;

const StyledProjectCardLower = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledAnchor = styled.a``;

const StyledAnchorContainer = styled.div`
  margin-top: ${({ theme }) => rem(`${theme.spacing.xs}px`)};

  ${StyledAnchor} + ${StyledAnchor} {
    margin-left: ${({ theme }) => rem(`${theme.spacing.sm}px`)};
  }
`;

const StyledBodyContainer = styled.p`
  margin: ${({ theme }) => rem(`${theme.spacing.md}px`)} 0;
`;

const ProjectCard = ({ title, body, labels, image, viewUrl, githubUrl }) => {
  return (
    <StyledProjectCard>
      <StyledProjectCardUpper>
        <StyledProjectCardImage src={image.url} />
        <div>
          <StyledProjectCardTitle>{title}</StyledProjectCardTitle>
          <StyledAnchorContainer>
            {viewUrl ? (
              <StyledAnchor href={viewUrl} target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </StyledAnchor>
            ) : null}

            {githubUrl ? (
              <StyledAnchor href={githubUrl} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </StyledAnchor>
            ) : null}
          </StyledAnchorContainer>
        </div>
      </StyledProjectCardUpper>
      <StyledProjectCardLower>
        <StyledBodyContainer>{body}</StyledBodyContainer>

        <SkillLabels skills={labels} />
      </StyledProjectCardLower>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  labels: PropTypes.array,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  viewUrl: PropTypes.string,
  githubUrl: PropTypes.string,
};

ProjectCard.defaultProps = {
  viewUrl: undefined,
  githubUrl: undefined,
  labels: [],
};

export default ProjectCard;
