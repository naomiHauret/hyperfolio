import { h } from "hyperapp"
import { routes } from "app/routes"
import { ds } from "assets/styles/theme"
import animation from "assets/animations/soundbars_on.json"
import lottie from "lottie-web"
import cxs from "cxs"

export default ({ state, actions }) => {
	let soundbarAnimation

	return (
		<button
			oncreate={() => {
				soundbarAnimation = lottie.loadAnimation({
					container: document.getElementById("soundbarsAnimation"),
					renderer: "svg",
					loop: true,
					autoplay: true,
					animationData: animation,
				})
			}}
			onclick={() => {
				if (state.isPlayingMusic === true) {
					lottie.goToAndStop(20, soundbarAnimation)
				} else {
					lottie.play(soundbarAnimation)
				}
				return actions.togglePlayMusic()
			}}
			class={cxs({
				backgroundColor: "transparent",
				border: 0,
				color: ds.get("colors.blue"),
				zIndex: ds.get("zIndex.aboveAll"),
				position: "fixed",
				bottom: "50px",
				left: "55px",
				cursor: "pointer",
				padding: "50px,",
				":focus": {
					outline: 0,
				},
			})}
		>
			<div id="soundbarsAnimation" />
		</button>
	)
}
