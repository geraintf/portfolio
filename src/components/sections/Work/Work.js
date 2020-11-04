import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { rem } from "polished";

import Section from "../../Section/Section";
import SectionContent from "../../SectionContent/SectionContent";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SectionSubHeading from "../../SectionSubHeading/SectionSubHeading";

import ProjectCard from "../../ProjectCard/ProjectCard";

const StyledWorkSection = styled(Section)``;

const StyledProjectCards = styled.div`
  margin-top: ${({ theme }) => rem(`${theme.spacing.xl}px`)};
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

        <StyledProjectCards>
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
              <ProjectCard
                key={contentful_id}
                title={title}
                subTitle={subTitle}
                labels={labels}
                body={details?.details}
                viewUrl={viewUrl}
                image={{ url: image.file.url }}
              />
            )
          )}
        </StyledProjectCards>

        <p>
          You can read more about my work experiences on{" "}
          <a href="https://www.linkedin.com/in/geraint-fisher/">LinkedIn</a>.
        </p>
      </SectionContent>
    </StyledWorkSection>
  );
};

const WorkWithData = () => (
  <StaticQuery
    query={query}
    render={data => <Work data={data.allContentfulWorkEntry.nodes} />}
  />
);

export default WorkWithData;
