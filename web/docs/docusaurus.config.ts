import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "GenZ.js",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.svg",

  future: {
    v4: true,
  },

  url: "https://genz.vercel.app",
  baseUrl: "/docs/",

  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "warn", // Changed from "throw" to "warn"
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        pages: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "GenZ.js",
      logo: {
        alt: "Genz.js Logo",
        src: "img/logo.svg",
        href: "/", // Changed from "/intro/" to "/"
      },
      items: [
        {
          href: "https://genz-js.vercel.app",
          label: "Home",
          position: "right",
        },
        {
          href: "https://github.com/Nebulaz7/gen-z.js",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://genz-js.vercel.app/examples",
          label: "Examples",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
