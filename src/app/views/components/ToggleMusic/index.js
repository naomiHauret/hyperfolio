import { h } from "hyperapp"
import { routes } from "app/routes"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import soundOn from "assets/images/content/soundOn.gif"

export default ({ state, actions }) => {
	return (
		<button
			onclick={actions.togglePlayMusic}
			class={cxs({
				backgroundColor: "transparent",
				color: ds.get("colors.blue"),
				zIndex: ds.get("zIndex.aboveGodView"),
				border: 0,
				position: "fixed",
				cursor: "pointer",
				width: "65px",
				height: "65px",
				display: "flex",
				justifyContent: "center",
				":focus": {
					outline: 0,
				},
				right: "30px",
				top: "35px",
				"@media (min-width: 768px)": {
					bottom: "20px",
					left: "30px",
					top: "unset",
					right: "unset",
				},
			})}
		>
			<div class={cxs({ justifyContent: "flex-end", alignItems: "flex-end" })}>
				{state.isPlayingMusic === true ? (
					<img
						src={soundOn}
						alt="toggle music off"
						class={cxs({
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
							height: "100%",
						})}
					/>
				) : (
					<svg
						class={cxs({
							width: "34px",
							height: "6px",
							marginTop: "13px",
						})}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 5"
					>
						<path
							d="M5.1.8h3.3v3.4H5.1zM10.1.8h3.3v3.4h-3.3zM15.1.8h3.3v3.4h-3.3zM20.1.8h3.3v3.4h-3.3zM.3.8h3.3v3.4H.3z"
							fill={`${ds.get("colors.blue")}`}
						/>
					</svg>
				)}
			</div>
		</button>
	)
}
