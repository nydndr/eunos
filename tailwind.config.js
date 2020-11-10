module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: ["./components/**/*.js", "./pages/**/*.js"],
	theme: {
		extend: {
			colors: {
				cover: "#FFFFFF",
			},
			fontFamily: {
				fira: ['"FiraGO"', "monospaced"],
				rakkas: ['"Rakkas"', "display"],
				lora: ['"Lora"', "serif"],
			},
			fontSize: {
				"7xl": "5rem",
				"8xl": "8rem",
			},
		},
	},
	variants: { animation: ["responsive"] },
	plugins: [],
};
