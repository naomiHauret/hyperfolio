import Prismic from "prismic-javascript"

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
const apiToken = process.env.PRISMIC_TOKEN

export default {
	setAboutContent: () => (state) => ({
		aboutContent: Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "about_page"))
			})
			.then((response) => {
				console.log(response.results[0].data.about_content.map((content) => content.text))
				return response.results[0].data.about_content.map((content) => content.text)
			}),
	}),
}
