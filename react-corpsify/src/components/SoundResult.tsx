// Types
import { SoundResultProps } from "../types/soundTypes"

// Utility Functions
import fetchData from "../utilities/fetchData"

// Hooks
import { useContext } from "react"

// Context
import { MainSoundContentContext } from "../App"

// Assets
import currentlyPlaying from "../assets/icon-playing.svg"
import inCurrentPlaylist from "../assets/icon-playlist.svg"

export default function SongResult({ name, username, id, activeSoundId, setActiveSoundId }: SoundResultProps) {
	const { setSoundDetails, setIsSoundLoading } = useContext(MainSoundContentContext)

	return (
		<article
			className={`px-4 flex justify-between items-center cursor-pointer border-b-2 transition-colors duration-100 ${
				activeSoundId === id && "bg-clr-primary-300"
			}`}
			onClick={async () => {
				setActiveSoundId(id)
				setIsSoundLoading(true)

				const data = await fetchData(
					`https://freesound.org/apiv2/sounds/${id}?token=eTn9vAatgMdzT4sB0qHhkOAU0lM8cw4eZgVo5cyx`
				)

				setSoundDetails(data)
				setIsSoundLoading(false)
			}}
		>
			<div>
				<h3>{name}</h3>
				<p className="text-gray-500 italic">{username}</p>
			</div>
			<div>{}</div>
		</article>
	)
}
