// Mobile Hamburger Menu
const hamBtn = document.querySelector(".main-header__ham")

hamBtn.addEventListener("click", () => {
	const menu = document.querySelector(".main-header__list")

	if (menu.classList.contains("fade-in") || menu.classList.contains("fade-out")) {
		menu.classList.toggle("fade-in")
		menu.classList.toggle("fade-out")
		return
	}

	menu.classList.add("fade-in")
})

// Carousel
const carouselImgContainer = document.querySelector(".main__carousel-img-container")
const leftBtn = document.querySelector("#left-btn")
const rightBtn = document.querySelector("#right-btn")
const orbIndicators = document.querySelectorAll(".main__carousel-indicator")

function updateCarouselOrbs(orbCount) {
	orbIndicators.forEach(orb => orb.classList.remove("active"))

	orbIndicators[orbCount].classList.add("active")
}

leftBtn.addEventListener("click", () => {
	// This value is used as a reference to update the actual translate style.
	// Math.ceil is used to ensure the translate values can only exist in multiples of 100
	const currentTranslate = Math.ceil(parseInt(getComputedStyle(carouselImgContainer).translate) / 100) * 100

	if (currentTranslate < 0) {
		carouselImgContainer.style.translate = currentTranslate + 100 + "%"
		updateCarouselOrbs(currentTranslate / -100 - 1)
	}
})

rightBtn.addEventListener("click", () => {
	const currentTranslate = Math.floor(parseInt(getComputedStyle(carouselImgContainer).translate) / 100) * 100

	if (currentTranslate > (carouselImgContainer.childElementCount - 1) * -100) {
		carouselImgContainer.style.translate = currentTranslate - 100 + "%"
		updateCarouselOrbs(currentTranslate / -100 + 1)
	}
})
