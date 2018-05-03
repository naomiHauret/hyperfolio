import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ type, label, name, duration, delay, direction, transformOrigin, indent }) => (
	<label
		class={cxs({
			width: "100%",
			display: "block",
			marginBottom: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),

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
				color: ds.get("colors.text.input.label"),
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
					marginLeft: ds.pxTo(ds.get("spacing.input"), ds.get("typo.pxFontSize.base"), "rem"),
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
			<input
				required
				name={name}
				type={type}
				placeholder=" "
				title={type === "email" ? "Invalid email address" : "Needs at least 2 characters."}
				pattern={type === "email" ? ".{5,45}" : "{2,175}$"}
				class={cxs({
					borderStyle: "solid",
					backgroundColor: ds.get("colors.background.dark"),
					color: ds.get("colors.text.input.value"),
					textIndent: `${indent}ch`,
					fontFamily: "inherit",
					borderWidth: ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem"),
					fontSize: ds.get("typo.sizes.xs"),
					padding: ds.pxTo(ds.get("spacing.input"), ds.get("typo.pxFontSize.base"), "rem"),
					boxShadow: ds.get("boxShadow.default"),
					transform: `translateY(${ds.pxTo(-35, ds.get("typo.pxFontSize.base"), "rem")})`,
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
		</div>
	</label>
)
