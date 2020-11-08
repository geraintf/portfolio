import React, { Fragment } from "react";

import Header from "src/components/sections/Header/Header";
import About from "src/components/sections/About/About";
import Work from "src/components/sections/Work/Work";
import Projects from "src/components/sections/Projects/Projects";
import Posts from "src/components/sections/Posts/Posts";
import Contact from "src/components/sections/Contact/Contact";
import Footer from "src/components/sections/Footer/Footer";
import ScrollToTop from "src/components/ScrollToTop/ScrollToTop";

const Index = () => (
  <Fragment>
    <Header />
    <div
      style={{
        height: "80px",
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",

        borderBottom: "5px solid #536565",
        marginTop: "-80px",
      }}
    ></div>
    <About />
    <Work />
    <Projects />
    <Posts />
    <Contact />
    <Footer />
    <ScrollToTop />
  </Fragment>
);

export default Index;
