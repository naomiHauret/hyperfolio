import { h } from "hyperapp"
import Link from "app/views/components/Link"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ socials }) => (
	<ul>
		{socials.map((social) => (
			<li
				class={cxs({
					position: "absolute",
					bottom: "35px",
					right: `${70 / 1440 * 100}%`,
				})}
			>
				<Link external path={social.link} name={social.name} />
			</li>
		))}
	</ul>
)
