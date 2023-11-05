// Exported Types
export interface SoundResData {
	id: number
	name: string
	username: string
}

export interface SoundResultProps extends SoundResData {
	activeSoundId: number | null
	setActiveSoundId: (id: number) => void
}

export interface SoundDetails extends SoundResData {
	description: string
	tags: string[]
	filesize: number
	num_downloads: number
	avg_rating: number
	created: string
	previews: Previews
	images: Images
}

// Temporary types
type Previews = {
	"preview-hq-mp3": string
	"preview-lq-mp3": string
}

type Images = {
	waveform_l: string
}
