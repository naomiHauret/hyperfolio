import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ images }) => (
	<div
		class={cxs({
			display: "flex",
			flexWrap: "wrap",
			"@media (min-width: 992px)": {
				"> div": {
					":nth-child(odd)": {
						marginLeft: "auto",
						textAlign: "right",
						"> img": {
							marginLeft: "auto",
						},
					},
					":nth-child(even)": {
						marginRight: "auto",
						textAlign: "left",
						"> img": {
							marginRight: "auto",
						},
					},

					":nth-child(3n+0)": {
						margin: "0 auto",
						textAlign: "center",
						"> img": {
							marginLeft: "auto",
							marginRight: "auto",
						},
					},
					":nth-last-child(-n+2)": {
						width: "50%",
						margin: 0,
					},
				},
			},
		})}
	>
		{images.map((image) => {
			let data = image.project_image
			return (
				<div
					class={cxs({
						width: "100%",
						height: "35vh",
						marginTop: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						marginBottom: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						"@media (min-width: 992px)": {
							maxWidth: ds.pxTo(750, ds.get("typo.pxFontSize.base"), "rem"),
							width: "100%",
							height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
							marginTop: ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem"),
							marginBottom: ds.pxTo(70, ds.get("typo.pxFontSize.base"), "rem"),
						},
					})}
				>
					<img
						alt={data.alt !== null ? data.alt : ""}
						class={cxs({
							width: "100%",
							height: "100%",
							display: "block",
							objectFit: "cover",
							objectPosition: "center",
							transition: "all 550ms ease-in-out",
							":not(.b-loaded)": {
								filter: "blur(20px)",
							},

							".b-loaded": {
								"@media (min-width: 992px)": {
									objectFit: "contain",
									cursor: "nesw-resize",
									filter: "blur(5px)",
									transition: "linear 250ms",
									":hover": {
										filter: "blur(0)",
									},
								},
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
		})}
	</div>
)
