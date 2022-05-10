import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";

import { breakpoints, spacing, colors } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";
import SectionSubHeading from "src/components/SectionSubHeading/SectionSubHeading";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const StyledProjectsSection = styled(Section)`
  background: ${colors.secondary};
`;

const StyledProjectList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.md};

  margin: ${spacing.lg} 0 ${spacing.md} 0;

  @media ${breakpoints.mediumUp} {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${spacing.md};
  }

  @media ${breakpoints.largeUp} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${spacing.lg};

    margin: ${spacing.lg} 0;
  }
`;

const query = graphql`
  query ProjectEntries {
    allContentfulProjectEntry {
      nodes {
        contentful_id
        title
        labels
        image {
          description
          gatsbyImageData(height: 100, width: 100, quality: 100)
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
    .sort((a, b) => b.order - a.order)
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
          Here are some of my recent projects & experiments. <br /> Sometimes I
          build for fun, to learn or just out of curiosity.
        </SectionSubHeading>

        <StyledProjectList>
          {projectData.map(
            ({ title, labels, viewUrl, image, contentful_id, githubUrl }) => (
              <ProjectCard
                key={contentful_id}
                title={title}
                labels={labels}
                viewUrl={viewUrl}
                githubUrl={githubUrl}
                image={image}
              />
            )
          )}
        </StyledProjectList>
      </SectionContent>
    </StyledProjectsSection>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      labels: PropTypes.array,
      viewUrl: PropTypes.string,
      image: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }).isRequired,
      contentful_id: PropTypes.string.isRequired,
      githubUrl: PropTypes.string,
    })
  ),
};

Projects.defaultProps = {
  labels: [],
  viewUrl: undefined,
  githubUrl: undefined,
};

const ProjectsWithData = () => (
  <StaticQuery
    query={query}
    render={data => <Projects data={data.allContentfulProjectEntry.nodes} />}
  />
);

export default ProjectsWithData;
