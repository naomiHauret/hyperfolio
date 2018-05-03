import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ label, name, delay, duration, indent }) => (
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
				"::after": {
					content: "':'",
					marginLeft: ds.pxTo(4, ds.get("typo.pxFontSize.base"), "rem"),
				},
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
				color: ds.get("colors.text.input.value"),
				textIndent: `${indent}ch`,
				fontFamily: "inherit",
				borderWidth: ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem"),
				fontSize: ds.get("typo.sizes.xs"),
				padding: ds.pxTo(ds.get("spacing.input"), ds.get("typo.pxFontSize.base"), "rem"),
				boxShadow: ds.get("boxShadow.default"),
				transform: `translateY(${ds.pxTo(-35, ds.get("typo.pxFontSize.base"), "rem")})`,
				borderStyle: "solid",
				backgroundColor: ds.get("colors.background.dark"),
				fontFamily: "inherit",
				width: "100%",
				animation: "glow 1500ms linear infinite alternate",
				transition: ds.get("transition.fast"),
				":focus": {
					outline: 0,
					animation: "none",
					borderColor: ds.get("colors.border.input"),
				},
			})}
		/>
	</label>
)
