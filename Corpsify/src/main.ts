// Function Imports
import setMainSongContent from "./setSongContent"
import fetchData from "./fetchData"

// Interfaces / Type declarations
interface apiResData {
	id: number
	name: string
	tags: string[]
	license: string
	username: string
}

// App Start
const sidebarSongSection = document.querySelector("#sidebar__sound-return-section")
const form = document.querySelector("#sidebar__sound-request-form")
const searchInput: HTMLInputElement | null = document.querySelector("#sidebar__search-input")

// Of course using "!" is a bad idea, but just for testing with TS
form!.addEventListener("submit", async e => {
	e.preventDefault()

	sidebarSongSection!.innerHTML = "Loading"

	const API_URL: string = `https://freesound.org/apiv2/search/text/?query=${
		searchInput!.value
	}&token=eTn9vAatgMdzT4sB0qHhkOAU0lM8cw4eZgVo5cyx`

	const { results } = await fetchData(API_URL)

	sidebarSongSection!.innerHTML = ""
	results.forEach((result: apiResData) => {
		const article: HTMLElement = document.createElement("article")
		article.innerHTML = `<h2>${result.name}</h2><p>by ${result.username}</p>`

		article.addEventListener("click", () => {
			const songTags: NodeListOf<HTMLElement> = sidebarSongSection!.querySelectorAll("article")
			songTags.forEach(songTag => songTag.classList.remove("active"))

			article.classList.add("active")
			setMainSongContent(result.id)
		})

		sidebarSongSection!.appendChild(article)
	})
})
