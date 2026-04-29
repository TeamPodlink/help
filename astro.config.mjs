// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			title: 'Podlink Help Center',
			favicon: '/favicon.ico',
			pagination: false,
			customCss: ['./src/styles/tailwind.css'],
			sidebar: [
				{
					label: 'Start Here',
					items: [{ label: 'Getting Started', slug: '' }],
				},
				{
					label: 'Help Articles',
					items: [
						{ label: 'Finding your podcast', slug: 'help/searching' },
						{ label: 'Linking to a podcast', slug: 'help/linking' },
						{ label: 'Why apps are sorted this way', slug: 'help/sorting' },
						{ label: 'Podlink listens in analytics', slug: 'help/analytics' },
						{ label: 'Audio caching and rehosting', slug: 'help/rehosting' },
						{ label: 'Outdated episode or artwork data', slug: 'help/caching' },
						{ label: 'Cookies and app preferences', slug: 'help/cookies' },
						{ label: 'Requesting platform support', slug: 'help/adding-platforms' },
					],
				},
				{
					label: 'Legal',
					items: [
						{ label: 'Privacy Policy', slug: 'legal/privacy-policy' },
						{ label: 'Terms of Use', slug: 'legal/terms-of-use' },
					],
				},
			],
		}),
	],
});
