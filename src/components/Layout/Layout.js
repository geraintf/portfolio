import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import GlobalStyles from "src/theme/GlobalStyles";

import { initializeAnalytics, sendPageView } from "src/utils/analytics";

//initializeAnalytics();

const Layout = ({ children }) => {
  useEffect(() => {
    sendPageView();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.ctfassets.net" />
        <meta charSet="utf-8" />
        <title>Geraint Fisher</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
      </Helmet>
      <GlobalStyles />
      {children}
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
