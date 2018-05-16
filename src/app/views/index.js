import { h } from "hyperapp"
// Router
import { Switch, Route, Link } from "@hyperapp/router"
import { Enter, Exit, Move } from "@hyperapp/transitions"

// Pages
import Home from "app/views/pages/Home"
import About from "app/views/pages/About"
import Contact from "app/views/pages/Contact"
import Projects from "app/views/pages/Projects"
import NotFound from "app/views/pages/NotFound"

// Components
import Navigation from "app/views/components/Navigation"
import Header from "app/views/components/Header"
import DottedBackground from "app/views/components/DottedBackground"
import ToggleMusic from "app/views/components/ToggleMusic"

import {
	homePageUrl,
	aboutPageUrl,
	contactPageUrl,
	projectsPageUrl,
	aboutPageName,
	contactPageName,
	projectsPageName,
	notFoundPageName,
	contactPageTitle,
	aboutPageTitle,
	projectsPageTitle,
	notFoundPageTitle,
	aboutPageDesc,
	contactPageDesc,
	projectsPageDesc,
	notFoundPageDesc,
	routes,
} from "app/routes"

import { ds } from "assets/styles/theme"
import cxs from "cxs"

// Other assets
import musicFile from "assets/music/audio.mp3"

let music = new Audio(musicFile)
music.loop = true
const defaultStyle = cxs({
	flexGrow: 1,
	color: ds.get("colors.text.paragraph"),
	fontFamily: ds.get("typo.fontFamilyBase"),
	fontSize: ds.get("typo.sizes.base"),
	backgroundColor: ds.get("colors.background.dark"),
	margin: "auto",
	display: "flex",
	flexDirection: "column",
	width: "100vw",
})

const notFoundPageStyle = cxs({
	backgroundImage: ds.get("colors.background.rainbow"),
	fontFamily: ds.get("typo.fontFamily.error.text"),
})
export default ({ state, actions, match }) => {
	const not404 = true
	not404 && state.isPlayingMusic === true ? music.play() : music.pause()

	return (
		<div
			class={`
			${defaultStyle}
			${not404 === false ? notFoundPageStyle : ""}
		`}
		>
			<div
				class={cxs({
					maxWidth: ds.get("grid.width.xs"),
					margin: "0 auto",
					height: "100%",
					width: "100%",
					position: "relative",
					lineHeight: ds.get("typo.lineHeight.paragraphs"),
					"@media (min-width: 768px)": {
						maxWidth: ds.get("grid.width.sm"),
					},
					"@media (min-width: 992px)": {
						maxWidth: ds.get("grid.width.md"),
					},
					"@media (min-width: 1200px)": {
						maxWidth: ds.get("grid.width.lg"),
					},
					"@media (min-width: 1366px)": {
						maxWidth: ds.get("grid.width.xl"),
					},
					"@media (min-width: 1441px)": {
						maxWidth: ds.get("grid.width.xxl"),
					},
				})}
			>
				{not404 &&
					state.location.pathname !== homePageUrl && (
						<Enter easing="ease-in-out" time={550} css={{ transform: "translateY(15%)" }}>
							<Header />
						</Enter>
					)}
				{not404 && <Navigation state={state} actions={actions} />}
				{not404 && <ToggleMusic state={state} actions={actions} />}
				{not404 && <DottedBackground />}

				<Switch>
					<Route path={homePageUrl} render={Home} />
					<Route path={aboutPageUrl} render={About} />
					<Route path={contactPageUrl} render={Contact} />
					<Route parent path={projectsPageUrl} render={Projects} />
				</Switch>
			</div>
		</div>
	)
}
