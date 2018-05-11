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
			pointerEvents: "none",
			width: ds.pxTo(250, ds.get("typo.pxFontSize.base"), "rem"),
			height: ds.pxTo(200, ds.get("typo.pxFontSize.base"), "rem"),
			position: "fixed",
			top: `${ds.get("spacing.frame") * 2 / 1440 * 100}%`,
			right: `${ds.get("spacing.frame") * 2 / 1440 * 100}%`,
			transform: "translateX(33px)",
			color: ds.get("colors.blue"),
			top: `${ds.get("spacing.frame") + 20}px`,
			zIndex: ds.get("zIndex.aboveGodView"),
		})}
	/>
)
