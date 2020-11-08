import React from "react";

import Header from "src/components/sections/Header/Header";

export default {
  title: "sections/Header",
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
