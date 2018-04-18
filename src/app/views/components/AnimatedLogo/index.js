import { h } from "hyperapp"
import cxs from "cxs"
import animation from "assets/animations/animated_logo.json"
import lottie from "lottie-web"

export default () => (
	<div
		oncreate={() => {
			lottie.loadAnimation({
				container: document.getElementById("homeAnimation"),
				renderer: "svg",
				loop: false,
				autoplay: false,
				animationData: animation,
			})
		}}

		class={cxs({
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
		})}
	>
		<div id="homeAnimation" />
	</div>
)
