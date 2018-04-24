import { h } from "hyperapp"
import { Switch, Route, Link } from "@hyperapp/router"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
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
			key="projectpage"
			class={cxs({
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				flexGrow: "1",
			})}
		>
			Projects
		</div>
	</div>
)
