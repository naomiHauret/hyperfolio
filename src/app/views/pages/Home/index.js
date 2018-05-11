import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import logo from "assets/images/content/logo.gif"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => {
	return <div key="page" oncreate={actions.setPageMetaData({
				metaTitle,
				desc,
			})} onupdate={actions.setPageMetaData({ metaTitle, desc })} class={cxs({ flexGrow: "1" })}>
			<Exit easing="linear" time={150} css={{ opacity: 0 }}>
				<Enter easing="linear" time={250} css={{ opacity: 1 }}>
					<div key="homepagecontent" class={cxs({ minHeight: "100vh", display: "flex", flexDirection: "column" })}>
						<Video url="https://www.youtube.com/ircCLGXBYCg" type="cover" loop={true} autoplay={true} videoId="ircCLGXBYCg" />

							<img class={cxs({
									position: "fixed",
									top: "50%",
									left: "50%",
									width: "900px",
									transform: "translate(-50%, -50%)",
								})} src={logo} alt="Inès Guerrini"
							/>
					</div>
				</Enter>
			</Exit>
		</div>
}
