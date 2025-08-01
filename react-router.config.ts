import type { Config } from '@react-router/dev/config';

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	// ssr: true,
	async prerender() {
		// This function is called during the build process to generate static pages
		// Return an array of paths to prerender
		return ['/', '/about', '/posts', '/posts/1', '/store', '/store/products', '/dashboard', '/dashboard/settings'];
	},
} satisfies Config;
