import Prismic from "prismic-javascript"
import Blazy from "blazy"

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

const lazyloadContent = () => new Blazy({ selector: '[data-lazy="true"]' })

export default {
	// Nav (projects)
	setProjects: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "project_page"))
			})
			.then((response) => {
				actions.onFetchProjectsSuccess(response.results.map((r, index) => ({ uid: r.uid, id: r.id, index: index })))
			})
	},

	onFetchProjectsSuccess: (data) => (state) => ({
		projects: data,
	}),

	setProjectContent: ({ uid }) => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.getByUID("project_page", uid)
			})
			.then((response) => {
				let rawData = response.data
				let metaTitle = rawData.meta_title
				let desc = rawData.meta_description
				let data = {
					uid: response.uid,
					title: rawData.title,
					type: rawData.type,
					client: rawData.client,
					mainVideoId: rawData.video_id,
					branding: rawData.branding,
					content: rawData.content,
					videoGallery: rawData.video_gallery,
					imagesGallery: rawData.images_gallery,
				}
				setupMeta(metaTitle, desc)
				actions.onFetchProjectSuccess(data)
				lazyloadContent()
			})
			.catch((err) => console.log(err))
	},

	onFetchProjectSuccess: (data) => (state) => {
		let currentProjectIndex = state.projects.filter((project) => project.uid === data.uid)[0].index
		let nextProject =
			state.projects[currentProjectIndex + 1] !== undefined
				? state.projects[currentProjectIndex + 1].uid
				: state.projects[0].uid
		let previousProject =
			state.projects[currentProjectIndex - 1] !== undefined
				? state.projects[currentProjectIndex - 1].uid
				: state.projects[state.projects.length - 1].uid

		return {
			previousProject,
			nextProject,
			currentProject: data,
		}
	},

	// Home
	setHomeContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "home_page"))
			})
			.then((response) => {
				let rawData = response.results[0].data
				let metaTitle = rawData.meta_title
				let desc = rawData.meta_description
				setupMeta(metaTitle, desc)
				actions.onFetchHomeSuccess(rawData.video_id)
			})
			.catch((err) => console.log(err))
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
				let rawData = response.results[0].data
				let metaTitle = rawData.meta_title
				let desc = rawData.meta_description
				setupMeta(metaTitle, desc)
				actions.onFetchAboutSuccess(rawData.text.map((content) => content.text))
			})
			.catch((err) => console.log(err))
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
				let rawData = response.results[0].data
				let metaTitle = rawData.meta_title
				let desc = rawData.meta_description
				setupMeta(metaTitle, desc)
			})
			.catch((err) => console.log(err))
	},

	// Not found
	setNotFoundContent: () => (state, actions) => {
		Prismic.getApi(apiEndpoint, { accessToken: apiToken })
			.then((api) => {
				return api.query(Prismic.Predicates.at("document.type", "notfound_page"))
			})
			.then((response) => {
				let rawData = response.results[0].data
				let metaTitle = rawData.meta_title
				let desc = rawData.meta_description
				setupMeta(metaTitle, desc)
			})
			.catch((err) => console.log(err))
	},

	// Warning
	didReadWarning: () => (state) => ({
		readWarning: true,
	}),
}
