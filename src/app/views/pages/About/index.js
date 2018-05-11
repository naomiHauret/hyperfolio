import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import { ds } from "assets/styles/theme"

import DistortedImage from "app/views/components/DistortedImage"
import GlitchImage from "app/views/components/GlitchImage"
import PageTitle from "app/views/components/PageTitle"
import HandwrittenTitle from "app/views/components/HandwrittenTitle"

import portrait from "assets/images/content/portrait.jpg"
import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/distortion.jpg"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="page"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
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
				width: ds.pxTo(1, ds.get("typo.pxFontSize.base"), "rem"),
				height: 0,
				backgroundColor: ds.get("colors.blue"),
				position: "fixed",
				left: "50%",
				top: "70px",
				transform: "translateX(-50%) rotate(180deg)",
				animationName: "unfold",
				animationFillMode: "forwards",
				animationDelay: "750ms",
				animationDuration: "750ms",
			},
		})}
	>
		<Exit easing="linear" time={350} css={{ opacity: 0 }}>
			<Enter
				easing="ease-in-out"
				time={550}
				css={{
					transform: state.location.pathname === "/" ? "translateY(25%)" : "translateY(-25%)",
					opacity: 1,
				}}
			>
				<div
					class={cxs({
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",
					})}
				>
					<PageTitle title="About" />

					<div
						class={cxs({
							paddingTop: "150px",
						})}
					>
						<div
							class={cxs({
								position: "absolute",
								width: ds.pxTo(440, ds.get("typo.pxFontSize.base"), "rem"),
								height: ds.pxTo(440, ds.get("typo.pxFontSize.base"), "rem"),
								overflow: "hidden",
								left: "50%",
								transform: "translateX(-50%)",
								zIndex: ds.get("zIndex.aboveAll"),
							})}
						>
							<GlitchImage id="portrait" src={portrait} />
						</div>
						<div
							class={cxs({
								marginTop: ds.pxTo(30, ds.get("typo.pxFontSize.base"), "rem"),
								zIndex: ds.get("zIndex.aboveAll"),
								position: "relative",
							})}
						>
							<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
						</div>
					</div>
					<div
						class={cxs({
							marginTop: ds.pxTo(25, ds.get("typo.pxFontSize.base"), "rem"),
							textAlign: "center",
						})}
					>
						<HandwrittenTitle title="Who i am" />
					</div>
					<div
						class={cxs({
							position: "relative",
							marginLeft: "auto",
							marginRight: "auto",
							marginTop: ds.pxTo(-20, ds.get("typo.pxFontSize.base"), "rem"),
							maxWidth: ds.pxTo(480, ds.get("typo.pxFontSize.base"), "rem"),
							lineHeight: ds.get("typo.lineHeight.paragraph"),
							paddingBottom: ds.pxTo(145, ds.get("typo.pxFontSize.base"), "rem"),
							zIndex: ds.get("zIndex.aboveAll"),
						})}
					>
						<p>
							Lorem ipsum, sit amet tempus lectus lacinia id. Aliquam erat volutpat. Nulla eget arcu lorem. Maecenas magna mi,
							mattis at egestas et, commodo vel libero. Mauris at erat fermentum tortor rhoncus tincidunt nec at libero.
							Curabitur vitae laoreet odio. In ipsum velit, sodales eget lobortis nec, luctus maximus urna.
						</p>
						<p>
							Nulla fringilla vulputate magna, quis congue quam vulputate in. Ut aliquam dolor in eros placerat, vel porttitor
							purus dictum. Praesent sem turpis, gravida id lobortis sit amet, viverra quis lectus. Sed sed metus tellus.
						</p>
					</div>
				</div>
			</Enter>
		</Exit>
	</div>
)
