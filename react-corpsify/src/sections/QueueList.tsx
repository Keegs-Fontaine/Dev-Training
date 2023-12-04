// Hooks
import { useContext, useEffect } from "react"

// Context
import { GlobalPlaylistContext } from "../App"

export default function QueueList() {
	let currentIndex = 0

	const { playlistSounds, currentlyPlaying, setCurrentlyPlaying } = useContext(GlobalPlaylistContext)

	useEffect(() => {
		setCurrentlyPlaying(playlistSounds[currentIndex])
	})

	if (currentlyPlaying)
		currentIndex = playlistSounds.indexOf(currentlyPlaying) === -1 ? 0 : playlistSounds.indexOf(currentlyPlaying)

	return (
		<article className="w-[25rem] fixed right-0 bottom-0 bg-clr-primary-200 text-white p-8 rounded-tl-[2rem]">
			<h3 className="uppercase border-b-2">now playing</h3>
			<section className="py-8">
				<h4 className="mb-4 uppercase">{currentlyPlaying?.name}</h4>
				<audio
					controls
					src={currentlyPlaying?.previews["preview-hq-mp3"]}
					onEnded={() => {
						setCurrentlyPlaying(playlistSounds[currentIndex + 1])
					}}
				></audio>
			</section>
			<h4 className="border-b-2">up next</h4>
			<section className="h-[12rem] overflow-scroll">
				{playlistSounds.map((sound, i) => {
					return (
						<section
							className={`w-fit cursor-pointer ${
								i === currentIndex && "border-b-2 text-clr-primary-300"
							}`}
							key={sound.id}
							onClick={() => setCurrentlyPlaying(playlistSounds[i])}
						>
							{sound.name}
						</section>
					)
				})}
			</section>
		</article>
	)
}
