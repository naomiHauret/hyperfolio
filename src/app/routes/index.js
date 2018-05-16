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

// Page title
const baseTitle = "Inès Guerrini - Digital Designer"
const separator = "|"
export const homePageTitle = baseTitle
export const contactPageTitle = `Contact ${separator} ${baseTitle}`
export const aboutPageTitle = `About me ${separator} ${baseTitle}`
export const projectsPageTitle = `Projects ${separator} ${baseTitle}`
export const notFoundPageTitle = `Page not found ${separator} ${baseTitle}`

// Page meta description
export const homePageDesc =
	"Hi, I'm Inès Guerrini, a Digital Designer specialized in web, interaction and motion design. I'm based in Nantes and available for freelance."
export const aboutPageDesc = "I like to design dark stuff."
export const contactPageDesc =
	"Have a question or an idea ? Like my work ? Want to drink a coffee ? Or do you want to work with me ? We can get in touch."
export const projectsPageDesc =
	"Video, website, motion design... I worked on various different projects, both personal and professional. Discover my work."
export const notFoundPageDesc =
	"It seems like you are looking for a page that doesn't exist. How about checking my work or get in touch with me instead ?"

export const routes = [homePageUrl, aboutPageUrl, contactPageUrl, projectsPageUrl]
