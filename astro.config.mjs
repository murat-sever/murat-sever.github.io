// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://murat-sever.github.io',
	integrations: [
		starlight({
			title: 'Murat Sever',
			//defaultColorScheme: 'dark',
			defaultLocale: 'en', // Varsayılan dili İngilizce yapar			
      		locales: {
        		en: { 
          			label: 'English',
          			lang: 'en',
        		},
        		tr: {
          			label: 'Türkçe',
          			lang: 'tr',
        		},
        	},
			social: [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/murat-sever' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/murat-sever-11980727/' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						//{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
