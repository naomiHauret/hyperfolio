import { h } from "hyperapp"
import Link from "app/views/components/Navigation/Link"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ state }) => (
	<ul>
		{state.location.pathname !== "/about" && (
			<li
				class={cxs({
					position: "fixed",
					top: state.location.pathname === "/" ? "60px" : "unset",
					bottom: state.location.pathname === "/contact" ? "40px" : "unset",
					left: "50%",
					transform: "translateX(-50%)",
				})}
			>
				<Link path="/about" name="About" />
			</li>
		)}
		{state.location.pathname !== "/contact" && (
			<li
				class={cxs({
					position: "fixed",
					bottom: "35px",
					left: "50%",
					transform: "translateX(-50%)",
				})}
			>
				<Link path="/contact" name="Contact" />
			</li>
		)}
		{state.location.pathname !== "/projects" &&
			state.location.pathname !== "/projects/:projectId" && (
				<li
					class={cxs({
						position: "absolute",
						bottom: "35px",
						right: `${70 / 1440 * 100}%`,
					})}
				>
					<Link path="/projects" name="Projects" />
				</li>
			)}
	</ul>
)
