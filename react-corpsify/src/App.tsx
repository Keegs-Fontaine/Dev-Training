// Types
import { SoundDetails } from "./types/soundTypes"

interface SoundDetailsContext {
	soundDetails: SoundDetails | null
	setSoundDetails: (soundDetails: SoundDetails | null) => void
}

// Sections
import SongSidebar from "./sections/SoundSidebar"
import MainSoundContent from "./sections/MainSoundContent"

// Hooks
import { useState, createContext } from "react"

// Context API
export const MainSoundContentContext = createContext<SoundDetailsContext>({
	soundDetails: null,
	setSoundDetails: () => {},
})

export default function App() {
	const [soundDetails, setSoundDetails] = useState<SoundDetails | null>(null)

	const detailsValue = {
		soundDetails,
		setSoundDetails,
	}

	return (
		<section className="flex flex-col items-center md:flex-row md:items-start">
			<MainSoundContentContext.Provider value={detailsValue}>
				<SongSidebar />
				<MainSoundContent />
			</MainSoundContentContext.Provider>
		</section>
	)
}
