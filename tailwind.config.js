module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	corePlugins: {
		container: false,
	},
	theme: {
		screens: {
			md: "768px",
			lg: "992px",
			xl: "1200px",
			widescreen: "1500px",
			sm: { max: "992px" },
			mobile: { max: "768px" },
		},
		extend: {
			screens: {
				ccs: "1300px",
			},
			maxWidth: {
				"2xs": "12rem",
				sm: "30rem",
				md: "40rem",
				lg: "50rem",
				xl: "60rem",
				"2/3": "75%",
			},
			maxHeight: {
				none: "none",
				"90vh": "90vh",
			},
			fontFamily: {
				IranSans: ["IranSans", "sans-serif"],
				IranSansFD: ["IranSansFD", "sans-serif"],
				IranYekan: ["IranYekanWeb", "sans-serif"],
			},
			fontSize: {
				"3xs": "0.6rem",
				"2xs": ".6666rem",
				xs: "0.834rem",
				sm: "0.9rem",
				lg: "1.0666rem",
				"2lg": "1.134rem",
				"3lg": "1.2rem",
				xl: "1.33333rem",
				"2xl": "1.7rem",
				"3xl": "2.2rem",
				"4xl": "2.4rem",
				"5xl": "2.6666rem",
				"6xl": "3.333rem",
			},
			borderRadius: {
				xl: "0.9rem",
				"2xl": "1.25rem",
			},
			opacity: {
				3: "0.03",
				97: "0.97",
			},
		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					width: "100%",
					"@screen md": {
						margin: "0 auto",
						maxWidth: "100%",
					},
					"@screen xl": {
						maxWidth: "1130px",
					},
					"@screen ccs": {
						maxWidth: "1200px",
					},
				},
			});
		},
	],
};
