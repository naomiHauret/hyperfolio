// Page url
export const baseUrl = process.env.NODE_ENV === "production" ? "/hyperfolio/" : "/"
export const homePageUrl = baseUrl
export const aboutPageUrl = `${baseUrl}about`
export const contactPageUrl = `${baseUrl}contact`
export const projectsPageUrl = `${baseUrl}projects`

// Page heading
export const homePageName = "Home"
export const aboutPageName = "About"
export const contactPageName = "Contact"
export const projectsPageName = "Projects"
export const notFoundPageName = "I think it's an error..."

export const routes = [homePageUrl, aboutPageUrl, contactPageUrl, projectsPageUrl]
