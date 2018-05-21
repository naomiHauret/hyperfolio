import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import Branding from "app/views/components/Project/Branding"
import ImagesGallery from "app/views/components/Project/ImagesGallery"
import VideosGallery from "app/views/components/Project/VideosGallery"
import HandwrittenTitle from "app/views/components/HandwrittenTitle"
import { ds } from "assets/styles/theme"
import scrollDown from "./../../../../assets/images/content/scrollDown.gif"
import cxs from "cxs"

export default ({ match }) => (state, actions) => {
	const projectUid = match.params["projectId"]

	return (
		<div
			key="page"
			class={cxs({
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				flexGrow: "1",
				outline: 0,
			})}
		>
			<div
				class={cxs({ display: "none" })}
				key={`project-${projectUid}`}
				oncreate={() => actions.setProjectContent({ uid: projectUid })}
			/>
			<Exit easing="linear" time={50} css={{ display: "none", opacity: 0, overflow: "hidden" }}>
				<Enter
					easing="ease-in-out"
					time={550}
					css={{ transform: "translateX(40%)", opacity: 0, overflow: "hidden", height: 0 }}
				>
					{state.currentProject !== null &&
						state.currentProject !== undefined &&
						state.currentProject.uid === projectUid && (
							<div
								key="projectpage"
								class={cxs({
									minHeight: "100vh",
									display: "flex",
									flexDirection: "column",
									flexGrow: "1",
									height: "auto",
								})}
								ondestroy={() => window.scrollTo(0, 0)}
							>
								<div
									class={cxs({
										flexGrow: 1,
										paddingLeft: ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem"),
										paddingRight: ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem"),
										display: "flex",
										height: "100vh",
										"@media (min-width: 992px)": {
											paddingRight: 0,
										},
									})}
								>
									<div
										class={cxs({
											display: "flex",
											flexDirection: "column",
											flexGrow: 1,
											padding: ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem"),
											margin: "auto",
											"@media (min-width: 992px)": {
												flexDirection: "row",
											},
										})}
									>
										<div
											class={cxs({
												flexGrow: 1,
												height: "410px",
												margin: "auto -35px 40px -35px",
												"@media (min-width: 992px)": {
													margin: "0 0 0 -70px",
												},
												"@media (min-width: 1200px)": {
													height: ds.pxTo(510, ds.get("typo.pxFontSize.base"), "rem"),
												},
												"@media (min-width: 1365px)": {
													height: ds.pxTo(610, ds.get("typo.pxFontSize.base"), "rem"),
												},
											})}
										>
											<Video
												type="project"
												loop={true}
												autoplay={true}
												videoId={state.currentProject.mainVideoId}
												readWarning={state.readWarning}
											/>
										</div>
										<div
											class={cxs({
												justifyContent: "center",
												alignSelf: "center",
												textAlign: "center",
												"@media (min-width: 992px)": {
													textAlign: "left",
													justifyContent: "flex-end",
													alignSelf: "flex-end",
													marginLeft: ds.pxTo(45, ds.get("typo.pxFontSize.base"), "rem"),
												},
											})}
										>
											<div class={cxs({ textTransform: "uppercase", fontSize: "inherit" })}>{state.currentProject.type}</div>
											<div
												class={cxs({
													textDecoration: "uppercase",
													marginBottom: ds.pxTo(8, ds.get("typo.pxFontSize.base"), "rem"),
												})}
											>
												{state.currentProject.client}
											</div>
										</div>
									</div>
								</div>
								<button
									class={cxs({
										backgroundColor: "transparent",
										border: 0,
										color: ds.get("colors.blue"),
										width: ds.pxTo(50, ds.get("typo.pxFontSize.base"), "rem"),
										height: ds.pxTo(50, ds.get("typo.pxFontSize.base"), "rem"),
										margin: "0 auto",
										cursor: "pointer",
										position: "absolute",
										top: "calc(100vh - 70px)",
										left: "50%",
										transform: "translateX(-50%)",
									})}
									onclick={() =>
										window.scrollTo({
											behavior: "smooth",
											left: 0,
											top: window.innerHeight,
										})
									}
								>
									<img src={scrollDown} alt="Scroll down" />
								</button>

								<div
									class={cxs({
										padding: `${ds.pxTo(130, ds.get("typo.pxFontSize.base"), "rem")}
						${ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem")}
						${ds.pxTo(170, ds.get("typo.pxFontSize.base"), "rem")}
					`,
										"@media (min-width: 992px)": {
											padding: `${ds.pxTo(90, ds.get("typo.pxFontSize.base"), "rem")}
							${ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem")}
							${ds.pxTo(170, ds.get("typo.pxFontSize.base"), "rem")}
						`,
										},
									})}
								>
									<div
										class={cxs({
											marginTop: ds.pxTo(150, ds.get("typo.pxFontSize.base"), "rem"),
											marginLeft: "auto",
											marginRight: "auto",
											flexGrow: 1,
											textAlign: "center",
											"@media (min-width: 992px)": {
												marginTop: ds.pxTo(0, ds.get("typo.pxFontSize.base"), "rem"),
												marginLeft: 0,
												marginRight: 0,
												textAlign: "left",
											},
										})}
									>
										<HandwrittenTitle title={state.currentProject.title} />
									</div>
									<div
										class={cxs({
											display: "flex",
											flexDirection: "column-reverse",
											"@media (min-width: 992px)": {
												flexDirection: "row !important",
												justifyContent: "space-between",
											},
										})}
									>
										<div
											class={cxs({
												width: "100%",
												marginTop: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
												"@media (min-width: 992px)": {
													width: "50%",
													marginTop: 0,
												},
												"@media (min-width: 1200px)": {
													width: `${7 / 12 * 100}%`,
												},
											})}
										>
											{state.currentProject.content.map((element) => <p>{element.text}</p>)}
										</div>
										<div class={cxs({ margin: "15px auto 0", "@media (min-width: 992px)": { margin: "35px 0 0 0" } })}>
											<Branding data={state.currentProject.branding} />
										</div>
									</div>
									
								{console.log(state.currentProject.videoGallery)}
									{state.currentProject.videoGallery !== null &&
										state.currentProject.videoGallery.length > 0 && (
											<VideosGallery readWarning={state.readWarning} videos={state.currentProject.videoGallery} />
										)}

									{state.currentProject.imagesGallery !== null &&
										state.currentProject.imagesGallery.length > 0 && (
											<ImagesGallery images={state.currentProject.imagesGallery} />
										)}
								</div>
							</div>
						)}
				</Enter>
			</Exit>
		</div>
	)
}
