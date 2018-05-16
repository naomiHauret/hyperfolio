import { h } from "hyperapp"
import Project from "app/views/components/Project"
import Video from "app/views/components/Video"
import { Switch, Route, Link } from "@hyperapp/router"
import { Enter, Exit } from "@hyperapp/transitions"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import postcssJs from "postcss-js"
import postcssPlacehold from "postcss-placehold"
import scrollDown from "assets/images/content/scrollDown.gif"

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
				<Enter
					easing="ease-in-out"
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
				</Enter>
				<Enter
					easing="ease-in-out"
				>
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
				</Enter>
			</ul>

			<Route parent path={`${match.path}/:projectId`} render={Project} />
		</div>
	</div>
)
