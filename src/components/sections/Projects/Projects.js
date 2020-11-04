import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { rem } from "polished";

import Section from "../../Section/Section";
import SectionContent from "../../SectionContent/SectionContent";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SectionSubHeading from "../../SectionSubHeading/SectionSubHeading";

import ProjectCard from "./components/ProjectCard/ProjectCard";

const StyledProjectsSection = styled(Section)`
  background: #dde3e3;
`;

const StyledProjectList = styled.ul`
  padding: 0;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => rem(`${theme.spacing.lg}px`)};

  margin: ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0;
`;

const query = graphql`
  query ProjectEntries {
    allContentfulProjectEntry {
      nodes {
        contentful_id
        title
        labels
        details {
          details
        }
        image {
          file {
            url
          }
        }
        githubUrl
        viewUrl
        order
      }
    }
  }
`;

const Projects = ({ data }) => {
  // There is a bug with contentful gatsby plugin that means it returns duplicates so filter those out
  const projectData = [];
  const seen = new Set();

  data
    .sort((a, b) => a.order - b.order)
    .forEach(d => {
      if (seen.has(d.contentful_id)) return;

      projectData.push(d);
      seen.add(d.contentful_id);
    });

  return (
    <StyledProjectsSection>
      <SectionContent id="projects">
        <SectionHeading>Projects</SectionHeading>

        <SectionSubHeading>
          I love building things, sometimes for fun, to learn or just out of
          curiosity. Here are some of my recent projects & experiments.
        </SectionSubHeading>

        <StyledProjectList>
          {projectData.map(
            ({
              title,
              labels,
              details,
              viewUrl,
              image,
              contentful_id,
              githubUrl,
            }) => (
              <ProjectCard
                key={contentful_id}
                title={title}
                labels={labels}
                body={details.details}
                viewUrl={viewUrl}
                githubUrl={githubUrl}
                image={{ url: image.file.url }}
              />
            )
          )}
        </StyledProjectList>
      </SectionContent>
    </StyledProjectsSection>
  );
};

const ProjectsWithData = () => (
  <StaticQuery
    query={query}
    render={data => <Projects data={data.allContentfulProjectEntry.nodes} />}
  />
);

export default ProjectsWithData;
