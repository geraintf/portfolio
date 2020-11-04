import React, { Fragment } from "react";

import Header from "../components/sections/Header/Header";
import About from "../components/sections/About/About";
import Work from "../components/sections/Work/Work";
import Projects from "../components/sections/Projects/Projects";
import Posts from "../components/sections/Posts/Posts";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/sections/Footer/Footer";

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
