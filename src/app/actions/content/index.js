import Prismic from "prismic-javascript"

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
const apiToken = process.env.PRISMIC_TOKEN

export default {
	onAboutSuccess: (data) => state => {
		console.log("in about success")
		return { aboutContent: data }
	},
	onError: (error) => ({ error }),
	setAboutContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "about_page"))
			})
			.then((response) => {
				console.log("in set about")
				actions.onAboutSuccess(response.results[0].data.about_content.map((content) => content.text))
			})
	},
}
