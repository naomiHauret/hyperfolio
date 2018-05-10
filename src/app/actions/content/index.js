import Prismic from "prismic-javascript"

const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
const apiToken = process.env.PRISMIC_TOKEN

export default {
	setHomeContent: () => (state) => {
        return Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "home"))
            })
            .then((response) => {
                    return response.results[0].data.home_video.url
			})
			.then((data) => {
                    return {
                        homeVideoUrl: data,
                    }
				}, (err) => {
					console.log("Something went wrong: ", err)
				})

	},

	setAboutContent: () => (state) => {
		return {
			isPlayingMusic: !state.isPlayingMusic,
		}
	},

	setProjectsContent: () => (state) => {
		return {
			isPlayingMusic: !state.isPlayingMusic,
		}
	},
}
