/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
	{
		type: 'category',
		label: 'C',
		link: {
			type: 'generated-index',
		 },
		items: [
		'c/introduzione',
		'c/main',
		'c/variabili',
		'c/if',
		'c/switch',
		'c/for',
		'c/while',
		'c/do-while',
		'c/array',
		'c/string',
		'c/struct',
		'c/funzioni',
		`c/ricorsione`,
		'c/file',
		'c/alg_ordinamento',
		],
	},

    {
      type: 'category',
      label: 'C++',
	  link: {
         type: 'generated-index',
      },
      items: [
		'cpp/introduzione',
		'cpp/variabili',
		'cpp/if',
		'cpp/switch',
		'cpp/for',
		'cpp/while',
		'cpp/do-while',
		'cpp/array',
		'cpp/vettori',
		'cpp/stringhe',
		'cpp/struct',
		'cpp/puntatori',
	  ],
    },

	{
		type: 'category',
		label: 'Java',
		link: {
		  type: 'generated-index',
		},
		items: [
		  'java/introduzione',
		  'java/variabili',
		  'java/if',
		  'java/switch',
		  'java/for',
		  'java/while',
		  'java/do-while',
		  'java/array',
		  'java/string',
		],
	  },

	{
		type: 'category',
		label: 'Python',
		link: {
			type: 'generated-index',
		},
		items: [
		'python/introduzione',
		'python/tipi',
		'python/variabili',
		'python/print',
		'python/input',
		'python/comment',
		'python/if',
		'python/for',
		'python/while',
		'python/turtle',
		'python/liste',
		'python/tuple',
		'python/main',
		{
			type: 'category',
			label: 'OOP',
			link: {
			  type: 'generated-index',
			},
			items: [
				'python/oop/oop',
				'python/oop/metodi',
			],
		  },
		],
	},

	{
		type: 'category',
		label: 'Teoria della complessità',
		link: {
			type: 'generated-index',
		},
		items: [
		'computabilita/introduzione',
		'computabilita/p_and_np',
		'computabilita/halt_problem',
		'computabilita/sat',
		'computabilita/somme_parziali',
		'computabilita/zaino',
		'computabilita/tsp',
	],
	},

	{
		type: 'category',
		label: 'Calcolo Numerico',
		link: {
			type: 'generated-index',
		},
		items: [
		'calcolo_numerico/introduzione',
		'calcolo_numerico/approssimazione_radice',
		'calcolo_numerico/zeri_funzione',
	],
	},


  ],
   
};

module.exports = sidebars;
