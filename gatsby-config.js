require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f3sf7jzjujvy`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fredoka+One`, `karla:400`, `rubik:600`],
        display: "block",
      },
    },
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
  ],
};
