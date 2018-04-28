import pageActions from "app/actions/page"
import musicActions from "app/actions/music"
import mailActions from "app/actions/mail"

export default {
	...pageActions,
	...musicActions,
	...mailActions,
}
