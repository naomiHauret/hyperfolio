import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default () => (
	<div
		class={cxs({
			backgroundImage:
				"radial-gradient(currentColor 10%, transparent 0), radial-gradient(currentColor 10%, transparent 0)",
			backgroundSize: "40px 40px",
			backgroundPosition: " 0 0, 0 0",
			width: "250px",
			height: "200px",
			position: "absolute",
			top: `${70 / 1440 * 100}%`,
			right: `${70 / 1440 * 100}%`,
			color: ds.get("colors.blue"),
			top: "25px",
			zIndex: ds.get("zIndex.mid"),
		})}
	/>
)
