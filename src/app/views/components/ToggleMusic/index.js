import { h } from "hyperapp"
import routes from "app/routes"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ state, actions }) =>
	routes.map((route) => route.path).includes(state.location.pathname) && (
		<button
			onclick={actions.togglePlayMusic}
			class={cxs({
				backgroundColor: "transparent",
				border: 0,
				color: ds.get("colors.blue"),
				position: "fixed",
				bottom: "50px",
				left: "55px",
				cursor: "pointer",
				padding: "50px,",
				":focus": {
					outline: 0,
				},
			})}
		>
			x
		</button>
	)
