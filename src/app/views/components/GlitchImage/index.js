import { h } from "hyperapp"

import { Application, Sprite } from "pixi.js"
import { GlitchFilter, CRTFilter, MotionBlurFilter } from "pixi-filters"

let app = new Application(500, 500, { backgroundColor: "transparent" })
const startPortraitAnimation = (id, src) => {
	app.stage.children = []
	app.renderer.view.style.position = "absolute"
	app.renderer.view.style.display = "block"
	app.renderer.autoResize = true

	let count = 0 // will serve for animation

	setTimeout(() => {
		document.querySelector(`#${id}`).appendChild(app.view)
	}, 50)

	let baseImage = Sprite.fromImage(src)
	let crtfFilter = new CRTFilter({
		curvature: 0,
		lineWidth: 0.05,
		lineContrast: 0.15,
		noise: 2,
		noiseSize: 1,
		vignetting: 1,
		vignettingAlpha: 0.75,
		vignettingBlur: 1,
		seed: 0,
		time: 0,
	})
	let glitchFilter = new GlitchFilter({
		slices: 150,
		offset: 150,
		direction: 0,
		average: false,
	})

	let motionBlurFilter = new MotionBlurFilter({
		velocity: {
			x: 90,
			y: 2,
		},
		kernelSize: 25,
		offset: 0,
	})

	app.stage.addChild(baseImage)
	setInterval(() => {
		glitchFilter.slices = 150
	}, 8500)

	app.ticker.add((delta) => {
		glitchFilter.slices - 5 > 0 ? (glitchFilter.slices -= 5) : (glitchFilter.slices += 0.0005 * Math.random())
		glitchFilter.seed = Math.random()
		crtfFilter.seed = Math.random()
		crtfFilter.time += 0.5 * delta
		app.stage.filters = [crtfFilter, glitchFilter, motionBlurFilter]
		app.render(app.stage)
	})
}

export default ({ id, src }) => <div oncreate={startPortraitAnimation(id, src)} id={id} />
