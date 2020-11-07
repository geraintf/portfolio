import React from "react";
import styled from "styled-components";

import { spacing, colors } from "src/theme";

const StyledListItem = styled.li`
  margin: 0;
`;

const StyledList = styled.ul`
  display: flex;

  ${StyledListItem} + ${StyledListItem} {
    margin-left: ${spacing.md};
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;

  &:hover {
    color: ${colors.text};

    text-decoration: underline;
    text-decoration-color: ${colors.anchorHover};
    text-decoration-style: double;
  }
`;

const onClickConstructor = id => event => {
  event.preventDefault();

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const Navigation = () => (
  <nav aria-labelledby="main-menu-label">
    <h2 id="main-menu-label" className="visually-hidden">
      Main Menu
    </h2>
    <StyledList>
      <StyledListItem>
        <StyledAnchor onClick={onClickConstructor("about")} href="#about">
          About
        </StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor onClick={onClickConstructor("work")} href="#work">
          Work
        </StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor onClick={onClickConstructor("projects")} href="#projects">
          Projects
        </StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor onClick={onClickConstructor("posts")} href="#posts">
          Posts
        </StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor onClick={onClickConstructor("contact")} href="#contact">
          Contact
        </StyledAnchor>
      </StyledListItem>
    </StyledList>
  </nav>
);

export default Navigation;
