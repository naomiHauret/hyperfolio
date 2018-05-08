import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"

import DistortedImage from "app/views/components/DistortedImage"
import GlitchImage from "app/views/components/GlitchImage"

import portrait from "assets/images/content/portrait.jpg"
import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/displacement.svg"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="aboutpage"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Enter>
			<div
				class={cxs({
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					flexGrow: "1",
				})}
			>
				<GlitchImage id="portrait" src={portrait} />
				<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
			</div>
		</Enter>
	</div>
)
