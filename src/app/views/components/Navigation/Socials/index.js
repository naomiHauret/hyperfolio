import { h } from "hyperapp"
import Link from "app/views/components/Navigation/Link"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ socials }) => (
	<ul
		class={cxs({
			position: "absolute",
			top: `${document.body.scrollHeight - 120}px`,
			left: 0,
			display: "flex",
			justifyContent: "center",
			width: "100%",
		})}
	>
		{socials.map((social) => (
			<li
				class={cxs({
					position: "relative",
				})}
			>
				<Link external path={social.link} name={social.name} />
			</li>
		))}
	</ul>
)
