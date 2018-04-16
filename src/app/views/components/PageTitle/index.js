import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ title }) => (
	<h1
		class={cxs({
			fontSize: ds.get("typo.sizes.sm"),
			letterSpacing: ds.pxTo(3.5, ds.get("typo.pxFontSize.sm"), "em"),
			position: "fixed",
			top: "45px",
			left: "50%",
			transform: "translateX(-50%)",
			"::after": {
				content: "' '",
				width: "50px",
				display: "flex",
				height: "1px",
				background: "blue",
				left: "25%",
				top: "50%",
				transform: "rotate(35deg) translateX(-25%) translateY(0)",
				position: "relative",
			},
			"::before": {
				content: "' '",
				width: "50px",
				display: "flex",
				height: "1px",
				background: "blue",
				top: "50%",
				left: "25%",
				transform: "rotate(-35deg) translateX(-25%) translateY(-50%)",
				position: "relative",
			},
		})}
	>
		{title}
	</h1>
)
