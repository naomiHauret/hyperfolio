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
					":not(:first-child)": {
						"@media (min-width: 1200px)": {
							marginTop: "-10%",
						},
					},
					":nth-child(odd)": {
						marginLeft: "auto",
						"> img": {
							marginLeft: "auto",
							objectPosition: "right",
						},
					},
					":nth-child(even)": {
						marginRight: "auto",
						"> img": {
							marginRight: "auto",
							objectPosition: "left",
						},
					},
					":nth-last-child(3)": {
						marginRight: "auto",
						marginLeft: "auto",
						marginTop: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						marginBottom: ds.pxTo(105, ds.get("typo.pxFontSize.base"), "rem"),
						"> img": {
							objectPosition: "center",
						},
					},
					":nth-last-child(2)": {
						paddingRight: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						"> img": {
							objectPosition: "left",
						},
					},
					":last-child": {
						paddingLeft: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						"> img": {
							objectPosition: "right",
						},
					},
					":nth-last-child(-n+2)": {
						width: "50%",
						margin: 0,
					},
				},
			},
			"@media (min-width: 1440px)": {
				"> div:nth-last-child(2)": {
					padding: 0,
				},
				"> div:last-child": {
					padding: 0,
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
						marginTop: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						height: ds.pxTo(350, ds.get("typo.pxFontSize.base"), "rem"),
						marginBottom: ds.pxTo(35, ds.get("typo.pxFontSize.base"), "rem"),
						"@media (min-width: 992px)": {
							maxWidth: ds.pxTo(970, ds.get("typo.pxFontSize.base"), "rem"),
							width: "100%",
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
							transition: "all 550ms ease-in-out",
							objectFit: "cover",

							":not(.b-loaded)": {
								filter: "blur(20px)",
								objectFit: "contain",
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
