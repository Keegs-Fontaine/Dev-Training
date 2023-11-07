// Types
import { SoundDetails } from "./types/soundTypes"

interface GlobalSoundDetails {
	soundDetails: SoundDetails | null
	setSoundDetails: (soundDetails: SoundDetails) => void
	isSoundLoading: boolean
	setIsSoundLoading: (value: boolean) => void
	playlistSounds: SoundDetails[]
	setPlaylistSounds: () => void
}

// Sections
import SongSidebar from "./sections/SoundSidebar"
import MainSoundContent from "./sections/MainSoundContent"
import QueueList from "./sections/QueueList"

// Hooks
import { useState, createContext } from "react"

// Context API
export const MainSoundContentContext = createContext<GlobalSoundDetails>({
	soundDetails: null,
	setSoundDetails: () => {},
	isSoundLoading: false,
	setIsSoundLoading: () => {},
	playlistSounds: [],
	setPlaylistSounds: () => {},
})

export default function App() {
	const [soundDetails, setSoundDetails] = useState<SoundDetails | null>(null)
	const [isSoundLoading, setIsSoundLoading] = useState<boolean>(false)
	const [playlistSounds, setPlaylistSounds] = useState<SoundDetails[]>([])

	const detailsValue = {
		soundDetails,
		setSoundDetails,
		isSoundLoading,
		setIsSoundLoading,
		playlistSounds,
		setPlaylistSounds,
	}

	return (
		<section className="flex flex-col items-center md:flex-row md:items-start">
			<MainSoundContentContext.Provider value={detailsValue}>
				<SongSidebar />
				<MainSoundContent />
				<QueueList />
			</MainSoundContentContext.Provider>
		</section>
	)
}
