import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import AnimatedLogo from "app/views/components/AnimatedLogo"

import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="page"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		class={cxs({
			flexGrow: "1",
		})}
	>
		<Exit easing="ease-in-out" time={550} css={{ transform: "translateY(-80%)", opacity: 0 }}>
			<div
				key="homepagecontent"
				class={cxs({
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
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
		</Exit>
	</div>
)
