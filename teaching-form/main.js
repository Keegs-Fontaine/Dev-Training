const form = document.querySelector(".main__form")
const submitBtn = document.querySelector(".main__form-submit-btn")
const checkboxArr = document.querySelectorAll(".main__checkbox-grouping-container input")
const passwordContainers = document.querySelectorAll(".main__form-input-container.password")
const firstPassword = document.querySelector("#password-first")
const confirmPassword = document.querySelector("#password-confirm")
const yearsTeaching = document.querySelector("#years-teaching")

passwordContainers.forEach(passwordContainer => {
	const passwordBox = passwordContainer.querySelector("input")
	const showHideBtn = passwordContainer.querySelector("button")

	showHideBtn.addEventListener("click", e => {
		e.target.innerText = e.target.innerText === "HIDE" ? "SHOW" : "HIDE"
		passwordBox.type = passwordBox.type === "text" ? "password" : "text"
	})
})

function validateCheckboxes() {
	for (let i = 0; i < checkboxArr.length; i++) {
		if (checkboxArr[i].checked) return true
	}

	return false
}

form.addEventListener("submit", e => {
	e.preventDefault()

	if (!validateCheckboxes()) checkboxArr[0].setCustomValidity("Please Select a Checkbox")
	if (firstPassword.value === confirmPassword.value) firstPassword.setCustomValidity("Passwords Don't Match")

	const yearsRemote = document.querySelector("#years-remote")
	if (parseInt(yearsTeaching.value) < parseInt(yearsRemote.value))
		yearsTeaching.setCustomValidity("Years Teaching Must be Less Or Equal to Years Remote")

	form.reportValidity()
})
submitBtn.addEventListener("click", () => {
	checkboxArr[0].setCustomValidity("")
	firstPassword.setCustomValidity("")
	yearsTeaching.setCustomValidity("")
})
