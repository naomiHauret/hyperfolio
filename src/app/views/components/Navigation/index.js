import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ state, actions }) => (
	<nav
		class={cxs({
			zIndex: ds.get("zIndex.high"),
		})}
	>
		<ul
			class={cxs({
				padding: 0,
				margin: 0,
				listStyle: "none",
				"> li": {
					padding: "5px",
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
					"> a": {
						display: "block",
						height: "100%",
						width: "100%",
						color: ds.get("colors.text.link"),
						textDecoration: "none",
						letterSpacing: ds.pxTo(3.5, ds.get("typo.pxFontSize.base"), "em"),
					},
				},
			})}
		>
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
					<Link to="/about">About</Link>
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
					<Link to="/contact">Contact</Link>
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
						<Link to="/projects">Projects</Link>
					</li>
				)}
		</ul>
	</nav>
)
