const form = document.querySelector(".main__form")
const submitBtn = document.querySelector(".main__form-submit-btn")
const checkboxArr = document.querySelectorAll(".main__checkbox-grouping-container input")
const passwordContainers = document.querySelectorAll(".main__form-input-container.password")
const firstPassword = document.querySelector("#password-first")
const confirmPassword = document.querySelector("#password-confirm")
const yearsTeaching = document.querySelector("#years-teaching")
const yearsRemote = document.querySelector("#years-remote")

// Password show-hide-btn
passwordContainers.forEach(passwordContainer => {
	const passwordBox = passwordContainer.querySelector("input")
	const showHideBtn = passwordContainer.querySelector("button")

	showHideBtn.addEventListener("click", e => {
		e.target.innerText = e.target.innerText === "HIDE" ? "SHOW" : "HIDE"
		passwordBox.type = passwordBox.type === "text" ? "password" : "text"
	})
})

// Form Validation
function validateCheckboxes() {
	for (let i = 0; i < checkboxArr.length; i++) {
		if (checkboxArr[i].checked) {
			checkboxArr[0].setCustomValidity("")
			return
		}
	}

	checkboxArr[0].setCustomValidity("Please select a checkbox")
}
validateCheckboxes()

checkboxArr.forEach(checkbox => {
	checkbox.addEventListener("change", () => {
		validateCheckboxes()
		form.reportValidity
	})
})

function validateItems(conditional, element, text) {
	if (conditional) {
		element.setCustomValidity(text)
	} else {
		element.setCustomValidity("")
	}

	form.reportValidity()
}

const validatePassword = () =>
	validateItems(firstPassword.value !== confirmPassword.value, firstPassword, "Passwords Don't Match")
const validateYearsTeaching = () =>
	validateItems(
		parseInt(yearsTeaching.value) < parseInt(yearsRemote.value),
		yearsTeaching,
		"Please select total number of years working"
	)

firstPassword.addEventListener("change", validatePassword)
confirmPassword.addEventListener("change", validatePassword)

yearsTeaching.addEventListener("change", validateYearsTeaching)
yearsRemote.addEventListener("change", validateYearsTeaching)

form.addEventListener("submit", e => e.preventDefault())
