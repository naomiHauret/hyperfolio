import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import Video from "app/views/components/Video"
import HandwrittenTitle from "app/views/components/HandwrittenTitle"
import { ds } from "assets/styles/theme"
import postcssJs from "postcss-js"
import postcssPlacehold from "postcss-placehold"
import scrollDown from "assets/images/content/scrollDown.gif"
import cxs from "cxs"

let placehold = postcssJs.sync([postcssPlacehold])
let style = placehold({
	background: "placehold(400, 400)",
})

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
		})}
		oncreate={actions.setProjectContent({uid: projectUid})}
	>
		<Exit easing="linear" time={50} css={{ display: "none", opacity: 0, overflow: "hidden", }}>
			<Enter
				easing="ease-in-out"
				time={500}
				css={{
					transform: "translateX(40%)",
					opacity: 0,
					overflow: "hidden",
				}}
			>
			{state.currentProject !== null && state.currentProject !== undefined && state.currentProject.uid === projectUid &&
				<div
					key="projectpage"
					class={cxs({
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",
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
								<div
									class={cxs({
										textTransform: "uppercase",
										fontSize: "inherit",
									})}
								>
									{state.currentProject.type}
								</div>
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
						onclick={() => window.scrollTo(0, window.innerHeight)}
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
								{console.log(state.currentProject)}
								{state.currentProject.content.map(element =>
									<p>{element}</p>)}
							</div>
							<div
								class={cxs({
									width: ds.pxTo(370, ds.get("typo.pxFontSize.base"), "rem"),
									height: ds.pxTo(130, ds.get("typo.pxFontSize.base"), "rem"),
									margin: "15px auto 0",
									"@media (min-width: 992px)": {
										margin: "35px 0 0 0",
									},
								})}
							>
								<img
									src=""
									class={cxs(
										placehold({
											width: "100%",
											height: "100%",
											background: "placehold(129, 371)",
											objectFit: "cover",
											objectPosition: "center",
										}),
									)}
								/>
							</div>
						</div>
						<div
							class={cxs({
								display: "flex",
								flexWrap: "wrap",
								"@media (min-width: 992px)": {
									"> div": {
										width: "100%",
										height: "35vh",
										"@media (min-width: 992px)": {
											maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
											width: "100%",
											height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
										},

										"@media (min-width: 1200px)": {
											maxWidth: "unset",
											"> img": {
												maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
											},
										},
										":nth-child(odd)": {
											marginLeft: "auto",
											textAlign: "right",
										},
										":nth-child(even)": {
											marginRight: "auto",
											textAlign: "left",
										},
										":nth-child(2n+0)": {
											marginTop: "-15%",
										},
										":nth-child(3n+0)": {
											margin: "0 auto",
										},
										":nth-last-child(-n+2)": {
											width: "50%",
											margin: 0,
											marginTop: "15%",
										},
									},
								},
							})}
						>
							<div>
								<img
									src=""
									class={cxs(
										placehold({
											width: "100%",
											height: "100%",
											background: "placehold(300, 450)",
											objectFit: "contain",
											objectPosition: "center",

											"@media (min-width: 992px)": {
												cursor: "nesw-resize",
												filter: "blur(5px)",
												transition: "linear 250ms",
												":hover": {
													filter: "blur(0)",
												},
											},
										}),
									)}
								/>
							</div>
						</div>
					</div>
				</div>
			}
			</Enter>
		</Exit>
	</div>
)}
