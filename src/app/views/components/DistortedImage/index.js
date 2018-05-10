import { h } from "hyperapp"
import cxs from "cxs"
import { Application, filters, Sprite } from "pixi.js"

const canvasMaxWidth = 670 // in px
const canvasHeight = 350 // in px

let app = new Application(canvasMaxWidth, canvasHeight, { transparent: true })
const startDistortionAnimation = (id, src, filterSrc) => {
	app.stage.children = []
	app.renderer.view.style.position = "absolute"
	app.renderer.view.style.display = "block"
	app.renderer.view.style.width = "100%"

	app.renderer.view.style.maxWidth = `${canvasMaxWidth}px`
	app.renderer.autoResize = true

	let count = 0 // will serve for animation

	setTimeout(() => {
		document.querySelector(`#${id}`).appendChild(app.view)
	}, 50)

	let distortedImageSprite = Sprite.fromImage(src) // image we want to apply distorsion on
	distortedImageSprite.anchor.x = 0

	let distortionSprite = Sprite.fromImage(filterSrc) // distortion filter image (can be any image)

	let appliedDistortionFilter = new filters.DisplacementFilter(distortionSprite) // create distortion filter based on our distortion filter image
	appliedDistortionFilter.autoFit = true
	distortionSprite.scale.y = 0.5
	distortionSprite.scale.x = 0.5

	app.stage.addChild(distortionSprite)
	app.stage.addChild(distortedImageSprite)

	app.ticker.add((delta) => {
		distortionSprite.x = count * 60
		distortionSprite.y = count * 60
		count += 0.0025
		app.stage.filters = [appliedDistortionFilter]
		app.render(app.stage)
	})
}

export default ({ id, src, filterSrc }) => (
	<div
		class={cxs({
			height: `${canvasHeight}px`,
			maxHeight: `${canvasHeight}px`,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		})}
		oncreate={startDistortionAnimation(id, src, filterSrc)}
		onupdate={startDistortionAnimation(id, src, filterSrc)}
		id={id}
	/>
)
