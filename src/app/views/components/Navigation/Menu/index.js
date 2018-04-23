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
						position: state.location.pathname === projectsPageUrl ? "fixed" : "absolute",
						top:
							state.location.pathname === homePageUrl || state.location.pathname === projectsPageUrl
								? `${ds.get("spacing.frame") * 2}px`
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
			{state.location.pathname !== projectsPageUrl &&
				state.location.pathname !== `${projectsPageUrl}/:projectId` && (
					<li
						key="gotoProjects"
						class={cxs({
							position: "absolute",
							bottom: `${ds.get("spacing.frame")}px`,
							right: `${ds.get("spacing.frame") * 2 / ds.get("breakpoints.lg") * 100}%`,
						})}
					>
						<Link path={projectsPageUrl} name={projectsPageName} />
					</li>
				)}
	</ul>
)
