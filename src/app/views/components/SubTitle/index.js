import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ title }) => (
	<div
		class={cxs({
			fontFamily: "BoutiqueScript",
			fontSize: ds.get("typo.sizes.xll"),
			position: "relative",
			marginRight: "30px",
			color: "#1800ff",
			textAlign: "center",
		})}
	>
		{title}
	</div>
)
