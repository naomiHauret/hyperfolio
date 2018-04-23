import { location } from "@hyperapp/router"
import pageActions from "app/actions/page"
import musicActions from "app/actions/music"
import mailActions from "app/actions/mail"

export default {
	location: location.actions,
	...pageActions,
	...musicActions,
	...mailActions
}
