// Types
import { SoundResData } from "../types/soundTypes"

// Hooks
import { useState, useRef } from "react"

// Utility Functions
import fetchData from "../utilities/fetchData"

// Components
import SoundResult from "../components/SoundResult"

export default function SongSidebar({}) {
	const [soundList, setSoundList] = useState([])
	const [activeSoundId, setActiveSoundId] = useState<number | null>(null)
	const searchQueryBox = useRef<HTMLInputElement>(null)

	return (
		<>
			<aside>
				<form
					action="/"
					onSubmit={async e => {
						e.preventDefault()

						if (searchQueryBox.current) {
							const { results } = await fetchData(
								`https://freesound.org/apiv2/search/text/?query=${searchQueryBox.current.value}&token=eTn9vAatgMdzT4sB0qHhkOAU0lM8cw4eZgVo5cyx`
							)

							setSoundList(results)
						}
					}}
				>
					<h2 className="text-center font-bold text-3xl">Sound Search</h2>
					<div className="flex justify-center">
						<input
							className="w-3/4 border-2 border-gray-500 text-center"
							type="text"
							ref={searchQueryBox}
							required
							placeholder="search here..."
						/>
						<button className="py-2 px-4 bg-clr-primary-100 text-white" type="submit">
							SEARCH
						</button>
					</div>
				</form>
				<section className="overflow-scroll md:max-h-[unset]">
					{soundList.map((soundItem: SoundResData) => (
						<SoundResult
							{...soundItem}
							activeSoundId={activeSoundId}
							setActiveSoundId={setActiveSoundId}
							key={soundItem.id}
						/>
					))}
				</section>
			</aside>
		</>
	)
}
