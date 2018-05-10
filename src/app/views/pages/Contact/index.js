import { h } from "hyperapp"
import { Enter, Exit, Move } from "@hyperapp/transitions"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import DistortedImage from "app/views/components/DistortedImage"
import ContactForm from "app/views/components/ContactForm"
import PageTitle from "app/views/components/PageTitle"

import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/distortion.jpg"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="page"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Move time={250} css={{ opacity: 0 }}>
			<Exit easing="linear" time={250} css={{ opacity: 0 }}>
				<Enter easing="ease-in-out" time={450} css={{ transform: "translateY(45%)", opacity: 1 }}>
					<div
						key="contactcontent"
						class={cxs({
							minHeight: "100vh",
							display: "flex",
							flexDirection: "column",
							flexGrow: "1",
							width: "100%",
							margin: "auto",
							justifyContent: "center",
							zIndex: ds.get("zIndex.aboveAll"),
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
						<PageTitle title="Contact" />
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
			</Exit>
		</Move>
	</div>
)
