// Hooks
import { useContext } from "react"

// Context
import { MainSoundContentContext } from "../App"
import { GlobalPlaylistContext } from "../App"

export default function MainSoundContent() {
	const { soundDetails, isSoundLoading } = useContext(MainSoundContentContext)
	const { playlistSounds, setPlaylistSounds, currentlyPlayingIndex, setCurrentlyPlayingIndex } =
		useContext(GlobalPlaylistContext)

	if (isSoundLoading) {
		return (
			<h1 className="w-screen h-screen grid place-content-center text-3xl text-clr-primary-100 uppercase">
				Loading Song
			</h1>
		)
	}

	return soundDetails ? (
		<main className="w-screen max-w-[35rem] p-4 pt-9">
			<div className="mb-10 grid gap-4">
				<h1 className="font-bold text-3xl text-clr-primary-100 before:content-['Now_Playing'] before:block before:text-gray-400 before:font-light before:text-base">
					{soundDetails.name}
				</h1>
				<p className="text-gray-500 italic">by {soundDetails.username}</p>
				<p className="fonts-bold">Tags: {soundDetails.tags.join(", ")}</p>
			</div>
			<div className="mb-10 flex gap-7">
				<a
					className="flex items-center px-6 bg-clr-primary-200 text-white"
					href="#"
					onClick={() => {
						const playlistIdArr = playlistSounds.map(soundDetails => soundDetails.id)

						if (playlistIdArr.includes(soundDetails.id)) {
							setCurrentlyPlayingIndex(playlistIdArr.indexOf(soundDetails.id))
							return
						}

						setPlaylistSounds([
							...playlistSounds.slice(0, currentlyPlayingIndex),
							soundDetails,
							...playlistSounds.slice(currentlyPlayingIndex),
						])
					}}
				>
					Play
				</a>
				<a
					className="flex items-center px-6 bg-clr-primary-300 text-clr-primary-200"
					href="#"
					onClick={() => setPlaylistSounds([...playlistSounds, soundDetails])}
				>
					Add To Playlist
				</a>
				<a className="flex items-center flex-col ml-auto px-6 py-1 bg-clr-primary-100 text-white" href="">
					Download
					<p className="text-[0.5rem]">File Size: {(soundDetails.filesize / 1_000_000).toFixed(1)} MB</p>
				</a>
			</div>
			<div>
				<img className="w-full" src={soundDetails.images["waveform_l"]} alt="" />
			</div>
		</main>
	) : (
		<h1 className="w-full h-screen grid place-content-center text-2xl text-gray-500 italic uppercase">
			Search To See Results
		</h1>
	)
}
