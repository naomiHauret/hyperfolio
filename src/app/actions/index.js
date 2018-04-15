import { location } from "@hyperapp/router"
import pageActions from "./page"
import musicActions from "./music"

export default {
	location: location.actions,
	...pageActions,
	...musicActions,
}
