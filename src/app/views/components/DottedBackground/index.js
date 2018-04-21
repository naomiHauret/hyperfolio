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
			top: `${ds.get("spacing.frame") * 2 / 1440 * 100}%`,
			right: `${ds.get("spacing.frame") * 2 / 1440 * 100}%`,
			transform: "translateX(33px)",
			color: ds.get("colors.blue"),
			top: `${ds.get("spacing.frame") + 20}px`,
			zIndex: ds.get("zIndex.mid"),
		})}
	/>
)
