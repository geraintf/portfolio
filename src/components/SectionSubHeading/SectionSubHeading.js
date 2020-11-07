import styled from "styled-components";
import { rem } from "polished";
import breakpoints from "src/theme/breakpoints";

const StyledSectionSubHeading = styled.p`
  text-align: center;
  font-size: ${rem("14px")};

  @media ${breakpoints.smallUp} {
    max-width: 80%;
  }

  @media ${breakpoints.mediumUp} {
    max-width: 80%;
  }

  @media ${breakpoints.largeUp} {
    max-width: 50%;
  }
`;

export default StyledSectionSubHeading;
