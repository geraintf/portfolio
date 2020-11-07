import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import theme from "src/theme/theme";
import GlobalStyles from "src/theme/GlobalStyles";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Geraint Fisher</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
