import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { spacing, colors } from "src/theme";

import SkillLabels from "src/components/SkillLabels/SkillLabels";
import Image from "src/components/Image/Image";

const StyledProjectCard = styled.li`
  background-color: ${colors.base.white};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  justify-content: space-between;
  display: flex;
  flex-direction: column;

  padding: ${spacing.md};
`;

const StyledProjectCardUpperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledProjectCardImageWrapper = styled.div`
  border: 1px solid ${colors.base.grey};
  width: 100px;
  height: 100px;
  border-radius: 4px;
  opacity: 0.6;

  margin-right: ${spacing.md};
`;

const StyledProjectCardUpper = styled.div`
  display: flex;
`;

const StyledProjectCardLower = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledAnchorContainer = styled.div`
  margin-top: ${spacing.xs};

  a + a {
    margin-left: ${spacing.sm};
  }
`;

const StyledBodyContainer = styled.p`
  margin: ${spacing.md} 0;
`;

const ProjectCard = ({ title, body, labels, image, viewUrl, githubUrl }) => (
  <StyledProjectCard>
    <StyledProjectCardUpper>
      <StyledProjectCardImageWrapper>
        <Image loading="lazy" src={image.src} srcWebp={image.srcWebp} />
      </StyledProjectCardImageWrapper>

      <StyledProjectCardUpperContent>
        <h3>{title}</h3>
        <StyledAnchorContainer>
          {viewUrl ? (
            <a href={viewUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          ) : null}

          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          ) : null}
        </StyledAnchorContainer>
      </StyledProjectCardUpperContent>
    </StyledProjectCardUpper>

    <StyledProjectCardLower>
      <StyledBodyContainer>{body}</StyledBodyContainer>

      <SkillLabels skills={labels} />
    </StyledProjectCardLower>
  </StyledProjectCard>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  labels: PropTypes.array,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
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
