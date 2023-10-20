const form = document.querySelector(".main__form")
const submitBtn = document.querySelector(".main__form-submit-btn")
const checkboxArr = document.querySelectorAll(".main__checkbox-grouping-container input")
const passwordContainers = document.querySelectorAll("main__form-input-container.password")
const firstPassword = document.querySelector("#password-first")
const confirmPassword = document.querySelector("#password-confirm")

// DELETE LATER
document.querySelectorAll("input").forEach(input => {
	input.value = "f@gmail"

	if (input.type === "number") input.value = "12"
})
document.querySelector("select").value = "FL"

passwordContainers.forEach(passwordContainer => {
	passwordBox = passwordContainer.querySelector("input")
	showHideBtn = passwordContainer.querySelector(".show-hide-btn")

	showHideBtn.addEventListener("click", () => console.log(passwordBox, showHideBtn))

	console.log(showHideBtn)
})

function validateCheckboxes() {
	for (let i = 0; i < checkboxArr.length; i++) {
		if (checkboxArr[i].checked) return true
	}

	return false
}

function validatePasswords() {
	return firstPassword.value === confirmPassword.value
}

form.addEventListener("submit", e => {
	e.preventDefault()
	console.log("FORM SUBMIT")

	if (!validateCheckboxes()) checkboxArr[0].setCustomValidity("Please Select a Checkbox")
	if (!validatePasswords()) firstPassword.setCustomValidity("Passwords Don't Match")

	form.reportValidity()
})
submitBtn.addEventListener("click", () => {
	checkboxArr[0].setCustomValidity("")
	firstPassword.setCustomValidity("")
})
