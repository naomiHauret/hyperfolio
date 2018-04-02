import { location } from "@hyperapp/router"
import seoActions from "./seo"

export default {
	location: location.actions,
	...seoActions,
}
