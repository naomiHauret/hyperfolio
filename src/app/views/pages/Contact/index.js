import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { Enter, Exit, Move } from "@hyperapp/transitions"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import DistortedImage from "app/views/components/DistortedImage"
import ContactForm from "app/views/components/ContactForm"
import PageTitle from "app/views/components/PageTitle"
import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/distortion.jpg"
import html2canvas from "html2canvas"
import { contactPageName, projectsPageUrl } from "app/routes"

export default () => (state, actions) => (
	<div
		key="page"
		oncreate={actions.setContactContent(state, actions)}
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Exit easing="linear" time={50} css={{ opacity: 0, overflow: "hidden" }}>
			<Enter easing="ease-in-out" time={550} css={{ opacity: 0, transform: "translateY(-150px)", overflow: "hidden" }}>
				<div
					key="contactcontent"
					class={cxs({
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",
						width: "100%",
						margin: "auto",
						justifyContent: "center",
						"::after": {
							content: "' '",
							width: "1px",
							height: 0,
							backgroundColor: ds.get("colors.blue"),
							position: "absolute",
							left: "50%",
							top: "70px",
							transform: "translateX(-50%)",
							animationName: "unfold",
							animationFillMode: "forwards",
							animationDelay: "750ms",
							animationDuration: "750ms",
						},
						"@media (min-width: 768px)": {
							width: "620px",
						},
					})}
					ondestroy={() => window.scrollTo(0, 0)}
				>
					<PageTitle title={contactPageName} />
					<div
						class={cxs({
							width: "100%",
							position: "absolute",
							pointerEvents: "none",
							zIndex: ds.get("zIndex.aboveAll"),
							left: "50%",
							top: "50%",
							transform: "translate(-50%, -50%)",
							"@media (min-width: 768px)": {
								width: `670px`,
							},
						})}
					>
						<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
					</div>
					{state.emailSent === false ? (
						<ContactForm actions={actions} />
					) : (
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
								role="modal"
							>
								<div
									id="backdrop"
									class={cxs({
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										opacity: 1,
									})}
								/>
								<Enter
									easing="ease-in-out"
									delay={375}
									time={550}
									css={{ opacity: 0, transform: "translateY(-5%) scale(0.75)" }}
								>
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
										oncreate={() =>
											html2canvas(document.body).then((canvas) => {
												let backdrop = document.querySelector("#backdrop")
												backdrop.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")"
												backdrop.style.filter = "blur(5px)"
											})
										}
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
					)}
				</div>
			</Enter>
		</Exit>
	</div>
)
