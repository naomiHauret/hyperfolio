
import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ type, label, name, duration, delay, direction, transformOrigin }) => (
	<label
		class={cxs({
			width: "100%",
			display: "block",
			marginBottom: "35px",

			"@media (min-width: 768px)": {
				transformOrigin: transformOrigin,
				animationName: "outerMotion",
				animationDuration: duration,
				animationTimingFunction: "linear",
				animationDelay: delay,
				animationDirection: direction,
				animationIterationCount: "infinite",
				animationPlayState: "running",
				":focus-within": {
					animationPlayState: "paused",
					"> div:first-child": {
						animationPlayState: "paused",
					},
				},
			},
		})}
		for={name}
	>
		<div
			class={cxs({
				color: ds.get("colors.blue"),
				"@media (min-width: 768px)": {
					animationName: "innerMotion",
					animationDuration: duration,
					animationTimingFunction: "linear",
					animationDelay: delay,
					animationIterationCount: "infinite",
					animationDirection: direction,
					animationPlayState: "running",
				},
			})}
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
			<input
				required
				name={name}
				type={type}
				placeholder=" "
				title={type === "email" ? "Invalid email address" : "Needs at least 2 characters."}
				pattern={type === "email" ? ".{5,45}" : "{2,175}$"}
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
					marginBottom: "10px",
					":focus": {
						outline: 0,
						animation: "none",
						borderColor: ds.get("colors.blue"),
					},
					":not(:focus):placeholder-shown": {
						transform: "translateY(-35px)",
						marginBottom: "0",
					},
				})}
			/>
		</div>
	</label>
)
