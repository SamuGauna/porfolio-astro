/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			screens: {
				'xss': '320px',
				'xs': '480px',
				'sm': '640px', //Mobile
				'md': '768px', //Tablet
				'xl': '1280px' //Monitores grandes
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
