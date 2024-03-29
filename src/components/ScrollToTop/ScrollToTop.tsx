import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { breakpoints, spacing, colors } from "src/theme";

interface StyledButtonProps {
  shouldShow: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  opacity: ${({ shouldShow }) => (shouldShow ? "0.4" : "0")};
  transition: opacity ease-in 150ms;

  background-color: ${colors.main};
  color: ${colors.textInvert};

  border: none;
  border-radius: 6px;

  cursor: ${({ shouldShow }) => (shouldShow ? "pointer" : "initial")};

  position: fixed;
  bottom: ${spacing.md};
  right: ${spacing.md};

  margin-bottom: ${spacing.sm};

  width: 45px;
  height: 45px;

  padding: 0;
  margin: 0;

  &:hover {
    opacity: ${({ shouldShow }) => (shouldShow ? "1" : "0")};
  }

  @media ${breakpoints.smallUp} {
    width: 55px;
    height: 55px;
  }
`;

const onClick = (event: React.MouseEvent<HTMLElement>) => {
  event.currentTarget.blur();

  const headerEl = document.getElementById("#header");

  if (headerEl) {
    headerEl.scrollIntoView({ behavior: "smooth" });
  }
};

const ScrollToTop = () => {
  const [shouldShow, setShouldShow] = useState(false);

  // TODO: debounce/throttle
  const onScroll = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledButton shouldShow={shouldShow} onClick={onClick}>
      <span className="visually-hidden">Scroll to top</span>
      <FontAwesomeIcon icon={faCaretUp} size="lg" />
    </StyledButton>
  );
};

export default ScrollToTop;
