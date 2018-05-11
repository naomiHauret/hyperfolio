import { h } from "hyperapp"
import cxs from "cxs"

export default () => (
	<div
		class={cxs({
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			width: "900px",
			"@media (min-width: 992px)": {
				width: "1200px",
			},
		})}
	/>
)
