import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import AnimatedLogo from "app/views/components/AnimatedLogo"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => {
	return (
		<div
			key="page"
			oncreate={actions.setPageMetaData({ metaTitle, desc })}
			onupdate={actions.setPageMetaData({ metaTitle, desc })}
			class={cxs({
				flexGrow: "1",
			})}
		>
			<Exit easing="linear" time={450} css={{ opacity: 0 }}>
				<Enter easing="linear" time={250} css={{ opacity: 1 }}>
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
				</Enter>
			</Exit>
		</div>
	)
}
