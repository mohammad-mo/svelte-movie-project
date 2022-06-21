/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sansSerif: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				movies: 'repeat(auto-fit, minmax(15rem, 1fr))',
			},
		},
	},
	plugins: [],
}
