import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import routes from "app/routes"

export default ({ state, actions }) => (
	<ul>
		{routes.map((route) => (
			<li>
				<Link to={route.path}>{route.name}</Link>
			</li>
		))}
	</ul>
)
