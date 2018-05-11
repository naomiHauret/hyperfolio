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
			fontWeight: "normal",
			zIndex: ds.get("zIndex.aboveGodView"),
			"::after": {
				content: "' '",
				display: "flex",
				backgroundColor: ds.get("colors.blue"),
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%) rotate(50deg)",
				height: "50px",
				width: "1px",
			},
			"::before": {
				content: "' '",
				display: "flex",
				backgroundColor: ds.get("colors.blue"),
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%) rotate(-50deg)",
				height: "50px",
				width: "1px",
			},
		})}
	>
		{title}
	</h1>
)
