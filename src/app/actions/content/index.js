import Prismic from "prismic-javascript"

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
const apiToken = process.env.PRISMIC_TOKEN

const setupMeta = (metaTitle, desc) => {
	document.title = metaTitle
	document.querySelector("meta[property='og:title']").setAttribute("content", metaTitle)
	document.querySelector("meta[name='twitter:title']").setAttribute("content", metaTitle)
	document.querySelector("meta[name='description']").setAttribute("content", desc)
	document.querySelector("meta[property='og:description']").setAttribute("content", desc)
	document.querySelector("meta[name='twitter:description']").setAttribute("content", desc)
}
export default {
	// Home
	setHomeContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "home_page"))
			})
			.then((response) => {
				let metaTitle = response.results[0].data["meta_title"]
				let desc = response.results[0].data["meta_description"]
				setupMeta(metaTitle, desc)
				actions.onFetchHomeSuccess(response.results[0].data.video_id)
			})
	},

	onFetchHomeSuccess: (data) => (state) => ({
		homeVideoId: data,
	}),

	// About
	setAboutContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "about_page"))
			})
			.then((response) => {
				const metaTitle = response.results[0].data["meta_title"]
				const desc = response.results[0].data["meta_description"]
				setupMeta(metaTitle, desc)
				actions.onFetchAboutSuccess(response.results[0].data.text.map((content) => content.text))
			})
	},

	onFetchAboutSuccess: (data) => (state) => ({
		aboutContent: data,
	}),

	// Contact
	setContactContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "contact_page"))
			})
			.then((response) => {
				const metaTitle = response.results[0].data["meta_title"]
				const desc = response.results[0].data["meta_description"]
				setupMeta(metaTitle, desc)
			})
	},

	// Not found
	setNotFoundContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "notfound_page"))
			})
			.then((response) => {
				const metaTitle = response.results[0].data["meta_title"]
				const desc = response.results[0].data["meta_description"]
				setupMeta(metaTitle, desc)
			})
	},
}
