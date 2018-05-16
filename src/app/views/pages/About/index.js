import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import { ds } from "assets/styles/theme"
import { aboutPageUrl, contactPageUrl, aboutPageName } from "app/routes"
import DistortedImage from "app/views/components/DistortedImage"
import GlitchImage from "app/views/components/GlitchImage"
import PageTitle from "app/views/components/PageTitle"
import HandwrittenTitle from "app/views/components/HandwrittenTitle"
import portrait from "assets/images/content/portrait.jpg"
import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/distortion.jpg"
import cxs from "cxs"

export default () => (state, actions) => {
	return (
		<div
			key="page"
			oncreate={actions.setAboutContent(state, actions)}
			onupdate={actions.setAboutContent(state, actions)}
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
			<Exit easing="linear" time={50} css={{ opacity: 0 }}>
				<Enter
					easing="ease-in-out"
					time={550}
					css={{
						transform:
							state.location.previous || state.location.pathname === contactPageUrl
								? "translateY(150px)"
								: "translateY(-150px)",
						opacity: 1,
						scrollBehavior: "auto",
					}}
				>
					<div
						class={cxs({
							minHeight: "100vh",
							display: "flex",
							flexDirection: "column",
							flexGrow: "1",
						})}
						ondestroy={() => window.scrollTo(0, 0)}
					>
						<PageTitle title={aboutPageName} />

						<div class={cxs({ paddingTop: "150px" })}>
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
						<div class={cxs({ marginTop: ds.pxTo(25, ds.get("typo.pxFontSize.base"), "rem"), textAlign: "center" })}>
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
							{state.aboutContent ? state.aboutContent.map((text) => <p>{text}</p>) : <p>...</p>}
						</div>
					</div>
				</Enter>
			</Exit>
		</div>
	)
}
