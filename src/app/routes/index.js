import { h } from "hyperapp"

import state from "app/state"
import actions from "app/actions"

import Home from "app/views/pages/Home"
import About from "app/views/pages/About"
import Contact from "app/views/pages/Contact"
import Projects from "app/views/pages/Projects"
import NotFound from "app/views/pages/NotFound"

export const homePageName = "Home"
export const aboutPageName = "About"
export const contactPageName = "Contact"
export const projectsPageName = "Projects"
export const notFoundPageName = "I think it's an error..."

export const baseUrl = process.env.NODE_ENV === "production" ? "/hyperfolio/" : "/"
export const homePageUrl = baseUrl
export const aboutPageUrl = `${baseUrl}about`
export const contactPageUrl = `${baseUrl}contact`
export const projectsPageUrl = `${baseUrl}projects`

export const routes = [
	{
		path: homePageUrl,
		name: homePageName,
		render: (props) => (
			<Home
				state={state}
				actions={actions}
				name={homePageName}
				metaTitle={"Inès Guerrini - Creative Digital Designer"}
				desc={
					"Hi, I'm Inès Guerrini, a Creative Digital Designer specialized in web, interaction and motion design. I'm based in Nantes and available for freelance."
				}
				{...props}
			/>
		),
	},
	{
		path: aboutPageUrl,
		name: aboutPageName,
		render: (props) => (
			<About
				state={state}
				actions={actions}
				name={aboutPageName}
				metaTitle={"About me | Inès Guerrini - Creative Digital Designer"}
				desc={"I like to design dark stuff."}
				{...props}
			/>
		),
	},
	{
		path: contactPageUrl,
		name: contactPageName,
		render: (props) => (
			<Contact
				state={state}
				actions={actions}
				name={contactPageName}
				metaTitle={"Contact | Inès Guerrini - Creative Digital Designer"}
				desc={
					"Have a question or an idea ? Like my work ? Want to drink a coffee ? Or do you want to work with me ? We can get in touch."
				}
				{...props}
			/>
		),
	},
	{
		path: projectsPageUrl,
		name: projectsPageName,
		render: (props) => (
			<Projects
				state={state}
				actions={actions}
				name={projectsPageName}
				metaTitle={"Projects | Inès Guerrini - Creative Digital Designer"}
				desc={
					"Video, website, motion design... I worked on various different projects, both personal and professional. Discover my work."
				}
				{...props}
			/>
		),
	},
	{
		name: notFoundPageName,
		render: (props) => (
			<NotFound
				state={state}
				actions={actions}
				name={notFoundPageName}
				metaTitle={"Page not found | Inès Guerrini - Creative Digital Designer"}
				desc={
					"It seems like you are looking for a page that doesn't exist. How about checking my work or get in touch with me instead ?"
				}
				{...props}
			/>
		),
	},
]
