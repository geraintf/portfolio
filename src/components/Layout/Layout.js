import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import GlobalStyles from "src/theme/GlobalStyles";

const Layout = ({ children }) => {
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G4Y7QD6DXC"
        />
        <script type="text/javascript">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G4Y7QD6DXC');
          `}
        </script>
        <script type="text/javascript">
          {`
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:2088131,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
        ;
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
