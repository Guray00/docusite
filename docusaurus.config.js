// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ripetizioni di Informatica',
  tagline: 'Documentazione per le ripetizioni di Informatica',
  url: 'https://doc.mlampis.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Guray00/docusite/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Guray00/docusite/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tutoring',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/materiale', label: 'Materiale', position: 'left'},
          {to: '/faq', label: 'FAQ', position: 'left'},
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://esercizi.mlampis.dev',
            label: 'Esercizi',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'C++',
                to: '/docs/category/c',
              },
            ],
          },
          {
            title: 'Utili',
            items: [
			  {
                label: 'links',
                href: 'https://links.mlampis.dev',
              },
              {
                label: 'Esercizi',
                href: 'https://esercizi.mlampis.dev',
              },
			  {
                label: 'ripetizioni.it',
                href: 'https://skuolanet.mlampis.dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tutoring, realizzato con ♥ da Marco Lampis`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
