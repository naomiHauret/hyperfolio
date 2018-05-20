import musicActions from "app/actions/music"
import mailActions from "app/actions/mail"
import contentActions from "app/actions/content"
import { location } from "@hyperapp/router"

export default {
	location: location.actions,
	...musicActions,
	...mailActions,
	...contentActions,
}
