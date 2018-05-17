import DesignSystem from "design-system-utils"

const pxFontSize = {
	xs: 13,
	sm: 14,
	base: 16,
	lg: 27.23,
	xl: 50,
	xll: 75,
	xxl: 300,
}

const fontFamily = {
	text:
		'"Playfair", "BoutiqueScript", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
	error: {
		code: '"PassionOne"',
		text: '"Pacifico"',
	},
}

const colorPalette = {
	black: "#000000",
	white: "#ffffff",
	grey: "#6a6a6a",
	greyLighter: "#A7A7A8",
	blue: "#1700ff",
	blueTransparent: "#1700ff73",
	pink: "#ff5eac",
	rainbow: "linear-gradient(-180deg, rgb(255, 226, 159) 0%, rgb(255, 169, 159) 48%, rgb(255, 113, 154) 100%)",
}

export const myDesignSystem = {
	breakpoints: {
		xs: 768,
		sm: 992,
		md: 1200,
		lg: 1440,
		xxl: 1920,
	},
	grid: {
		width: {
			xs: "100%",
			sm: "750px",
			md: "970px",
			lg: "1170px",
			xl: "1280px",
			xxl: "1440px",
		},
	},
	typo: {
		pxFontSize: {
			...pxFontSize,
		},
		sizes: {
			xs: `${pxFontSize.xs / pxFontSize.base}rem`, // ~ 13px ,
			sm: `${pxFontSize.sm / pxFontSize.base}rem`, // ~ 14px ,
			base: 1, // 16px
			lg: `${pxFontSize.lg / pxFontSize.base}rem`, // ~ 27.23px
			xl: `${pxFontSize.xl / pxFontSize.base}rem`, // ~ 50px
			xll: `${pxFontSize.xll / pxFontSize.base}rem`, // ~ 50px
			xxl: `${pxFontSize.xxl / pxFontSize.base}rem`, // ~ 300px
		},
		fontFamily,
		fontFamilyBase: fontFamily.text,
		fontWeight: {
			normal: "normal",
		},
		lineHeight: {
			headings: 1.1,
			paragraph: 1.8,
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
			link: colorPalette.white,
			paragraph: colorPalette.white,
			title: colorPalette.blue,
			input: {
				label: colorPalette.blue,
				value: colorPalette.greyLighter,
			},
			rainbow: colorPalette.pink,
		},
		border: {
			input: colorPalette.blue,
			button: colorPalette.blue,
		},
	},
	zIndex: {
		base: 0,
		mid: 2,
		high: 3,
		aboveAll: 4,
	},
	spacing: {
		frame: 35,
		video: {
			ytWatermark: "50px",
		},
		input: 15.5,
	},
	dimensions: {
		video: {
			cover: {
				width: 1328.77,
				height: 565.472,
			},
			showcase: {
				width: 923,
				height: 491,
			},
		},
	},
	transition: {
		fast: "all 350ms ease-in-out",
	},

	boxShadow: {
		default: `0
			${21 / pxFontSize.base}rem
			${47 / pxFontSize.base}rem
			${-2 / pxFontSize.base}rem
			rgba(0,0,0,0.55)
		`,
	},
}

export const ds = new DesignSystem(myDesignSystem, {
	useModularScale: true,
	fontSizeUnit: "rem",
})
