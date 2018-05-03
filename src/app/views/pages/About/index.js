import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import { ds } from "assets/styles/theme"

import CenterLine from "app/views/components/CenterLine"
import DistortedImage from "app/views/components/DistortedImage"
import GlitchImage from "app/views/components/GlitchImage"
import PageTitle from "app/views/components/PageTitle"
import SubTitle from "app/views/components/SubTitle"

import portrait from "assets/images/content/portrait.jpg"
import letters from "assets/images/content/letters.png"
import filter from "assets/images/filters/displacement.svg"
import cxs from "cxs"

export default ({ state, actions, name, metaTitle, desc }) => (
	<div
		key="aboutpage"
		oncreate={actions.setPageMetaData({ metaTitle, desc })}
		onupdate={actions.setPageMetaData({ metaTitle, desc })}
		class={cxs({
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column",
			flexGrow: "1",
		})}
	>
		<Enter>
		<CenterLine id="centerLine" />
			<div
				class={cxs({
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					flexGrow: "1",
				})}
			>
				<div
					class={cxs({
						marginTop: "150px",
					})}
				>
					<div
						class={cxs({
							position: "absolute",
							width: "440px",
							height: "440px",
							overflow: "hidden",
							left: "50%",
							zIndex: 4,
							transform: "translateX(-50%)",
							boxShadow: "0px 90px 0px 0px rgba(0,0,0,0.5)",
						})}
					>
						<GlitchImage id="portrait" src={portrait} />
					</div>
					<div
						class={cxs({
							marginTop: "40px",
						})}
					>
						<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
					</div>
				</div>
				<PageTitle id="titlePage" title="About" />
				<div
					class={cxs({
						marginTop: "100px",
					})}
				>
					<SubTitle id="subTitlePage" title="Who i am" />
				</div>
				<div
					class={cxs({
						marginLeft: "auto",
						marginRight: "auto",
						width: "440px",
						lineHeight: ds.get("typo.lineHeight.paragraph"),
					})}
				>
					Lorem ipsum, sit amet tempus lectus lacinia id. Aliquam erat volutpat. Nulla eget arcu lorem. Maecenas magna mi, mattis at egestas et, commodo vel libero. Mauris at erat fermentum tortor rhoncus tincidunt nec at libero. Curabitur vitae laoreet odio. In ipsum velit, sodales eget lobortis nec, luctus maximus urna.<br /><br />
					Nulla fringilla vulputate magna, quis congue quam vulputate in. Ut aliquam dolor in eros placerat, vel porttitor purus dictum. Praesent sem turpis, gravida id lobortis sit amet, viverra quis lectus. Sed sed metus tellus.
				</div>
			</div>
		</Enter>
	</div>
)
