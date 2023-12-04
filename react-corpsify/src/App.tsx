// Types
import { SoundDetails } from "./types/soundTypes"
import { Dispatch } from "react"

interface GlobalSoundDetails {
	soundDetails: SoundDetails | null
	setSoundDetails: Dispatch<SetStateAction<SoundDetails | null>>
	isSoundLoading: boolean
	setIsSoundLoading: Dispatch<SetStateAction<boolean>>
}

interface GlobalPlaylistDetails {
	playlistSounds: SoundDetails[]
	setPlaylistSounds: Dispatch<SetStateAction<SoundDetails[]>>
	currentlyPlaying: SoundDetails | null
	setCurrentlyPlaying: Dispatch<SetStateAction<SoundDetails | null>>
}

// Sections
import SongSidebar from "./sections/SoundSidebar"
import MainSoundContent from "./sections/MainSoundContent"
import QueueList from "./sections/QueueList"

// Hooks
import { useState, createContext, SetStateAction } from "react"

// Context API
export const MainSoundContentContext = createContext<GlobalSoundDetails>({
	soundDetails: null,
	setSoundDetails: () => {},
	isSoundLoading: false,
	setIsSoundLoading: () => {},
})

export const GlobalPlaylistContext = createContext<GlobalPlaylistDetails>({
	playlistSounds: [],
	setPlaylistSounds: () => {},
	currentlyPlaying: null,
	setCurrentlyPlaying: () => {},
})

export default function App() {
	const [soundDetails, setSoundDetails] = useState<SoundDetails | null>(null)
	const [isSoundLoading, setIsSoundLoading] = useState(false)
	const [playlistSounds, setPlaylistSounds] = useState<SoundDetails[]>([])
	const [currentlyPlaying, setCurrentlyPlaying] = useState<SoundDetails | null>(null)

	return (
		<section className="flex flex-col items-center md:flex-row md:items-start">
			<GlobalPlaylistContext.Provider
				value={{ playlistSounds, setPlaylistSounds, currentlyPlaying, setCurrentlyPlaying }}
			>
				<MainSoundContentContext.Provider
					value={{
						soundDetails,
						setSoundDetails,
						isSoundLoading,
						setIsSoundLoading,
					}}
				>
					<SongSidebar />
					<MainSoundContent />
					<QueueList />
				</MainSoundContentContext.Provider>
			</GlobalPlaylistContext.Provider>
		</section>
	)
}
