import React, { Fragment } from "react";

import Header from "src/components/sections/Header/Header";
import About from "src/components/sections/About/About";
import Work from "src/components/sections/Work/Work";
import Projects from "src/components/sections/Projects/Projects";
import Posts from "src/components/sections/Posts/Posts";
import Contact from "src/components/sections/Contact/Contact";
import Footer from "src/components/sections/Footer/Footer";

const Index = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Work />
      <Projects />
      <Posts />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Index;
