import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { Enter, Exit, Move } from "@hyperapp/transitions"

export default (props, children) => {
	return (
		<Exit easing="ease-in-out" time={250} css={{ opacity: 1 }}>
			<Enter easing="ease-in-out" time={350} css={{ opacity: 0 }}>
				<div
					class={cxs({
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: ds.get("zIndex.modal"),
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					})}
				>
					<Exit easing="ease-in-out" time={250} css={{ opacity: 1, transform: "translateX(-5%) scale(0.75)" }}>
						<Enter easing="ease-in-out" time={550} css={{ opacity: 0 }}>
							<div
								class={cxs({
									position: "absolute",
									top: 0,
									left: 0,
									backgroundColor: "rgba(0, 0, 0, 0.65)",
									width: "100%",
									height: "100%",
								})}
							/>
						</Enter>
					</Exit>
					<Exit easing="ease-in-out" time={250} css={{ opacity: 1 }}>
						<Enter easing="ease-in-out" delay={375} time={550} css={{ opacity: 0, transform: "translateY(-5%) scale(0.75)" }}>
							<div
								class={cxs({
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									width: "calc(100vw - 30px)",
									height: "calc(100vh - 30px)",
									maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
									border: `solid ${ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem")} ${ds.get("colors.border.modal")}`,
									backgroundColor: ds.get("colors.background.dark"),
									position: "relative",
									zIndex: 50,
									padding: `
													${ds.pxTo(0, ds.get("typo.pxFontSize.base"), "rem")}
													${ds.pxTo(40, ds.get("typo.pxFontSize.base"), "rem")}
													${ds.pxTo(40, ds.get("typo.pxFontSize.base"), "rem")}
												`,
									"@media (min-width: 768px)": {
										width: "50%",
										height: "auto",
										maxWidth: ds.pxTo(550, ds.get("typo.pxFontSize.base"), "rem"),
									},
								})}
							>
								{children}
							</div>
						</Enter>
					</Exit>
				</div>
			</Enter>
		</Exit>
	)
}
