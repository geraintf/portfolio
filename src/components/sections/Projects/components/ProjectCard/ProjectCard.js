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
  border-radius: 4px;

  display: flex;

  padding: ${spacing.md};
`;

const StyledProjectCardContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledProjectCardImageWrapper = styled.div`
  border: 1px solid ${colors.base.grey};
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  opacity: 0.6;

  margin: auto ${spacing.md} auto 0;
`;

const StyledAnchorContainer = styled.div`
  margin: ${spacing.sm} 0;

  a + a {
    margin-left: ${spacing.sm};
  }
`;

const ProjectCard = ({ title, labels, image, viewUrl, githubUrl }) => (
  <StyledProjectCard>
    <StyledProjectCardImageWrapper>
      <Image
        loading="lazy"
        src={image.fixed.src}
        srcWebp={image.fixed.srcWebp}
        alt={image.description}
      />
    </StyledProjectCardImageWrapper>

    <StyledProjectCardContent>
      <div>
        <h3>{title}</h3>

        <StyledAnchorContainer>
          {viewUrl ? (
            <a href={viewUrl} target="_blank" rel="noreferrer">
              <span className="visually-hidden">Open {title}</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          ) : null}

          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <span className="visually-hidden">Open {title} on github</span>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          ) : null}
        </StyledAnchorContainer>
      </div>
      <div>
        <SkillLabels skills={labels} />
      </div>
    </StyledProjectCardContent>
  </StyledProjectCard>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array,
  image: PropTypes.shape({
    description: PropTypes.string.isRequired,
    fixed: PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcWebp: PropTypes.string.isRequired,
    }).isRequired,
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
