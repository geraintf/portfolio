import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import ReactGA from "react-ga";

import { spacing, colors, breakpoints, typography } from "src/theme";

const StyledListItem = styled.li`
  &:first-of-type {
    margin-top: ${spacing.md};
  }

  @media ${breakpoints.smallUp} {
    margin: 0;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  padding-top: ${spacing.xl};

  background-color: ${colors.base.white};
  border-left: 5px solid ${colors.main};

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 100px;

  z-index: 10;

  transform: translateX(100%);
  transition: transform ease-in-out 400ms;

  .open > & {
    transform: translateX(0);
  }

  @media ${breakpoints.smallUp} {
    flex-direction: row;
    transform: none;

    position: initial;

    padding-top: 0;
    background-color: inherit;
    border-left: none;

    ${StyledListItem} + ${StyledListItem} {
      margin-left: ${spacing.md};
    }
  }
`;

const StyledOverlay = styled.div`
  background: ${colors.base.black};

  opacity: 0;
  visibility: hidden;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;

  cursor: pointer;

  transition: all 250ms ease-in-out;

  .open > & {
    visibility: visible;
    opacity: 0.5;
  }

  @media ${breakpoints.smallUp} {
    display: none;
  }
`;

const StyledAnchor = styled.a`
  padding-left: ${spacing.md};

  font-size: ${typography.size.h2};

  text-decoration-color: ${colors.anchorHover};

  width: 100%;
  height: 40px;
  display: block;

  &:hover {
    color: ${colors.text};

    text-decoration: underline;
    text-decoration-color: ${colors.anchorHover};
    text-decoration-style: double;
  }

  @media ${breakpoints.smallUp} {
    display: flex;
    align-items: center;

    text-decoration: none;
    padding-left: 0;
    font-size: inherit;
  }
`;

const StyledNavToggle = styled.div`
  position: relative;
  z-index: 15;

  @media ${breakpoints.smallUp} {
    display: none;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickConstructor = (id: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    ReactGA.pageview(id);
  };

  return (
    <nav className={isOpen ? "open" : ""} aria-labelledby="main-menu-label">
      <h2 id="main-menu-label" className="visually-hidden">
        Main Menu
      </h2>
      <StyledNavToggle>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          direction="right"
          rounded
          label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        />
      </StyledNavToggle>
      <StyledOverlay onClick={() => setIsOpen(!isOpen)} />
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
          <StyledAnchor
            onClick={onClickConstructor("projects")}
            href="#projects"
          >
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
};

export default Navigation;
