import { h } from "hyperapp"
import { Enter } from "@hyperapp/transitions"
import cxs from "cxs"
import DistortedImage from "app/views/components/DistortedImage"

import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/displacement.svg"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="contactpage"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
	>
		<Enter easing="ease-in-out" time={1000} css={{ transform: "translateY(-100%)" }}>
			<div>
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
								border: "solid 1px blue",
								backgroundColor: "transparent",
							})}
						/>
					</label>
					<label>
						<div>Email</div>
						<input
							type="email"
							class={cxs({
								border: "solid 1px blue",
								backgroundColor: "transparent",
							})}
						/>
					</label>
					<label>
						<div>Subject</div>
						<input
							type="text"
							class={cxs({
								border: "solid 1px blue",
								backgroundColor: "transparent",
							})}
						/>
					</label>
					<label>
						<div>Message</div>
						<textarea
							class={cxs({
								border: "solid 1px blue",
								backgroundColor: "transparent",
							})}
						/>
					</label>
					<button
						class={cxs({
							border: "solid 1px blue",
							backgroundColor: "transparent",
							color: "white",
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
