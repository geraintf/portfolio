import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { spacing, colors } from "src/theme";

import Section from "src/components/Section/Section";
import SectionContent from "src/components/SectionContent/SectionContent";
import SectionHeading from "src/components/SectionHeading/SectionHeading";
import SectionSubHeading from "src/components/SectionSubHeading/SectionSubHeading";

const StyledContactSection = styled(Section)`
  /* http://www.heropatterns.com/ */
  background-color: ${colors.base.white};
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='${encodeURIComponent(
    colors.secondary
  )}' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const StyledContactList = styled.ul`
  display: flex;
  margin: ${spacing.md} 0;
  justify-content: center;
`;

const StyledContactListItem = styled.li`
  margin: 0;

  & + & {
    margin-left: ${spacing.md};
  }
`;

const data = [
  {
    href: "mailto:geraint.fisher@gmail.com",
    alt: "Email",
    icon: faEnvelope,
  },
  {
    href: "https://github.com/geraintf",
    alt: "Github",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/geraint-fisher/",
    alt: "LinkedIn",
    icon: faLinkedinIn,
  },
  {
    href: "https://medium.com/@geraintf",
    alt: "Medium",
    icon: faMedium,
  },
  {
    href: "https://twitter.com/geraintf",
    alt: "Twitter",
    icon: faTwitter,
  },
];

const Contact = () => (
  <StyledContactSection>
    <SectionContent id="contact">
      <SectionHeading>Contact</SectionHeading>

      <SectionSubHeading>Get in touch.</SectionSubHeading>

      <StyledContactList>
        {data.map(({ href, icon, alt }, i) => (
          <StyledContactListItem key={i}>
            <a href={href}>
              <span className="visually-hidden">{alt}</span>
              <FontAwesomeIcon icon={icon} size="2x" />
            </a>
          </StyledContactListItem>
        ))}
      </StyledContactList>
    </SectionContent>
  </StyledContactSection>
);

export default Contact;
