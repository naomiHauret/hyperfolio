import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default (props, children) => {
	const { withClose, title, buttonLabel } = props
	return (
		<div
			class={cxs({
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: ds.get("zIndex.modal"),
			})}
		>
			<div
				class={cxs({
					border: `solid ${ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem")} ${ds.get("colors.border.colorful")}`,
					backgroundColor: ds.get("colors.background.dark"),
				})}
			>
				jjj
			</div>
		</div>
	)
}
