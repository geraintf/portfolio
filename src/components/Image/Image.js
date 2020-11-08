import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, srcWebp, loading, alt }) => (
  <picture>
    <source srcSet={srcWebp} type="image/webp" />
    <img src={src} loading={loading} alt={alt} />
  </picture>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcWebp: PropTypes.string,
  loading: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultprops = {
  srcWebp: undefined,
  loading: "auto",
  alt: "",
};

export default Image;
