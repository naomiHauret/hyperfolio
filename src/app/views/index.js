import { h } from "hyperapp"
import { Switch, Route, Link } from "@hyperapp/router"
import Navigation from "app/views/components/Navigation"
import Header from "app/views/components/Header"
import DottedBackground from "app/views/components/DottedBackground"
import background from "assets/images/content/background404.jpg"
import ToggleMusic from "app/views/components/ToggleMusic"
import { routes, projectsPageUrl } from "app/routes"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
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
	backgroundImage: `url("${background}")`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	fontFamily: ds.get("typo.fontFamily.error.text"),
})
export default ({ state, actions, match }) => {
	const not404 =
		routes.map((route) => route.path).includes(state.location.pathname) ||
		state.location.pathname.indexOf(`${projectsPageUrl}/`) >= 0

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
				{not404 && <Navigation state={state} actions={actions} />}
				{not404 && <ToggleMusic state={state} actions={actions} />}
				{not404 && <DottedBackground />}

				<Switch>
					{routes.map((route) => (route.path === projectsPageUrl ? <Route parent {...route} /> : <Route {...route} />))}
				</Switch>
			</div>
		</div>
	)
}
