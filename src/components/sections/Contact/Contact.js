import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Section from "../../Section/Section";
import SectionContent from "../../SectionContent/SectionContent";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SectionSubHeading from "../../SectionSubHeading/SectionSubHeading";

const StyledContactSection = styled(Section)`
  /* http://www.heropatterns.com/ */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23dde3e3' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const StyledContactList = styled.ul`
  list-style: none;
  display: flex;
  margin: ${({ theme }) => rem(`${theme.spacing.md}px`)} 0;
  justify-content: center;
`;

const StyledContactListItem = styled.li`
  margin: 0;

  & + & {
    margin-left: ${({ theme }) => rem(`${theme.spacing.md}px`)};
  }
`;

const StyledContactAnchor = styled.a`
  background-image: none;
`;

const data = [
  {
    href: "mailto:geraint.fisher@gmail.com",
    icon: faEnvelope,
  },
  {
    href: "https://github.com/geraintf",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/geraint-fisher/",
    icon: faLinkedinIn,
  },
  {
    href: "https://medium.com/@geraintf",
    icon: faMedium,
  },
  {
    href: "https://twitter.com/geraintf",
    icon: faTwitter,
  },
];

const Contact = () => {
  return (
    <StyledContactSection>
      <SectionContent id="contact">
        <SectionHeading>Contact</SectionHeading>

        <SectionSubHeading>You can find me all over the web.</SectionSubHeading>

        <StyledContactList>
          {data.map(({ href, icon }, i) => (
            <StyledContactListItem key={i}>
              <StyledContactAnchor href={href}>
                <FontAwesomeIcon icon={icon} size="2x" />
              </StyledContactAnchor>
            </StyledContactListItem>
          ))}
        </StyledContactList>
      </SectionContent>
    </StyledContactSection>
  );
};

export default Contact;
