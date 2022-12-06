// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guide di Informatica',
  tagline: 'Il tuo riferimento per diventare un esperto di programmazione',
  url: 'https://guide.mlampis.dev',
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
        title: 'Home',
        logo: {
          alt: 'Home',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {to: '/download', label: 'Download', position: 'left'},
          {to: '/faq', label: 'FAQ', position: 'left'},
          //{to: '/blog', label: 'News', position: 'left'},
          {
            to: 'https://esercizi.mlampis.dev',
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
				label: 'C',
				to: 'docs/category/c',
			  },
              {
                label: 'C++',
                to: 'docs/category/c-1',
              },
			  {
                label: 'Java',
                to: 'docs/category/java',
              },
			  {
                label: 'Python',
                to: 'docs/category/python',
              },
            ],
          },
          {
            title: 'Utili',
            items: [
			  {
                label: 'links',
                to: 'https://links.mlampis.dev',
              },
              {
                label: 'Esercizi',
                to: 'https://esercizi.mlampis.dev',
              },
			  {
                label: 'ripetizioni.it',
                to: 'https://skuolanet.mlampis.dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'PayPal',
                to: 'https://paypal.mlampis.dev',
              },
			  {
                label: 'Google Meet',
                to: 'https://meet.mlampis.dev',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tutoring, realizzato con ♥ da Marco Lampis`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
		additionalLanguages: ["csharp", "java"],
      },
    }),
};

module.exports = config;
