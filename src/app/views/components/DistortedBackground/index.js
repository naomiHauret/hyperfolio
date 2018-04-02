import { h } from "hyperapp"
import letters from "assets/images/content/letters.png"
import distortionFilter from "assets/images/filters/distortion.jpg"
import cxs from "cxs"

import { Application, filters, Sprite } from "pixi.js"

const canvasMaxWidth = 650 // in px
const canvasHeight = 350 // in px

const startDistortionAnimation = () => {
	let app = new Application(canvasMaxWidth, canvasHeight, { transparent: true })
	app.renderer.view.style.position = "absolute"
	app.renderer.view.style.display = "block"
	app.renderer.view.style.width = "100%"

	app.renderer.view.style.maxWidth = `${canvasMaxWidth}px`
	app.renderer.autoResize = true

	let count = 0 // will serve for animation

	document.querySelector("#distordedLettersContainer").appendChild(app.view)

	let distortedImageSprite = Sprite.fromImage(letters) // image we want to apply distorsion on
	distortedImageSprite.anchor.x = 0

	let distortionSprite = Sprite.fromImage(distortionFilter) // distortion filter image (can be any image)

	let appliedDistortionFilter = new filters.DisplacementFilter(distortionSprite) // create distortion filter based on our distortion filter image
	distortionSprite.scale.y = 1.5
	distortionSprite.scale.x = 1.5

	app.stage.addChild(distortionSprite)
	app.stage.addChild(distortedImageSprite)

	app.ticker.add((delta) => {
		distortionSprite.x = count * 60
		distortionSprite.y = count * 60
		count += 0.005
		app.stage.filters = [appliedDistortionFilter]
		app.render(app.stage)
	})
}

export default () => (
	<div
		class={cxs({
			height: `${canvasHeight}px`,
			maxHeight: `${canvasHeight}px`,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		})}
		oncreate={startDistortionAnimation}
		id="distordedLettersContainer"
	/>
)
