import * as path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'~components': path.resolve(__dirname, './src/components'),
			'~interfaces': path.resolve(__dirname, './src/interfaces'),
			'~lib': path.resolve(__dirname, './src/lib'),
			'~constants': path.resolve(__dirname, './src/constants'),
			'~pages': path.resolve(__dirname, './src/pages'),
			'@': path.resolve(__dirname, './src'),
		},
	}

};

export default config;
