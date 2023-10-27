import fetchData from "./fetchData"

export default async function setMainSongContent(soundId: number) {
	const main = document.querySelector("#main")
	const data = await fetchData(
		`https://freesound.org/apiv2/sounds/${soundId}?token=eTn9vAatgMdzT4sB0qHhkOAU0lM8cw4eZgVo5cyx`
	)

	// this forEach loops over all of the main's children and checks their id value. If it's there,
	// it will set it's text content to the API value with the same key name.
	const mainChildElements: NodeListOf<HTMLElement> = main!.querySelectorAll("*")

	mainChildElements.forEach((domNode: HTMLElement) => {
		domNode.innerText = data[domNode.id]
	})

	main!.querySelector("audio")!.src = data.previews["preview-lq-mp3"]
	main!.querySelector("img")!.src = data.images["waveform_m"]
	main!.querySelector("a")!.href = data.previews["preview-hq-mp3"]

	main!.classList.remove("hidden")
}
