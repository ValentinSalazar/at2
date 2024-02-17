/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			'xs': {'min': '320px', 'max':'380px'},
			'sm': '576px',
			'md': '768px',
			'lg': '1440px',
			},
		extend: {},
	},
	plugins: [],
}
