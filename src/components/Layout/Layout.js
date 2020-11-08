import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import GlobalStyles from "src/theme/GlobalStyles";

ReactGA.initialize("G-G4Y7QD6DXC");

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.ctfassets.net" />
      <meta charSet="utf-8" />
      <title>Geraint Fisher</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <GlobalStyles />
    {children}
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
