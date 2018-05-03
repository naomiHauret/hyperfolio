import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default () => (
	<div
		class={cxs({
			position: "fixed",
			width: "50%",
			height: "100%",
			left: "0",
			top: "60px",
			borderRight: "1px solid " + ds.get("colors.blue"),
			zIndex: "0",
		})}
	/>
)
