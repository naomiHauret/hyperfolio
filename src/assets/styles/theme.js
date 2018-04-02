import DesignSystem from "design-system-utils"

const fontFamily = {
	text:
		'"Playfair", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
	title: '"Druchilla", Georgia, "Times New Roman", Times, serif',
}

const transitions = {
	duration: "300ms",
	timing: "cubic-bezier(0.77, 0, 0.175, 1)",
}

const colorPalette = {
	black: "#000000",
	white: "#ffffff",
	grey: "#6a6a6a",
	blue: "#1700ff",
	pink: "#ff5eac",
	rainbow: "linear-gradient(-180deg, rgb(255, 226, 159) 0%, rgb(255, 169, 159) 48%, rgb(255, 113, 154) 100%)",
}

export const myDesignSystem = {
	breakpoints: {
		sm: 768,
		md: 992,
		lg: 1200,
		xl: 1440,
		xxl: 1920,
	},

	typo: {
		baseFontSize: "16px",

		sizes: {
			xs: -2,
			s: -1,
			base: 1, // [default] p, h5, h6
			m: 1.5, // h4
			l: 2, // h3
			xl: 3, // h2
			xxl: 4, // h1
		},

		modularscale: {
			base: 16, // should be the same as baseFontSize
			ratio: 1.5,
		},

		fontFamily,
		fontFamilyBase: fontFamily.text,
		fontFamilyHeadings: fontFamily.title,

		lineHeight: {
			headings: 1.1,
		},

		fontWeight: {
			normal: 300, // Useful to set here if using anything other than `normal`
			bold: "bold", // Useful to set here when bold webfonts come as 400 font-weight.
			headings: "bold", // instead of browser default, bold
		},
	},

	colors: {
		...colorPalette,

		background: {
			dark: colorPalette.black,
			light: colorPalette.white,
			colorful: colorPalette.blue,
			rainbow: colorPalette.rainbow,
			placeholders: colorPalette.grey,
		},

		text: {
			paragraph: colorPalette.white,
			title: colorPalette.blue,
			rainbow: colorPalette.pink,
		},
	},

	zIndex: {
		base: 0,
		mid: 2,
		high: 3,
	},

	spacing: {
		baseline: 20,
		padding: "0.3em",
		scale: [0, 8, 16, 24, 32, 40],
	},

	transition: {
		default: {
			duration: transitions.duration,
			timing: transitions.timing,
			transition: `all ${transitions.duration} ${transitions.timing}`,
		},
	},

	borderRadius: {
		button: "0.9375em",
	},
}

export const ds = new DesignSystem(myDesignSystem, {
	useModularScale: true,
	fontSizeUnit: "rem",
})
