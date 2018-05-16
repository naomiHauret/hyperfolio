import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { homePageUrl, notFoundPageTitle, notFoundPageName, notFoundPageDesc } from "app/routes"

export default () => (state, actions) => (
	<div
		oncreate={actions.setNotFoundContent(state, actions)}
		onupdate={actions.setNotFoundContent(state, actions)}
		key="notfoundpage"
	>
		<h1
			class={cxs({
				fontWeight: ds.get("typo.fontWeight.normal"),
				fontSize: ds.get("typo.sizes.xl"),
				letterSpacing: ds.pxTo(5, ds.get("typo.pxFontSize.xl"), "em"),
			})}
		>
			{notFoundPageName}
		</h1>
		<button
			type="button"
			title="Go back to home page"
			class={cxs({
				backgroundColor: ds.get("colors.background.light"),
				border: "none",
				fontSize: ds.get("typo.sizes.lg"),
				borderRadius: ds.pxTo(12, ds.get("typo.pxFontSize.lg"), "em"),
				fontFamily: "inherit",
				boxShadow: "0 14px 28px rgba(0,0,0,0.01), 0 10px 10px rgba(0,0,0,0.05)",
				padding: 0,
				" > a": {
					color: ds.get("colors.text.rainbow"),
					textDecoration: "none",
					paddingTop: ds.pxTo(5, ds.get("typo.pxFontSize.lg"), "em"),
					paddingBottom: ds.pxTo(10, ds.get("typo.pxFontSize.lg"), "em"),
					paddingLeft: ds.pxTo(58.75, ds.get("typo.pxFontSize.lg"), "em"),
					paddingRight: ds.pxTo(58.75, ds.get("typo.pxFontSize.lg"), "em"),
					display: "inline-block",
				},
			})}
		>
			<Link to={homePageUrl}>Go back</Link>
		</button>
	</div>
)
