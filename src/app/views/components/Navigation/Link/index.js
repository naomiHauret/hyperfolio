import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default ({ path, name, external }) => {
	const styles = cxs({
		display: "block",
		height: "100%",
		width: "100%",
		padding: ds.pxTo(5, ds.get("typo.pxFontSize.base"), "rem"),
		color: ds.get("colors.text.link"),
		textDecoration: "none",
		letterSpacing: ds.pxTo(3.5, ds.get("typo.pxFontSize.base"), "em"),
	})

	return external === true ? (
		<a href={path} class={styles} target="_blank" rel="external">
			{name}
		</a>
	) : (
		<Link to={path} class={styles}>
			{name}
		</Link>
	)
}
