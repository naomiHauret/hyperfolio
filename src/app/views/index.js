import { h } from "hyperapp"
import { Switch, Route, Link } from "@hyperapp/router"
import routes from "app/routes"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

const defaultStyle = cxs({
	flexGrow: 1,
	color: ds.get("colors.text.paragraph"),
	fontFamily: ds.get("typo.fontFamilyBase"),
	fontSize: ds.get("typo.sizes.base"),
	backgroundColor: ds.get("colors.background.dark"),
})

const notFoundPageStyle = cxs({
	backgroundImage: ds.get("colors.background.rainbow"),
})

export default ({ state, actions }) => (
	<main
		class={` ${defaultStyle} ${routes.map((route) => route.path).includes(state.location.pathname) === false &&
			notFoundPageStyle} `}
	>
		<Switch>{routes.map((route) => <Route {...route} />)}</Switch>
		{routes.map((route) => route.path).includes(state.location.pathname) && (
			<ul>
				{routes
					.filter((route) => route.path !== undefined && route.path !== null && state.location.pathname !== route.path)
					.map((route) => (
						<li>
							<Link to={route.path}>{route.name}</Link>
						</li>
					))}
			</ul>
		)}
	</main>
)
