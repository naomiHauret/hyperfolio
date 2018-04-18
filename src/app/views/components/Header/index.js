import { h } from "hyperapp"
import PageTitle from "app/views/components/PageTitle"
import { aboutPageUrl, contactPageUrl, aboutPageName, contactPageName } from "app/routes"

export default ({ state, actions }) => {
	let title
	if (state.location.pathname === aboutPageUrl) title = aboutPageName
	if (state.location.pathname === contactPageUrl) title = contactPageName

	return (
		<header>
			{state.location.pathname === aboutPageUrl || (state.location.pathname === contactPageUrl && <PageTitle title={title} />)}
		</header>
	)
}
