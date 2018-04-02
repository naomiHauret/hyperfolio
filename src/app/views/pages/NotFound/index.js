import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div oncreate={actions.setPageMetaData({ metaTitle, desc })} onupdate={actions.setPageMetaData({ metaTitle, desc })}>
		<h1>{name}</h1>
		<button
			type="button"
			title="Go back to home page"
			class={cxs({
				backgroundColor: ds.get("colors.background.light"),
				border: "none",
				borderRadius: ds.get("borderRadius.button"),
				" > a": {
					color: ds.get("colors.text.rainbow"),
					textDecoration: "none",
				},
			})}
		>
			<Link to="/">Go back</Link>
		</button>
	</div>
)
