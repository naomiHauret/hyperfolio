import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import logo from "assets/images/content/logo.gif"
import cxs from "cxs"

export default () => (state, actions) => {
	return (
		<div key="page" class={cxs({ flexGrow: "1" })} >
			<Exit easing="ease-in-out" time={50} css={{ opacity: 0 }}>
				<Enter easing="linear" time={550} css={{ opacity: 0, overflow: "hidden" }}>
					<div key="homepagecontent" class={cxs({ minHeight: "100vh", display: "flex", flexDirection: "column" })}  oncreate={() => actions.setHomeContent(state, actions)}>
						{state.homeVideoId && <Video type="cover" loop={true} autoplay={true} videoId={state.homeVideoId} />}

						<img
							class={cxs({
								position: "fixed",
								top: "50%",
								left: "50%",
								maxWidth: "900px",
								transform: "translate(-50%, -50%)",
							})}
							src={logo}
							alt="Inès Guerrini"
						/>
					</div>
				</Enter>
			</Exit>
		</div>
	)
}
