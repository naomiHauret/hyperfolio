import { h } from "hyperapp"
import Link from "app/views/components/Navigation/Link"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { homePageUrl, aboutPageUrl, contactPageUrl, aboutPageName, contactPageName } from "app/routes"
import { projectsPageUrl, projectsPageName } from "../../../../routes"

export default ({ state }) => (
	<ul>
		{state.location.pathname !== aboutPageUrl && (
			<li
				class={cxs({
					position: "fixed",
					top: state.location.pathname === homePageUrl ? "60px" : "unset",
					bottom: state.location.pathname === contactPageUrl ? "40px" : "unset",
					left: "50%",
					transform: "translateX(-50%)",
				})}
			>
				<Link path={aboutPageUrl} name={aboutPageName} />
			</li>
		)}
		{state.location.pathname !== contactPageUrl && (
			<li
				class={cxs({
					position: "fixed",
					bottom: "35px",
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
					class={cxs({
						position: "absolute",
						top: `${document.body.scrollHeight - 120}px`,
						right: `${70 / 1440 * 100}%`,
					})}
				>
					<Link path={projectsPageUrl} name={projectsPageName} />
				</li>
			)}
	</ul>
)
