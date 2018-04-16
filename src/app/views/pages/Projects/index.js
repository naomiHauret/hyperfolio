import { h } from "hyperapp"
import { Switch, Route, Link } from "@hyperapp/router"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		key="projectspage"
	/>
)
