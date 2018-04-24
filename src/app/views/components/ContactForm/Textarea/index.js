import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ label, name, delay, duration }) => (
	<label
		class={cxs({
			width: "100%",
			display: "block",
			marginBottom: "35px",
			color: ds.get("colors.blue"),

			"@media (min-width: 768px)": {
				animationName: "areaMotion",
				animationDuration: duration,
				animationTimingFunction: "linear",
				animationDelay: delay,
				animationIterationCount: "infinite",
				animationDirection: "alternate",
				animationPlayState: "running",
				":focus-within": {
					animationPlayState: "paused",
				},
			},
		})}
		for={name}
	>
		<span
			class={cxs({
				display: "block",
				marginLeft: "15.5px",
				position: "relative",
				zIndex: ds.get("zIndex.aboveAll"),
				pointerEvents: "none",
			})}
		>
			{label}
		</span>
		<textarea
			required
			name={name}
			placeholder=" "
			rows="6"
			title="Your message too short, it must be at least 10 characters long."
			pattern=".{10,}"
			class={cxs({
				color: "currentColor",
				borderStyle: "solid",
				borderWidth: "1px",
				backgroundColor: ds.get("colors.background.dark"),
				fontFamily: "inherit",
				fontSize: "inherit",
				padding: "15.5px",
				width: "100%",
				boxShadow: "0px 21px 47px -2px rgba(0,0,0,0.55)",
				animation: "glow 1500ms linear infinite alternate",
				transition: ds.get("transition.fast"),
				":focus": {
					outline: 0,
					animation: "none",
					borderColor: ds.get("colors.blue"),
				},
				":not(:focus):placeholder-shown": {
					transform: "translateY(-35px)",
				},
			})}
		/>
	</label>
)
