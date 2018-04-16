import { h } from "hyperapp"
import { Switch, Route, Link } from "@hyperapp/router"
import Navigation from "app/views/components/Navigation"
import Header from "app/views/components/Header"
import DottedBackground from "app/views/components/DottedBackground"
import ToggleMusic from "app/views/components/ToggleMusic"
import routes from "app/routes"
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
	backgroundImage: ds.get("colors.background.rainbow"),
	fontFamily: ds.get("typo.fontFamily.error.text"),
})

export default ({ state, actions }) => {
	routes.map((route) => route.path).includes(state.location.pathname) && state.isPlayingMusic === true
		? music.play()
		: music.pause()

	return (
		<div
			class={`
			${defaultStyle}
			${routes.map((route) => route.path).includes(state.location.pathname) === false ? notFoundPageStyle : ""}
		`}
		>
			{routes.map((route) => route.path).includes(state.location.pathname) && <Header state={state} />}
			{routes.map((route) => route.path).includes(state.location.pathname) && (
				<Navigation state={state} actions={actions} />
			)}
			{routes.map((route) => route.path).includes(state.location.pathname) && (
				<ToggleMusic state={state} actions={actions} />
			)}
			<DottedBackground />

			<Switch>{routes.map((route) => <Route {...route} />)}</Switch>
		</div>
	)
}
