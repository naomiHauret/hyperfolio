import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default (props, children) => {
	const { withClose, title, buttonLabel } = props
	return (
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
				<Exit easing="ease-in-out" time={550} css={{ opacity: 1, transform: "translateX(-5%) scale(0.75)" }}>
					<Enter easing="ease-in-out" time={550} css={{ opacity: 0 }}>
						<div
							class={cxs({
								position: "absolute",
								top: 0,
								left: 0,
								backgroundColor: ds.get("colors.background.dark"),
								opacity: 0.75,
								width: "100%",
								height: "100%",
								opacity: 1,
							})}
						/>
					</Enter>
				</Exit>
				<Enter easing="ease-in-out" delay={375} time={550} css={{ opacity: 0, transform: "translateY(-5%) scale(0.75)" }}>
					<div
						class={cxs({
							minWidth: ds.pxTo(200, ds.get("typo.pxFontSize.base"), "rem"),
							height: "auto",
							border: `solid ${ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem")} ${ds.get("colors.border.modal")}`,
							backgroundColor: ds.get("colors.background.dark"),
							padding: `
													${ds.pxTo(0, ds.get("typo.pxFontSize.base"), "rem")}
													${ds.pxTo(40, ds.get("typo.pxFontSize.base"), "rem")}
													${ds.pxTo(40, ds.get("typo.pxFontSize.base"), "rem")}
												`,
							position: "relative",
							zIndex: 50,
						})}
					>
						<h3
							class={cxs({
								color: ds.get("colors.text.title"),
								fontSize: ds.get("typo.sizes.md"),
								letterSpacing: ds.pxTo(5, ds.get("typo.pxFontSize.base"), "rem"),
								textTransform: "uppercase",
							})}
						>
							Thanks
						</h3>
						<p>
							Thanks for your email !<br />
							I will answer you as soon as possible.
						</p>
						<button
							class={cxs({
								backgroundColor: ds.get("colors.background.colorful"),
								color: ds.get("colors.text.link"),
								border: 0,
								fontFamily: "inherit",
								fontSize: "inherit",
							})}
							onclick={actions.toggleShowSentMessage}
						>
							<Link
								class={cxs({
									color: "inherit",
									textDecoration: "none",
									textTransform: "uppercase",
									display: "block",
									width: "100%",
									height: "100%",
									padding: ds.pxTo(10, ds.get("typo.pxFontSize.base"), "rem"),
								})}
								to={`${projectsPageUrl}/${state.projects[0]["uid"]}`}
							>
								Go back to projects
							</Link>
						</button>
					</div>
				</Enter>
			</div>
		</Enter>
	)
}
