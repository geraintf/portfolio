const sizes = {
  small: "500px",
  medium: "700px",
  large: "900px",
  xlarge: "1200px",
};

const breakpoints = {
  smallUp: `(min-width: ${sizes.small})`,
  mediumUp: `(min-width: ${sizes.medium})`,
  largeUp: `(min-width: ${sizes.large})`,
  xLargeUp: `(min-width: ${sizes.xlarge})`,
};

export default breakpoints;
