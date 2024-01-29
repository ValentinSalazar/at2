/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			'xs': {'min': '320px', 'max':'380px'},
			
			
		},
		extend: {},
	},
	plugins: [],
}
