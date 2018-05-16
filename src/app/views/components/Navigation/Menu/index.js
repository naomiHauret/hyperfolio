import { h } from "hyperapp"
import Link from "app/views/components/Navigation/Link"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { Enter, Exit, Move } from "@hyperapp/transitions"

import {
	homePageUrl,
	aboutPageUrl,
	contactPageUrl,
	aboutPageName,
	contactPageName,
	projectsPageUrl,
	projectsPageName,
} from "app/routes"

export default ({ state }) => (
	<ul>
		{state.location.pathname !== aboutPageUrl && (
			<li
				key="gotoAbout"
				class={cxs({
					position: state.location.pathname.indexOf(`${projectsPageUrl}`) >= 0 ? "fixed" : "absolute",
					top:
						state.location.pathname === homePageUrl || state.location.pathname.indexOf(`${projectsPageUrl}`) >= 0
							? `47px`
							: "unset",
					bottom: state.location.pathname === contactPageUrl ? `${ds.get("spacing.frame")}px` : "unset",
					left: "50%",
					transform: "translateX(-50%)",
				})}
			>
				<Link path={aboutPageUrl} name={aboutPageName} />
			</li>
		)}
		{state.location.pathname !== contactPageUrl && (
			<li
				key="gotoContact"
				class={cxs({
					position: "absolute",
					bottom: `${ds.get("spacing.frame")}px`,
					left: "50%",
					transform: "translateX(-50%)",
				})}
			>
				<Link path={contactPageUrl} name={contactPageName} />
			</li>
		)}
		{state.location.pathname.indexOf(`${projectsPageUrl}`) < 0 && (
			<li
				key="gotoProjects"
				class={cxs({
					position: "absolute",
					bottom: `${ds.get("spacing.frame")}px`,
					right: `${ds.get("spacing.frame") * 2 / ds.get("breakpoints.lg") * 100}%`,
				})}
			>
				{state.projects !== null && state.projects !== undefined && state.projects.length > 0 ? (
					<Link path={`${projectsPageUrl}/${state.projects[0]["uid"]}`} name={projectsPageName} />
				) : (
					<Link path={`${projectsPageUrl}`} name={projectsPageName} />
				)}
			</li>
		)}
	</ul>
)
