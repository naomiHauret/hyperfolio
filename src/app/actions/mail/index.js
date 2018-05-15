export default {
	sendMail: (form) => {
		const mailForm = document.forms[form]
		const sender = mailForm.elements["sender"].value.trim()
		const email = mailForm.elements["email"].value.trim()
		const subject = mailForm.elements["subject"].value.trim()
		const message = mailForm.elements["message"].value.trim()
		const trap = mailForm.elements["*honeypot"].value

		const formData = { sender, email, subject, message }

		formData["*reply"] = "email"
		formData["*subject"] = "Nouveau message depuis ton site"
		formData["*default_email"] = process.env.ENFORMED_SEND_MAIL_TO

		if (
			trap === "" &&
			mailForm.checkValidity() &&
			sender !== "" &&
			email !== "" &&
			subject !== null &&
			message !== null
		) {
			fetch(`https://www.enformed.io/${process.env.ENFORMED_KEY}/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			})
				.then((response) => response.json())
				.then((data) => {
					mailForm.elements["sender"].value = ""
					mailForm.elements["email"].value = ""
					mailForm.elements["subject"].value = ""
					mailForm.elements["message"].value = ""
				})
				.catch((err) => console.log(err))
		}
		return {
			...state,
		}
	},

	showSentMessage: () => ({
		emailSentMessage: true,
	})
}
