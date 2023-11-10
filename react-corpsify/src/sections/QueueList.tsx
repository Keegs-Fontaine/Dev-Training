// Hooks
import { useContext } from "react"

// Context
import { GlobalPlaylistContext } from "../App"

export default function QueueList() {
	const { playlistSounds, currentlyPlayingIndex, setCurrentlyPlayingIndex } = useContext(GlobalPlaylistContext)

	return (
		<article className="w-[25rem] fixed right-0 bottom-0 bg-clr-primary-200 text-white p-8 rounded-tl-[2rem]">
			<h3 className="uppercase border-b-2">now playing</h3>
			<section className="py-8">
				<h4 className="mb-4 uppercase">{playlistSounds[currentlyPlayingIndex]?.name}</h4>
				<audio
					controls
					src={playlistSounds[currentlyPlayingIndex]?.previews["preview-hq-mp3"]}
					onEnded={() => {
						if (playlistSounds[currentlyPlayingIndex + 1]) {
							setCurrentlyPlayingIndex((prev: number) => prev + 1)
							return
						}

						setCurrentlyPlayingIndex(0)
					}}
				></audio>
			</section>
			<h4 className="border-b-2">up next</h4>
			<section className="h-[12rem] overflow-scroll">
				{playlistSounds.map((sound, i) => {
					return (
						<section
							className={`w-fit cursor-pointer ${
								i === currentlyPlayingIndex && "border-b-2 text-clr-primary-300"
							}`}
							key={sound.id}
							onClick={() => setCurrentlyPlayingIndex(i)}
						>
							{sound.name}
						</section>
					)
				})}
			</section>
		</article>
	)
}
