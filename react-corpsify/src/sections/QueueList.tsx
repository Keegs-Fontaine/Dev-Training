// Hooks
import { useContext } from "react"

// Context
import { MainSoundContentContext } from "../App"

export default function QueueList() {
	const { playlistSounds } = useContext(MainSoundContentContext)

	return (
		<article className="absolute right-0 bottom-0 bg-clr-primary-200">
			<h3>NOW PLAYING</h3>
			<section></section>
			<section></section>
		</article>
	)
}
