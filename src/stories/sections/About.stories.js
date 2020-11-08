import React from "react";

import About from "src/components/sections/About/About";

export default {
  title: "sections/About",
  component: About,
};

const Template = args => <About {...args} />;

export const Default = Template.bind({});
