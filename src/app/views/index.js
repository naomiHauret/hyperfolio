// Hyperapp
import { h } from "hyperapp"
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
import Modal from "app/views/components/Modal"

// Routes related
import { homePageUrl, aboutPageUrl, contactPageUrl, projectsPageUrl, routes } from "app/routes"

// Styles
import { ds } from "assets/styles/theme"
import cxs from "cxs"

// Other assets
import musicFile from "assets/music/audio.mp3"
import warning from "assets/images/content/warning.gif"

// Music
let music = new Audio(musicFile)
music.loop = true

// Base style
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
	const not404 =
		routes.map((route) => route).includes(state.location.pathname) ||
		state.location.pathname.indexOf(`${projectsPageUrl}/`) >= 0

	not404 && state.isPlayingMusic === true && state.readWarning === true ? music.play() : music.pause()

	return (
		<div
			class={`
			${defaultStyle}
			${not404 === false ? notFoundPageStyle : ""}
			`}
			key="k1"
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
						<Enter
							easing="ease-in-out"
							time={550}
							css={{
								transform:
									state.location.previous || state.location.pathname === contactPageUrl ? "translateY(-15%)" : "translateY(15%)",
							}}
						>
							<Header location={state.location} />
						</Enter>
					)}
				{not404 === true && <Navigation state={state} actions={actions} />}
				{not404 === true && <ToggleMusic state={state} actions={actions} />}
				{not404 === true && <DottedBackground />}
				{state.readWarning === false && (
					<Modal>
						<h3
							class={cxs({
								color: ds.get("colors.text.title"),
								fontSize: ds.get("typo.sizes.md"),
								letterSpacing: ds.pxTo(5, ds.get("typo.pxFontSize.base"), "rem"),
								textTransform: "uppercase",
							})}
						>
							Warning
						</h3>
						<div class={cxs({ height: ds.pxTo(150, ds.get("typo.pxFontSize.base"), "rem") })}>
							<img src={warning} alt="" class={cxs({ height: "100%", width: "100%", objectFit: "contain" })} />
						</div>
						<p>
							This website contains :
							<ul
								class={cxs({
									listStyle: "none",
									"> li": {
										marginBottom: ds.pxTo(15, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
								<li>- Flashing images that may not be suitable for photosensitive epilepsy</li>
								<li>- Music</li>
							</ul>
						</p>
						<button
							class={cxs({
								backgroundColor: ds.get("colors.background.colorful"),
								color: ds.get("colors.text.link"),
								border: 0,
								fontFamily: "inherit",
								fontSize: "inherit",
								padding: ds.pxTo(10, ds.get("typo.pxFontSize.base"), "rem"),
								cursor: "pointer",
								textTransform: "uppercase",
							})}
							onclick={actions.didReadWarning}
						>
							I understand
						</button>
					</Modal>
				)}
				<Switch>
					<Route path={homePageUrl} render={Home} />
					<Route path={aboutPageUrl} render={About} />
					<Route path={contactPageUrl} render={Contact} />
					<Route parent path={projectsPageUrl} render={Projects} />
					<Route parent render={NotFound} />
				</Switch>
			</div>
		</div>
	)
}
