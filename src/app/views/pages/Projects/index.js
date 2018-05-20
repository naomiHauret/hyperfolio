import { h } from "hyperapp"
import Project from "app/views/components/Project"
import { Switch, Route, Link } from "@hyperapp/router"
import { Enter, Exit } from "@hyperapp/transitions"
import cxs from "cxs"
import { ds } from "assets/styles/theme"


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
			<Enter easing="ease-in-out" time={550} css={{ transform: "translateX(40%)" }}>
				<div
					key="projectspagecontent"
					class={cxs({
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",
					})}
					ondestroy={() => window.scrollTo(0, 0)}
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
							{state.projects !== null &&
								state.projects.length > 0 && <Link to={`${match.url}/${state.previousProject}`}>Previous</Link>}
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
							{state.projects !== null &&
								state.projects.length > 0 && <Link to={`${match.url}/${state.nextProject}`}>Next</Link>}
						</li>
					</ul>

					<Route parent path={`${match.path}/:projectId`} render={Project} />
				</div>
			</Enter>
		</Exit>
	</div>
)
