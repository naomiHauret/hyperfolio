import { location } from "@hyperapp/router"

export default {
	location: location.state,
	isPlayingMusic: true,
	emailSent: true,
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
	projects: [],
}
