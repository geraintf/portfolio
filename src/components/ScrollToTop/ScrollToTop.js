import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { breakpoints, spacing, colors } from "src/theme";

const StyledButton = styled.button`
  opacity: ${({ shouldShow }) => (shouldShow ? "0.4" : "0")};
  transition: opacity ease-in 150ms;

  background-color: ${colors.main};
  color: ${colors.textInvert};

  border: none;
  border-radius: 6px;

  cursor: pointer;

  position: fixed;
  bottom: ${spacing.md};
  right: ${spacing.md};

  margin-bottom: ${spacing.sm};

  width: 45px;
  height: 45px;

  padding: 0;
  margin: 0;

  &:hover {
    opacity: 1;
  }

  @media ${breakpoints.smallUp} {
    width: 55px;
    height: 55px;
  }
`;

const onClick = event => {
  event.currentTarget.blur();
  document.getElementById("#header").scrollIntoView({ behavior: "smooth" });
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
      <FontAwesomeIcon icon={faCaretUp} size="lg" />
    </StyledButton>
  );
};

export default ScrollToTop;
