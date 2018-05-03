import { h } from "hyperapp"
import Project from "app/views/pages/Project"
import Video from "app/views/components/Video"
import { Switch, Route, Link } from "@hyperapp/router"
import cxs from "cxs"
import { ds } from "assets/styles/theme"

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
						left: ds.pxTo(57, ds.get("typo.pxFontSize.base"), "rem"),
						transform: "translateX(-50%) rotate(-90deg)",
					})}
				>
					<Link to={`${match.url}/:projectId`}>Previous</Link>
				</li>
				<li
					class={cxs({
						position: "fixed",
						top: "50%",
						right: "0",
						transform: "translateX(-50%) rotate(-90deg)",
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
								height: "510px",
							},
							"@media (min-width: 1365px)": {
								height: "610px",
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
								marginBottom: "8px",
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
				})}
			>
				xxx
			</button>

			<Route parent path={`${match.path}/:projectId`} render={Project} />
		</div>
	</div>
)
