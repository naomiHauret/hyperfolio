import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import AnimatedLogo from "app/views/components/AnimatedLogo"

import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="homepage"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Video
			url="https://www.youtube.com/embed/ircCLGXBYCg"
			type="cover"
			loop={true}
			autoplay={true}
			videoId="ircCLGXBYCg"
		/>
		<AnimatedLogo />
	</div>
)
