import { h } from "hyperapp"
import { Enter } from "@hyperapp/transitions"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import DistortedImage from "app/views/components/DistortedImage"
import ContactForm from "app/views/components/ContactForm"

import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/displacement.svg"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="contactpage"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Enter easing="ease-in-out" delay={250} time={750} css={{ transform: "translateY(5%)" }}>
			<div
				class={cxs({
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					flexGrow: "1",
					width: "100%",
					margin: "auto",
					justifyContent: "center",
					"::after": {
						content: "' '",
						width: "1px",
						height: 0,
						backgroundColor: ds.get("colors.blue"),
						position: "absolute",
						left: "50%",
						top: "70px",
						transform: "translateX(-50%)",
						animationName: "unfold",
						animationFillMode: "forwards",
						animationDelay: "750ms",
						animationDuration: "750ms",
					},
					"@media (min-width: 768px)": {
						width: "620px",
					},
				})}
			>
				<div
					class={cxs({
						width: "100%",
						position: "absolute",
						pointerEvents: "none",
						zIndex: ds.get("zIndex.aboveAll"),
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						"@media (min-width: 768px)": {
							width: `670px`,
						},
					})}
				>
					<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
				</div>
				<ContactForm actions={actions} />
			</div>
		</Enter>
	</div>
)
