import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";

import { breakpoints, spacing } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";

import WorkCard from "./components/WorkCard/WorkCard";

const StyledWorkCards = styled.div`
  margin-top: ${spacing.lg};

  @media ${breakpoints.mediumUp} {
    margin-top: ${spacing.xl};
  }
`;

const StyledLinkedInSection = styled.p`
  text-align: center;
`;

const query = graphql`
  query WorkEntries {
    allContentfulWorkEntry {
      nodes {
        contentful_id
        title
        subTitle
        labels
        details {
          details
        }
        image {
          description
          gatsbyImageData(height: 100, width: 100, quality: 100)
        }
        viewUrl
        order
      }
    }
  }
`;

const Work = ({ data }) => {
  // There is a bug with contentful gatsby plugin that means it returns duplicates so filter those out
  const workData = [];
  const seen = new Set();

  data
    .sort((a, b) => b.order - a.order)
    .forEach(d => {
      if (seen.has(d.contentful_id)) return;

      workData.push(d);
      seen.add(d.contentful_id);
    });

  return (
    <Section>
      <SectionContent id="work">
        <SectionHeading>Work</SectionHeading>

        <StyledWorkCards>
          {workData.map(
            ({
              title,
              subTitle,
              labels,
              details,
              viewUrl,
              image,
              contentful_id,
            }) => (
              <WorkCard
                key={contentful_id}
                title={title}
                subTitle={subTitle}
                labels={labels}
                body={details && details.details}
                viewUrl={viewUrl}
                image={image}
              />
            )
          )}
        </StyledWorkCards>

        <StyledLinkedInSection>
          You can read more about my work experiences on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/geraint-fisher/"
          >
            LinkedIn
          </a>
          .
        </StyledLinkedInSection>
      </SectionContent>
    </Section>
  );
};

Work.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      labels: PropTypes.array,
      details: PropTypes.shape({
        details: PropTypes.string.isRequired,
      }).isRequired,
      viewUrl: PropTypes.string,
      image: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }).isRequired,
      contentful_id: PropTypes.string.isRequired,
    })
  ),
};

Work.defaultProps = {
  labels: [],
  viewUrl: undefined,
};

const WorkWithData = () => (
  <StaticQuery
    query={query}
    render={data => <Work data={data.allContentfulWorkEntry.nodes} />}
  />
);

export default WorkWithData;
