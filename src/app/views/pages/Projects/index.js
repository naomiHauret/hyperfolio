import { h } from "hyperapp"
import Project from "app/views/pages/Project"
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
						left: "0%",
						transform: "translateX(-50%) rotate(-90deg)",
					})}
				>
					<Link to={`${match.url}/:projectId`}>Previous</Link>
				</li>
				<li
					class={cxs({
						position: "fixed",
						top: "50%",
						right: "0%",
						transform: "translateX(-50%) rotate(-90deg)",
						"> a": {
							textDecoration: "none",
							color: ds.get('colors.white'),
						}
					})}
				>
					<Link to={`${match.url}/:projectId`}>Next</Link>
				</li>
			</ul>
			<Route parent path={`${match.path}/:projectId`} render={Project} />
		</div>
	</div>
)
