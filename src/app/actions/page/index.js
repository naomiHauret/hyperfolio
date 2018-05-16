export default {
	setPageMetaData: ({ metaTitle, desc }) => (state) => {
		document.title = metaTitle
		document.querySelector("meta[property='og:title']").setAttribute("content", metaTitle)
		document.querySelector("meta[name='twitter:title']").setAttribute("content", metaTitle)
		document.querySelector("meta[name='description']").setAttribute("content", desc)
		document.querySelector("meta[property='og:description']").setAttribute("content", desc)
		document.querySelector("meta[name='twitter:description']").setAttribute("content", desc)
	},
}
