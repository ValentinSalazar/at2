/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,vue}'],
	theme: {
		screens:{
			'xs': {'min': '320px', 'max':'380px'},
			'sm': '576px',
			'md': '768px',
			'lg': {'min': '1024px'}
			},
		extend: {},
	},
	plugins: [],
}
