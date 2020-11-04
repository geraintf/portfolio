import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import { rem } from "polished";

import Section from "../../Section/Section";
import SectionContent from "../../SectionContent/SectionContent";
import SectionHeading from "../../SectionHeading/SectionHeading";

const StyledPostsSection = styled(Section)``;

const StyledPost = styled.li`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const StyledPostList = styled.ul`
  padding: 0;

  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => rem(`${theme.spacing.lg}px`)};

  margin: ${({ theme }) => rem(`${theme.spacing.xl}px`)} 0
    ${({ theme }) => rem(`${theme.spacing.lg}px`)} 0;
`;

const StyledPostTitle = styled.h3`
  font-size: 22px;
  margin: ${({ theme }) => rem(`${theme.spacing.md}px`)} 0
    ${({ theme }) => rem(`${theme.spacing.xs}px`)};
`;

const StyledPostDate = styled.p`
  font-size: 14px;
  margin: 0;
`;

const StyledPostDescription = styled.p`
  font-size: 18px;
`;

const StyledPostBody = styled.div`
  font-size: 18px;
`;

const StyledPostAnchor = styled.a`
  float: right;
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
          {postData.map(({ title, date, description, url }) => (
            <StyledPost>
              <StyledPostTitle>{title}</StyledPostTitle>
              <StyledPostDate>
                {new Date(date).toLocaleDateString(undefined, {
                  dateStyle: "long",
                })}
              </StyledPostDate>
              <StyledPostBody>
                <StyledPostDescription>{description}</StyledPostDescription>
                <StyledPostAnchor href={url} target="_blank">
                  Read
                </StyledPostAnchor>
              </StyledPostBody>
            </StyledPost>
          ))}
        </StyledPostList>

        <p>
          <a href="https://medium.com/@geraintf">See All My Posts</a>
        </p>
      </SectionContent>
    </StyledPostsSection>
  );
};

const PostsWithData = () => (
  <StaticQuery
    query={query}
    render={data => <Posts data={data.allContentfulPostEntry.nodes} />}
  />
);

export default PostsWithData;
