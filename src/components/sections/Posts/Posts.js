import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";

import { breakpoints, spacing, typography } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";

const StyledPostsSection = styled(Section)``;

const StyledPost = styled.li`
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const StyledPostList = styled.ul`
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: ${spacing.md};

  margin: ${spacing.lg} 0 ${spacing.md} 0;

  @media ${breakpoints.mediumUp} {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${spacing.lg};

    margin: ${spacing.lg} 0 ${spacing.lg} 0;
  }
`;

const StyledPostTitle = styled.h3`
  margin: ${spacing.md} 0 ${spacing.xs};
`;

const StyledPostDate = styled.p`
  font-size: ${typography.size.sp};
  line-height: ${typography.lineHeight.sp};
  margin: 0;
`;

const query = graphql`
  query PostEntries {
    allContentfulPostEntry {
      nodes {
        contentful_id
        title
        date
        description
        url
      }
    }
  }
`;

const Posts = ({ data }) => {
  // There is a bug with contentful gatsby plugin that means it returns duplicates so filter those out
  const postData = [];
  const seen = new Set();

  data
    .sort((a, b) => new Date(a.date) - new Date(b.order))
    .forEach(d => {
      if (seen.has(d.contentful_id)) return;

      postData.push(d);
      seen.add(d.contentful_id);
    });

  return (
    <StyledPostsSection>
      <SectionContent id="posts">
        <SectionHeading>Posts</SectionHeading>

        <StyledPostList>
          {postData.map(({ title, date, description, url, contentful_id }) => (
            <StyledPost key={contentful_id}>
              <StyledPostTitle>{title}</StyledPostTitle>
              <StyledPostDate>
                {new Date(date).toLocaleDateString(undefined, {
                  dateStyle: "long",
                })}
              </StyledPostDate>
              <div>
                <p>{description}</p>
                <a href={url} target="_blank" rel="noreferrer">
                  Read
                </a>
              </div>
            </StyledPost>
          ))}
        </StyledPostList>

        <p>
          <a
            href="https://medium.com/@geraintf"
            target="_blank"
            rel="noreferrer"
          >
            See All My Posts
          </a>
        </p>
      </SectionContent>
    </StyledPostsSection>
  );
};

Posts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      contentful_id: PropTypes.string.isRequired,
    })
  ),
};

const PostsWithData = () => (
  <StaticQuery
    query={query}
    render={data => <Posts data={data.allContentfulPostEntry.nodes} />}
  />
);

export default PostsWithData;
