import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { breakpoints, spacing, typography, colors } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import Navigation from "./components/Navigation/Navigation";

const StyledHeaderSection = styled(Section)`
  background: url("./gplaypattern_@2X.png");

  border-bottom: 5px solid ${colors.main};

  height: 350px;

  @media ${breakpoints.smallUp} {
    height: 500px;
  }
`;

const StyledHeaderSectionContent = styled(SectionContent)`
  align-items: stretch;

  @media ${breakpoints.smallUp} {
    margin-top: ${spacing.md};
  }
`;

const StyledHeaderUpper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderLower = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 100%;
`;

const StyledHeaderTextArea = styled.div`
  max-width: ${rem("600px")};

  margin-bottom: ${spacing.md};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${breakpoints.smallUp} {
    margin-bottom: ${spacing.xl};
  }
`;

const StyledHeadline = styled.h1`
  margin: 0 0 ${spacing.md} 0;
`;

const StyledTagline = styled.p`
  font-size: ${typography.size.lp};
  line-height: ${typography.lineHeight.lp};

  margin: 0;
`;

const Header = () => (
  <StyledHeaderSection>
    <StyledHeaderSectionContent id="#header" as="header">
      <StyledHeaderUpper>
        <div>
          <svg
            width="65"
            height="42"
            viewBox="0 0 65 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 5.37258 5.352 0 11.954 0H61.2644C63.3275 0 65 1.67893 65 3.75V38.25C65 40.321 63.3275 42 61.2644 42H12.7011C5.6865 42 0 36.2916 0 29.25V12Z"
              fill={colors.logo}
            />
            <path
              d="M31.0924 38.2499H16.0303C12.0457 38.2499 9.08109 37.4499 7.13654 35.8499C5.2239 34.25 4.26758 31.7859 4.26758 28.4579V13.4819C4.26758 10.154 5.2239 7.68992 7.13654 6.08994C9.08109 4.48994 12.0457 3.68994 16.0303 3.68994H27.9844C28.5901 3.68994 29.0204 3.83394 29.2754 4.12194C29.5623 4.37794 29.7057 4.80994 29.7057 5.41794V11.2259C29.7057 11.834 29.5623 12.2819 29.2754 12.5699C29.0204 12.8259 28.5901 12.9539 27.9844 12.9539H18.0386C17.0504 12.9539 16.3172 13.1619 15.8391 13.5779C15.3609 13.9619 15.1218 14.5539 15.1218 15.3539V26.8259C15.1218 27.626 15.2972 28.2179 15.6478 28.6019C16.0303 28.9859 16.5882 29.1779 17.3214 29.1779H21.9595V21.6899C21.9595 21.0819 22.0871 20.6499 22.3421 20.3939C22.629 20.1059 23.0752 19.9619 23.6809 19.9619H31.0924C31.6981 19.9619 32.1284 20.1059 32.3834 20.3939C32.6703 20.6499 32.8138 21.0819 32.8138 21.6899V36.5219C32.8138 37.13 32.6703 37.5779 32.3834 37.8659C32.1284 38.1219 31.6981 38.2499 31.0924 38.2499Z"
              fill={colors.base.white}
            />
            <path
              d="M45.3057 38.2499H37.8942C37.2885 38.2499 36.8423 38.1219 36.5554 37.8659C36.3004 37.5779 36.1729 37.13 36.1729 36.5219V5.41794C36.1729 4.80994 36.3004 4.37794 36.5554 4.12194C36.8423 3.83394 37.2885 3.68994 37.8942 3.68994H59.2202C59.8259 3.68994 60.2562 3.83394 60.5112 4.12194C60.7981 4.37794 60.9416 4.80994 60.9416 5.41794V11.1299C60.9416 11.738 60.7981 12.1859 60.5112 12.4739C60.2562 12.7299 59.8259 12.8579 59.2202 12.8579H47.0271V17.8499H55.3471C55.9528 17.8499 56.3831 17.9939 56.6381 18.2819C56.925 18.5379 57.0685 18.9699 57.0685 19.5779V25.3379C57.0685 25.946 56.925 26.3939 56.6381 26.6819C56.3831 26.9379 55.9528 27.0659 55.3471 27.0659H47.0271V36.5219C47.0271 37.13 46.8837 37.5779 46.5968 37.8659C46.3418 38.1219 45.9114 38.2499 45.3057 38.2499Z"
              fill={colors.base.white}
            />
          </svg>
        </div>
        <div>
          <Navigation />
        </div>
      </StyledHeaderUpper>

      <StyledHeaderLower>
        <StyledHeaderTextArea>
          <StyledHeadline>Hi, I'm Geraint.</StyledHeadline>
          <StyledTagline>
            Senior Javascript/UI engineer based in London.
          </StyledTagline>
        </StyledHeaderTextArea>
      </StyledHeaderLower>
    </StyledHeaderSectionContent>
  </StyledHeaderSection>
);

export default Header;
