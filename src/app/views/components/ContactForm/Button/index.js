import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default (props, children) => (
	<button
		class={cxs({
			boxShadow: ds.get("boxShadow.default"),
			borderStyle: "solid",
			borderWidth: ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem"),
			borderColor: ds.get("colors.border.button"),
			backgroundColor: ds.get("colors.background.dark"),
			color: ds.get("colors.text.link"),
			textTransform: "uppercase",
			fontFamily: "inherit",
			fontSize: "inherit",
			cursor: "pointer",
			width: "100%",
			padding: `${ds.pxTo(ds.get("spacing.input"), ds.get("typo.pxFontSize.base"), "rem")} 0`,
			transition: ds.get("transition.fast"),
			":focus": {
				backgroundColor: ds.get("colors.background.colorful"),
			},
			"@media (min-width: 768px)": {
				width: "unset",
				padding: "4.5px 22.535px",
				padding: `
					${ds.pxTo(4.5, ds.get("typo.pxFontSize.base"), "rem")}
					${ds.pxTo(22.535, ds.get("typo.pxFontSize.base"), "rem")}
				`,
				":hover": {
					backgroundColor: ds.get("colors.background.colorful"),
				},
			},
		})}
	>
		{children}
	</button>
)
