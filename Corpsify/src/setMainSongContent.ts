import fetchData from "./fetchData"

export default async function setMainSongContent(soundId: number) {
	const main = document.querySelector("#main")
	const data = await fetchData(
		`https://freesound.org/apiv2/sounds/${soundId}?token=eTn9vAatgMdzT4sB0qHhkOAU0lM8cw4eZgVo5cyx`
	)

	main!.querySelectorAll("*").forEach(domNode => {
		if (domNode.id) {
			domNode.innerText = data[domNode.id]
		}
	})

	main!.querySelector("audio")!.src = data.previews["preview-hq-mp3"]
	main!.querySelector("img")!.src = data.images["waveform_m"]

	main!.classList.remove("hidden")
}
