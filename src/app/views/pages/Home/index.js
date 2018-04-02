import { h } from "hyperapp"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div oncreate={actions.setPageMetaData({ metaTitle, desc })} onupdate={actions.setPageMetaData({ metaTitle, desc })}>
		<h1>{name}</h1>
	</div>
)
