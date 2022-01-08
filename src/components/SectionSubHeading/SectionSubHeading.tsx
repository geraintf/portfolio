import styled from "styled-components";

import { breakpoints, typography } from "src/theme";

const StyledSectionSubHeading = styled.p`
  text-align: center;
  font-size: ${typography.size.sp};
  line-height: ${typography.lineHeight.sp};

  @media ${breakpoints.smallUp} {
    max-width: 80%;
  }

  @media ${breakpoints.largeUp} {
    max-width: 50%;
  }
`;

export default StyledSectionSubHeading;
