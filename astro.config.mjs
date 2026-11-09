// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
// Update `site` after Cloudflare gives you a pages.dev URL (or custom domain).
export default defineConfig({
	site: 'https://net-notes.pages.dev',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/cwna': '/certification/cwnp/cwna',
		'/wlan': '/technology/network',
	},
	markdown: {
		remarkPlugins: [remarkGfm],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['Georgia', 'serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
