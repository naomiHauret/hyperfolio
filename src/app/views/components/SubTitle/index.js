import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ title }) => (
	<div
		class={cxs({
			fontFamily: "BoutiqueScript",
			fontSize: ds.get("typo.sizes.xl"),
			letterSpacing: ds.pxTo(3.5, ds.get("typo.pxFontSize.sm"), "em"),
			position: "relative",
			fontWeight: "bold",
			color: "#1800ff",
			textAlign: "center",
		})}
	>
		<span
			class={cxs({
				fontFamily: "BoutiqueScript",
				height: "50%",
				overflow: "hidden",
				fontSize: ds.get("typo.sizes.xl"),
				letterSpacing: ds.pxTo(3.5, ds.get("typo.pxFontSize.sm"), "em"),
				position: "absolute",
				fontWeight: "bold",
				color: "#0C007D",
			})}
		>
			{title}
		</span>
		{title}
	</div>
)
