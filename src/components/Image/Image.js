import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, srcWebp, loading }) => (
  <picture>
    <source srcSet={srcWebp} type="image/webp" />
    <img src={src} loading={loading} />
  </picture>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcWebp: PropTypes.string,
  loading: PropTypes.string,
};

Image.defaultprops = {
  srcWebp: undefined,
  loading: "auto",
};

export default Image;
