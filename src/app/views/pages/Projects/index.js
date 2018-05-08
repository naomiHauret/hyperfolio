import { h } from "hyperapp"
import Project from "app/views/components/Project"
import Video from "app/views/components/Video"
import { Switch, Route, Link } from "@hyperapp/router"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import postcssJs from "postcss-js"
import postcssPlacehold from "postcss-placehold"
let placehold = postcssJs.sync([postcssPlacehold])
let style = placehold({
	background: "placehold(400, 400)",
})

export default ({ state, actions, name, metaTitle, desc, match }) => (
	<div
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		key="page"
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<div
			key="projectspage"
			class={cxs({
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				flexGrow: "1",
			})}
		>
			<ul
				class={cxs({
					zIndex: ds.get("zIndex.high"),
					padding: 0,
					margin: 0,
					listStyle: "none",
					"> li": {
						cursor: "pointer",
						transition: ds.get("transition.fast"),
						"> a": {
							display: "block",
							height: "100%",
							width: "100%",
							padding: ds.pxTo(5, ds.get("typo.pxFontSize.base"), "rem"),
							color: ds.get("colors.text.link"),
							textDecoration: "none",
							letterSpacing: ds.pxTo(3.5, ds.get("typo.pxFontSize.base"), "em"),
						},
						"::after": {
							content: "' '",
							width: "125%",
							height: ds.pxTo(1, ds.get("typo.pxFontSize.base"), "em"),
							backgroundColor: ds.get("colors.background.colorful"),
							display: "block",
							transition: ds.get("transition.fast"),
							position: "absolute",
							top: "50%",
							right: 0,
							transform: "translateY(-50%)",
						},
						":hover": {
							fontSize: ds.get("typo.sizes.sm"),
							"::after": {
								width: 0,
							},
						},
					},
				})}
			>
				<li
					class={cxs({
						position: "fixed",
						top: "50%",
						transform: "translateX(-50%) rotate(-90deg)",
						left: ds.pxTo(20, ds.get("typo.pxFontSize.base"), "rem"),

						"@media (min-width: 992px)": {
							left: ds.pxTo(57, ds.get("typo.pxFontSize.base"), "rem"),
						},
					})}
				>
					<Link to={`${match.url}/:projectId`}>Previous</Link>
				</li>
				<li
					class={cxs({
						position: "fixed",
						top: "50%",
						right: ds.pxTo(-33, ds.get("typo.pxFontSize.base"), "rem"),
						transform: "translateX(-50%) rotate(-90deg)",

						"@media (min-width: 992px)": {
							right: ds.pxTo(0, ds.get("typo.pxFontSize.base"), "rem"),
						},
					})}
				>
					<Link to={`${match.url}/:projectId`}>Next</Link>
				</li>
			</ul>

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
						<h1
							class={cxs({
								textTransform: "uppercase",
								fontSize: "inherit",
								fontWeight: "inherit",
							})}
						>
							Brand identity
						</h1>
						<h2
							class={cxs({
								textDecoration: "uppercase",
								fontSize: "inherit",
								fontWeight: "inherit",
								marginBottom: ds.pxTo(8, ds.get("typo.pxFontSize.base"), "rem"),
							})}
						>
							Music group techno dark
						</h2>
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
					top: "calc(100vh - 50px)",
					left: "50%",
					transform: "translateX(-50%)",
				})}
				onclick={() => window.scrollTo(0, window.innerHeight)}
			>
				xxx
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
						"@media (min-width: 992px)": {
							marginTop: ds.pxTo(0, ds.get("typo.pxFontSize.base"), "rem"),
							marginLeft: 0,
							marginRight: 0,
						},
					})}
				>
					<h2
						class={cxs({
							fontFamily: ds.get("typo.fontFamily.title"),
							fontSize: ds.get("typo.sizes.xxl"),
							fontWeight: ds.get("typo.fontWeight.lightest"),
							background: "linear-gradient(to top, black -57%, #1800ff, #263939)",
							"-webkit-text-fill-color": "transparent",
							"-webkit-background-clip": "text",
							color: "blue",
							marginBottom: 0,
						})}
					>
						Stupid project name
					</h2>
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
							dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
							lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
							esse molestie consequat, vel illum Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
							nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
							exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
							dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
							dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
							lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
							esse molestie consequat, vel illum Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
							nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
							exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
							dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
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
									width: "75%",
									height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
								},
								":nth-child(odd)": {
									"margin-left": "auto",
								},
								":nth-child(even)": {
									"margin-right": "auto",
								},
								":nth-child(3n+0)": {
									margin: "0 auto",
								},
								":nth-last-child(-n+2)": {
									width: "50%",
									margin: 0,
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

			<Route parent path={`${match.path}/:projectId`} render={Project} />
		</div>
	</div>
)
