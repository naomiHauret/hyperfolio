import { h } from "hyperapp"

import portrait from "assets/images/content/portrait.jpg"

import { Application, Sprite } from "pixi.js"
import { GlitchFilter, OldFilmFilter } from "pixi-filters"

const startPortraitAnimation = () => {
	let app = new Application(350, 650, { backgroundColor: "transparent" })
	app.renderer.view.style.position = "absolute"
	app.renderer.view.style.display = "block"
	app.renderer.autoResize = true

	let count = 0 // will serve for animation

	document.querySelector("#portraitContainer").appendChild(app.view)

	let portraitImage = Sprite.fromImage(portrait)

	let glitchFilter = new GlitchFilter({
		fillModeOptions: 3, // Clamp
		slices: 10,
		offset: 100,
		direction: 0,
		average: false,
		red: [2, 0.5],
		green: [-2, 1],
		blue: [2, -1.5],
		seed: 0.5,
	})
	let oldNoisyFilter = new OldFilmFilter({
		sepia: 0,
		noise: 0.45,
		noiseSize: 1,
		scratch: -1,
		scratchDensity: 0,
		scratchWidth: 0,
		vignetting: 0.35,
		vignettingAlpha: 1,
		vignettingBlur: 1,
	})

	app.stage.addChild(portraitImage)

	app.ticker.add((delta) => {
		oldNoisyFilter.seed = Math.random()
		glitchFilter.slices = Math.random() * 25
		glitchFilter.offset = Math.random() * 25
		glitchFilter.seed = Math.random()
		glitchFilter.direction = Math.random() * 10

		app.stage.filters = [glitchFilter, oldNoisyFilter]
		app.render(app.stage)
	})
}

export default () => <div oncreate={startPortraitAnimation} id="portraitContainer" />
