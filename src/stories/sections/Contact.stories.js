import React from "react";

import Contact from "src/components/sections/Contact/Contact";

export default {
  title: "sections/Contact",
  component: Contact,
};

const Template = args => <Contact {...args} />;

export const Default = Template.bind({});
