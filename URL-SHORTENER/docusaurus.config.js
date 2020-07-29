module.exports = {
  title: "Url Shortener",
  tagline: "An API to shorten URL's",
  url: "https://MSanjaySharma.io",
  baseUrl: "/URL-SHORTENER/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "MSanjaySharma",
  projectName: "URL-SHORTENER",
  themeConfig: {
    navbar: {
      title: "Url Shortener",
      logo: {
        alt: "Url Shortener",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "API Docs",
          position: "left",
        },
        {
          href: "https://github.com/MSanjaySharma/URL-SHORTENER",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Url Shortener.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          homePageId: "getting-started",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
