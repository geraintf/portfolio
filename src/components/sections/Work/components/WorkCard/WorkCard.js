import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { breakpoints, spacing, typography, colors } from "src/theme";

import SkillLabels from "src/components/SkillLabels/SkillLabels";

const StyledWorkCard = styled.div`
  display: flex;
  margin-bottom: ${spacing.md};

  flex-direction: column;

  &::after {
    content: "";
    display: block;
    height: 1px;
    background: ${colors.base.grey};
    width: 50%;
    margin: ${spacing.lg} auto 0 auto;
  }

  &:last-child::after {
    display: none;
  }

  @media ${breakpoints.mediumUp} {
    margin-bottom: ${spacing.lg};
    flex-direction: row;

    &::after {
      display: none;
    }
  }
`;

const StyledWorkCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media ${breakpoints.mediumUp} {
    align-items: flex-start;
    margin-left: ${spacing.xl};
    text-align: left;
  }
`;

const StyledWorkImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing.md};

  @media ${breakpoints.mediumUp} {
    margin-bottom: 0;
  }
`;

const StyledWorkImage = styled.img`
  height: 100px;
  width: 100px;
  margin: auto 0;
`;

const StyledTitle = styled.h3`
  margin: 0 0 ${spacing.xs} 0;
`;

const StyledSubTitle = styled.span`
  font-size: ${typography.size.p};
  line-height: ${typography.lineHeight.p};
  margin-bottom: ${spacing.xs};
`;

const StyledBodyContainer = styled.p`
  margin: ${spacing.md} 0 0 0;
`;

const StyledWorkCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;

  margin-top: ${spacing.md};

  @media ${breakpoints.mediumUp} {
    flex-wrap: nowrap;
  }
`;

const StyledAnchorContainer = styled.div`
  min-width: 55px;
  margin-top: ${spacing.sm};

  @media ${breakpoints.mediumUp} {
    margin-top: 0;
  }
`;

const WorkCard = ({ title, subTitle, labels, body, viewUrl, image }) => (
  <StyledWorkCard>
    <StyledWorkImageContainer>
      <StyledWorkImage src={image.url} />
    </StyledWorkImageContainer>

    <StyledWorkCardContent>
      <StyledTitle>{title}</StyledTitle>

      <StyledSubTitle>{subTitle}</StyledSubTitle>

      {body ? <StyledBodyContainer>{body}</StyledBodyContainer> : null}

      {!labels && !viewUrl ? null : (
        <StyledWorkCardBottom>
          {labels ? <SkillLabels skills={labels} /> : null}

          {viewUrl ? (
            <StyledAnchorContainer>
              <a href={viewUrl} target="_blank" rel="noreferrer">
                View <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
              </a>
            </StyledAnchorContainer>
          ) : null}
        </StyledWorkCardBottom>
      )}
    </StyledWorkCardContent>
  </StyledWorkCard>
);

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string,
  labels: PropTypes.array,
  viewUrl: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

WorkCard.defaultProps = {
  body: undefined,
  viewUrl: undefined,
  labels: undefined,
};

export default WorkCard;
