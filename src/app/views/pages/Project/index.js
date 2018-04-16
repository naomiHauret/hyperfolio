import { h } from "hyperapp"

export default ({ state, actions }) => (
	<div oncreate={actions.setPageMetaData({ metaTitle, desc })} onupdate={actions.setPageMetaData({ metaTitle, desc })}>
		<h1>Prjt</h1>
	</div>
)
