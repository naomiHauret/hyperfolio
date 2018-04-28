import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default (props, children) => (
	<button
		class={cxs({
			boxShadow: "0px 21px 47px -2px rgba(0,0,0,0.55)",
			border: `solid 1px ${ds.get("colors.blue")}`,
			backgroundColor: ds.get("colors.background.dark"),
			color: ds.get("colors.text.link"),
			textTransform: "uppercase",
			fontFamily: "inherit",
			fontSize: "inherit",
			cursor: "pointer",
			width: "100%",
			padding: "15.5px 0",
			"@media (min-width: 768px)": {
				width: "unset",
				padding: "4.5px 22.535px",
			},
		})}
	>
		{children}
	</button>
)
