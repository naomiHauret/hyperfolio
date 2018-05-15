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

export default ({ match }) => (state, actions) => (
	<div
		key="page"
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Exit easing="linear" time={50} css={{ opacity: 0 }}>
			<Enter
				easing="ease-in-out"
				time={500}
				css={{
					transform: "translateX(40%)",
					opacity: 1,
					scrollBehavior: "auto",
				}}
			>
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
								onmousewheel={() => window.scrollTo(0, 5000)}
							>
								<Video
									url="https://www.youtube.com/embed/qvh6VhKlTyA"
									type="project"
									loop={true}
									autoplay={true}
									videoId="qvh6VhKlTyA"
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
									Brand identity
								</div>
								<div
									class={cxs({
										textDecoration: "uppercase",
										marginBottom: ds.pxTo(8, ds.get("typo.pxFontSize.base"), "rem"),
									})}
								>
									Music group techno dark
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
							<HandwrittenTitle title="Stupid project title" />
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
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
									dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
									suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
									vulputate velit esse molestie consequat, vel illum Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
									sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
									veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
									dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
									suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
									vulputate velit esse molestie consequat, vel illum Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
									sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
									veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
								</p>
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
							<div
								class={cxs({
									width: "100%",
									height: "35vh",
									"@media (min-width: 992px)": {
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
										width: "75%",
										height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
								<img
									src="https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk="
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
							<div
								class={cxs({
									width: "100%",
									height: "35vh",
									"@media (min-width: 992px)": {
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
										width: "75%",
										height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
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
													filter: "blur",
												},
											},
										}),
									)}
								/>
							</div>
							<div
								class={cxs({
									width: "100%",
									height: "35vh",
									"@media (min-width: 992px)": {
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
										width: "75%",
										height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
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
							<div
								class={cxs({
									width: "100%",
									height: "35vh",
									"@media (min-width: 992px)": {
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
										width: "75%",
										height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
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
							<div
								class={cxs({
									width: "100%",
									height: "35vh",
									"@media (min-width: 992px)": {
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
										width: "75%",
										height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
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
							<div
								class={cxs({
									width: "100%",
									height: "35vh",
									"@media (min-width: 992px)": {
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
										width: "75%",
										height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
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
			</Enter>
		</Exit>
	</div>
)
