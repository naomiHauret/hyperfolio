import { h } from "hyperapp"
import Video from "app/views/components/Video"

import cxs from "cxs"

export default ({ state, actions }) => (
	<div
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

		</div>
	</div>
)
