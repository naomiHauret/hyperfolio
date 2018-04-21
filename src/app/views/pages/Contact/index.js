import { h } from "hyperapp"
import { Enter } from "@hyperapp/transitions"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import DistortedImage from "app/views/components/DistortedImage"

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
		<Enter easing="ease-in-out" time={1000} css={{ transform: "translateY(100%)" }}>
			<div
				class={cxs({
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					flexGrow: "1",
					width: "620px",
					margin: "auto",
					justifyContent: "center",
					"::after": {
						content: "' '",
						width: "1px",
						height: "calc(100vh - 150px)",
						backgroundColor: ds.get("colors.blue"),
						position: "absolute",
						left: "50%",
						top: "70px",
						transform: "translateX(-50%)",
					},
				})}
			>
				<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
				<form
					class={cxs({
						display: "flex",
						flexDirection: "column",
					})}
				>
					<label>
						<div>Name</div>
						<input
							type="text"
							class={cxs({
								border: `solid 1px ${ds.get("colors.blue")}`,
								backgroundColor: "transparent",
								fontFamily: "inherit",
								color: ds.get("colors.blue"),
							})}
						/>
					</label>
					<label>
						<div>Email</div>
						<input
							type="email"
							class={cxs({
								border: `solid 1px ${ds.get("colors.blue")}`,
								backgroundColor: ds.get("colors.background.dark"),
								fontFamily: "inherit",
								color: ds.get("colors.blue"),
							})}
						/>
					</label>
					<label>
						<div>Subject</div>
						<input
							type="text"
							class={cxs({
								border: `solid 1px ${ds.get("colors.blue")}`,
								backgroundColor: ds.get("colors.background.dark"),
								fontFamily: "inherit",
								color: ds.get("colors.blue"),
							})}
						/>
					</label>
					<label>
						<div>Message</div>
						<textarea
							class={cxs({
								border: `solid 1px ${ds.get("colors.blue")}`,
								backgroundColor: ds.get("colors.background.dark"),
								fontFamily: "inherit",
								color: ds.get("colors.blue"),
							})}
						/>
					</label>
					<button
						class={cxs({
							border: `solid 1px ${ds.get("colors.blue")}`,
							backgroundColor: ds.get("colors.background.dark"),
							color: ds.get("colors.text.light"),
							textTransform: "uppercase",
							fontFamily: "inherit",
						})}
					>
						Submit
					</button>
				</form>
			</div>
		</Enter>
	</div>
)
