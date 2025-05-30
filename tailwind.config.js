/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				// Add custom colors here
				primary: {
					DEFAULT: "#0d3b2e",
					50: "#1f5344"
				},
				secondary: "#6e9874",
				tertiary: "#f2be22",
				//quaternary: "#EF4444",
				gradient_start: '#4c669f',
        			gradient_end: '#3b5998',
			},
		},
	},
	plugins: [],
}