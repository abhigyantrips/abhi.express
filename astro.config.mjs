// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.DEV ? "http://localhost:4321" : "https://abhi.express",
	output: "static",

	session: {
		driver: {
			entrypoint: "unstorage/drivers/null",
		},
	},

	adapter: cloudflare({
		imageService: "cloudflare",
	}),

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Instrument Serif",
			cssVariable: "--font-display",
		},
		{
			provider: fontProviders.fontsource(),
			name: "PT Serif",
			cssVariable: "--font-serif",
		},
	],

	integrations: [sitemap()],

	vite: {
		plugins: [tailwindcss()],
	},
});
