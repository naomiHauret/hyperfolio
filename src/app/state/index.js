import { location } from "@hyperapp/router"

export default {
	location: location.state,
	isPlayingMusic: true,
	emailSent: false,
	currentProject: {
		uid: null,
		title: null,
		type: null,
		client: null,
		mainVideoId: null,
		branding: null,
		text: null,
		videoGallery: null,
		imagesGallery: null,
	},
	previousProject: ":projectUid",
	nextProject: ":projectUid",
	projects: [],
}
