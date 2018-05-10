import { h } from "hyperapp"
import Menu from "app/views/components/Navigation/Menu"
import Socials from "app/views/components/Navigation/Socials"
import { aboutPageUrl, contactPageUrl } from "app/routes"

import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ state, actions }) => (
	<nav
		class={cxs({
			"> ul": {
				padding: 0,
				margin: 0,
				listStyle: "none",
				"> li": {
					cursor: "pointer",
					transition: ds.get("transition.fast"),
					zIndex: ds.get("zIndex.godView"),

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
			},
		})}
	>
		<Menu state={state} actions={actions} />
		{(state.location.pathname === aboutPageUrl || state.location.pathname === contactPageUrl) && (
			<Socials
				socials={[
					{
						name: "Linkedin",
						link: "https://www.linkedin.com/in/ines-guerrini-02906b64/",
					},
					{
						name: "Instagram",
						link: "https://www.instagram.com/ness1726/",
					},
				]}
			/>
		)}
	</nav>
)
