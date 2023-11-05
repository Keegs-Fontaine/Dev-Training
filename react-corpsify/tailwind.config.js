/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"clr-primary-100": "hsla(216, 48%, 48%, 1)",
				"clr-primary-200": "hsla(101, 23%, 33%, 1)",
				"clr-primary-300": "hsla(101, 46%, 85%, 1)",
			},
		},
	},
	plugins: [],
}
