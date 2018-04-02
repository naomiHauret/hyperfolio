import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import DistortedBackground from "app/views/components/DistortedBackground"
import GlitchPortrait from "app/views/components/GlitchPortrait"

export default ({ state, actions, name, metaTitle, desc }) => (
	<Enter css={{ opacity: "0" }}>
		<Exit css={{ opacity: "0", transform: "scale(2.0,2.0)" }}>
			<div oncreate={actions.setPageMetaData({ metaTitle, desc })} onupdate={actions.setPageMetaData({ metaTitle, desc })}>
				<h1>{name}</h1>
				<div>
					<GlitchPortrait />
					<DistortedBackground />
				</div>
			</div>
		</Exit>
	</Enter>
)
