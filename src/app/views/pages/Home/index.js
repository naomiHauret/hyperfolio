import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import logo from "assets/images/content/logo.gif"
import cxs from "cxs"
import { homePageTitle, homePageDesc } from "app/routes"

export default () => (state, actions) => {
	return (
		<div
			key="page"
			oncreate={actions.setPageMetaData({
				metaTitle: homePageTitle,
				desc: homePageDesc,
			})}
			onupdate={actions.setPageMetaData({
				metaTitle: homePageTitle,
				desc: homePageDesc,
			})}
			class={cxs({ flexGrow: "1" })}
		>
			<Exit easing="ease-in-out" time={50} css={{ opacity: 0 }}>
				<Enter easing="linear" time={550} css={{ opacity: 1, scrollBehavior: "auto" }}>
					<div key="homepagecontent" class={cxs({ minHeight: "100vh", display: "flex", flexDirection: "column" })}>
						<Video url="https://www.youtube.com/ircCLGXBYCg" type="cover" loop={true} autoplay={true} videoId="ircCLGXBYCg" />

						<img
							class={cxs({
								position: "fixed",
								top: "50%",
								left: "50%",
								width: "900px",
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
