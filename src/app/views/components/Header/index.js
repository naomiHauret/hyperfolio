import { h } from "hyperapp"
import PageTitle from "app/views/components/PageTitle"

export default ({ state, actions }) => {
	let title
	if (state.location.pathname === "/about") title = "About"
	if (state.location.pathname === "/contact") title = "Contact"

	return (
		<header>
			{state.location.pathname === "/about" || (state.location.pathname === "/contact" && <PageTitle title={title} />)}
		</header>
	)
}
