import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import GlobalStyles from "src/theme/GlobalStyles";

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
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
