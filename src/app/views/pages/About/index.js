import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"

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
							width: "350px",
							height: "350px",
							overflow: "hidden",
							left: "50%",
							transform: "translateX(-50%)",
						})}
					>
						<GlitchImage id="portrait" src={portrait} />
					</div>
					<DistortedImage id="lettersBackground" src={letters} filterSrc={filter} />
				</div>
				<PageTitle id="titlePage" title="About" />
				<SubTitle id="subTitlePage" title="Who I am" />
			
			</div>
		</Enter>
	</div>
)
