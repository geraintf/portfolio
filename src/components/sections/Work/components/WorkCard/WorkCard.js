import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { rem } from "polished";

import SkillLabels from "../../../../SkillLabels/SkillLabels";

const StyledWorkCard = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => rem(`${theme.spacing.lg}px`)};
`;

const StyledWorkCardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: ${({ theme }) => rem(`${theme.spacing.md}px`)};
`;

const StyledWorkCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-left: ${({ theme }) => rem(`${theme.spacing.xl}px`)};
`;

const StyledWorkImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledWorkImage = styled.img`
  height: 100px;
  width: 100px;
  margin: auto 0;
`;

const StyledTitle = styled.h3`
  margin: 0 0 ${({ theme }) => rem(`${theme.spacing.xs}px`)} 0;
`;

const StyledSubTitle = styled.span`
  font-size: 18px;
  margin-bottom: ${({ theme }) => rem(`${theme.spacing.xs}px`)};
`;

const StyledBodyContainer = styled.p`
  margin: ${({ theme }) => rem(`${theme.spacing.md}px`)} 0 0 0;
`;

const StyledAnchor = styled.a``;

const StyledAnchorContainer = styled.div`
  ${StyledAnchor} + ${StyledAnchor} {
    margin-left: ${({ theme }) => rem(`${theme.spacing.md}px`)};
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
