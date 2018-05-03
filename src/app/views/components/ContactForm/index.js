import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { Enter } from "@hyperapp/transitions"
import Button from "app/views/components/ContactForm/Button"
import Input from "app/views/components/ContactForm/Input"
import Textarea from "app/views/components/ContactForm/Textarea"

export default ({ actions }) => (
	<form
		id="contact"
		onsubmit={(e) => {
			e.preventDefault()
			const form = e.currentTarget.id
			return actions.sendMail(form)
		}}
		style={{
			"--inputBorderColorFrom": ds.get("colors.border.input"),
			"--inputBorderColorTo": ds.get("colors.blueTransparent"),
		}}
		class={cxs({
			display: "flex",
			flexDirection: "column",
			zIndex: ds.get("zIndex.mid"),
			padding: "0 3.75vw",
			"@media (min-width: 768px)": {
				padding: 0,
			},
		})}
	>
		<Enter easing="ease-in-out" delay={750} time={850} css={{ transform: "translateX(-75%)" }}>
			<div
				class={cxs({
					"@media (min-width: 768px)": {
						width: "44.15%",
					},
				})}
			>
				<Input
					type="text"
					name="sender"
					duration="7450ms"
					delay="0s"
					direction="reverse"
					transformOrigin="50% 25px"
					label="Name"
					indent={7}
				/>
			</div>
		</Enter>
		<Enter easing="ease-in-out" delay={650} time={850} css={{ transform: "translateX(75%)" }}>
			<div
				class={cxs({
					"@media (min-width: 768px)": {
						width: "44.15%",
						marginLeft: "auto",
					},
				})}
			>
				<Input
					type="email"
					name="email"
					duration="7210ms"
					delay="250ms"
					direction="normal"
					transformOrigin="50% 15px"
					label="Email"
					indent={7}
				/>
			</div>
		</Enter>
		<Enter easing="ease-in-out" delay={690} time={850} css={{ transform: "translateX(-75%)" }}>
			<div
				class={cxs({
					"@media (min-width: 768px)": {
						width: "60.5%",
						marginLeft: "auto",
						transform: "translateX(-20%)",
					},
				})}
			>
				<Input
					type="text"
					name="subject"
					label="Subject"
					duration="7750ms"
					delay="750ms"
					direction="normal"
					transformOrigin="50% 30px"
					indent={8.5}
				/>
			</div>
		</Enter>
		<Enter easing="ease-in-out" delay={720} time={850} css={{ transform: "translateX(75%)" }}>
			<div>
				<Textarea label="Message" name="message" duration="7750ms" delay="750ms" indent={9.5} />
			</div>
		</Enter>
		<input type="hidden" name="*honeypot" />
		<div
			class={cxs({
				"@media (min-width: 768px)": {
					margin: "auto",
				},
			})}
		>
			<Button>Submit</Button>
		</div>
	</form>
)
