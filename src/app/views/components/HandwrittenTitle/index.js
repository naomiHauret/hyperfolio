import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ title }) => (
	<h2
		class={cxs({
			fontFamily: ds.get("typo.fontFamily.title"),
			fontSize: ds.get("typo.sizes.xxl"),
			fontWeight: ds.get("typo.fontWeight.lightest"),
			background: "linear-gradient(to top, black -57%, #1800ff, #263939)",
			"-webkit-text-fill-color": "transparent",
			"-webkit-background-clip": "text",
			color: "blue",
			marginBottom: 0,
			lineHeight: ds.pxTo(75, ds.get("typo.pxFontSize.base"), "rem"),
		})}
	>
		{title}
	</h2>
)
