import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { rem } from "polished";

import { breakpoints } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";
import SectionSubHeading from "src/components/SectionSubHeading/SectionSubHeading";

import WorkCard from "./components/WorkCard/WorkCard";

const StyledWorkSection = styled(Section)``;

const StyledWorkCards = styled.div`
  margin-top: ${({ theme }) => rem(`${theme.spacing.md}px`)};

  @media ${breakpoints.mediumUp} {
    margin-top: ${({ theme }) => rem(`${theme.spacing.lg}px`)};
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
          file {
            url
          }
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
    <StyledWorkSection>
      <SectionContent id="work">
        <SectionHeading>Work</SectionHeading>

        <SectionSubHeading>
          I've been working in the technology space since 2013 and have been
          engineering since 2015.
        </SectionSubHeading>

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
                image={{ url: image.file.url }}
              />
            )
          )}
        </StyledWorkCards>

        <StyledLinkedInSection>
          You can read more about my work experiences on{" "}
          <a href="https://www.linkedin.com/in/geraint-fisher/">LinkedIn</a>.
        </StyledLinkedInSection>
      </SectionContent>
    </StyledWorkSection>
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
        file: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
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
