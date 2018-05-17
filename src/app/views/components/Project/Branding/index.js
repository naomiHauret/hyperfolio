import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ data }) => {
	return (
		<div
			class={cxs({
				width: "100%",
				height: ds.pxTo(data["xs-1x"].dimensions.height, ds.get("typo.pxFontSize.base"), "rem"),
				"@media (min-width: 768px)": {
					width: ds.pxTo(data["sm-1x"].dimensions.width, ds.get("typo.pxFontSize.base"), "rem"),
					height: ds.pxTo(data["sm-1x"].dimensions.height, ds.get("typo.pxFontSize.base"), "rem"),
				},
			})}
		>
			<img
				alt={data.alt !== null ? data.alt : ""}
				class={cxs({
					width: "100%",
					height: "100%",
					display: "block",
					objectFit: "contain",
					transition: "all 550ms ease-in-out",
					":not(.b-loaded)": {
						filter: "blur(30px)",
						objectFit: "cover",
					},
				})}
				src={data.preview.url}
				data-lazy={true}
				data-src={`${data.url}`}
				data-srcset={`
				${data["xs-1x"].url} ${data["xs-1x"].dimensions.width}w,
				${data["xs-2x"].url} ${data["xs-2x"].dimensions.width}w,
				${data["sm-1x"].url} ${data["sm-1x"].dimensions.width}w,
				${data.url} ${data.dimensions.width}w
            `}
				sizes={`100vw`}
			/>
		</div>
	)
}
