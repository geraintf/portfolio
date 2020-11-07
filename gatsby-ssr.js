const React = require("react");
const Layout = require("./src/components/Layout/Layout").default;

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

module.exports = {
  wrapPageElement,
};
