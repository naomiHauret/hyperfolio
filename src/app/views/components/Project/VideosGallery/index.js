import { h } from "hyperapp"
import Video from "app/views/components/Video"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ videos, readWarning }) => (
	<div
		class={cxs({
			"> div:nth-child(odd)": {
				marginRight: "auto",
				"@media (min-width: 768px)": {
					width: "75%",
				},
				"@media (min-width: 1199px)": {
					width: "50%",
				},
			},
			"> div:nth-child(even)": {
				marginLeft: "auto",
				"@media (min-width: 768px)": {
					width: "65%",
				},
				"@media (min-width: 1199px)": {
					width: "55%",
				},
			},
			"> div:last-child": {
				marginLeft: "auto",
				marginRight: "0",
				width: "100%",
				marginBottom: ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem"),
			},
		})}
	>
		{videos.map((video) => (
			<div
				class={cxs({
					height: "395px",
				})}
			>
				<Video type="project" loop={true} autoplay={true} videoId={video.project_video} readWarning={readWarning} />
			</div>
		))}
	</div>
)
