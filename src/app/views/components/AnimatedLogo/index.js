import { h } from "hyperapp"
import cxs from "cxs"
import animation from "assets/animations/data.json"
import bodymovin from "lottie-web"

export default () => (
	<div
		oncreate={() => {
			bodymovin.loadAnimation({
				container: document.getElementById("homeAnimation"),
				renderer: "svg",
				loop: false,
				autoplay: true,
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
