import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import SkillLabels from "src/components/SkillLabels/SkillLabels";
import { breakpoints, spacing, typography, colors } from "src/theme";

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
    height: 0;
    margin: 0;
  }

  @media ${breakpoints.mediumUp} {
    margin-bottom: ${spacing.lg};
    flex-direction: row;

    &::after {
      display: none;
    }
  }
`;

const StyledWorkCardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;

  @media ${breakpoints.mediumUp} {
    flex-wrap: nowrap;
  }

  margin-top: ${spacing.md};
`;

const StyledWorkCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  align-items: center;

  @media ${breakpoints.mediumUp} {
    margin-left: ${spacing.xl};

    text-align: left;
    align-items: flex-start;
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

const StyledAnchor = styled.a``;

const StyledAnchorContainer = styled.div`
  min-width: 55px;
  margin-top: ${spacing.sm};

  @media ${breakpoints.mediumUp} {
    margin-top: 0;
  }

  ${StyledAnchor} + ${StyledAnchor} {
    margin-left: ${spacing.md};
  }
`;

const WorkCard = ({ title, subTitle, labels, body, viewUrl, image }) => {
  return (
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
                <StyledAnchor href={viewUrl} target="_blank">
                  View <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </StyledAnchor>
              </StyledAnchorContainer>
            ) : null}
          </StyledWorkCardBottom>
        )}
      </StyledWorkCardContent>
    </StyledWorkCard>
  );
};

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
