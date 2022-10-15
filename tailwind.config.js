/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
      blue: colors.blue,
      neutral: colors.neutral,
      red: colors.red,

      bluemain: "C3DBFF",

      redfig: "#EFC5C5",
      orangefig: "#FFDAAF",
      yellowfig: "#FFF2AF",
      greenfig: "#E5FFAF",
      bluefig: "#B9F3FF",
      purplefig: "#CFC2FF",
      purplefigsec: "#FAD1FB",

      redfont: "#E71616",
      orangefont: "#EC6300",
      yellowfont: "#786500",
      greenfont: "#4D7300",
      bluefont: "#004F60",
      purplefont: "#5021FF",
      purplefontsec: "#78007B",

		},
		extend: {},
	},
	plugins: [],
};
