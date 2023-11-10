// Types
import { SoundResData } from "../types/soundTypes"

// Hooks
import { useState, useRef } from "react"

// Utility Functions
import fetchData from "../utilities/fetchData"

// Components
import SoundResult from "../components/SoundResult"

export default function SongSidebar() {
	const [soundList, setSoundList] = useState([])
	const [activeSoundId, setActiveSoundId] = useState<number | null>(null)
	const [isMobileActive, setIsMobileActive] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const searchQueryBox = useRef<HTMLInputElement>(null)

	return (
		<>
			<button
				className="w-8 aspect-[1.5] flex flex-col justify-between absolute right-5 top-5 z-[999] md:hidden"
				onClick={() => setIsMobileActive(prev => !prev)}
			>
				<span className="w-full h-1 bg-gray-500"></span>
				<span className="w-full h-1 bg-gray-500"></span>
				<span className="w-full h-1 bg-gray-500"></span>
			</button>

			<aside
				className={`w-screen h-screen transition-transform absolute z-[500] bg-white overflow-scroll md:static md:translate-x-0 md:max-w-[25rem] md:border-r-2 ${
					isMobileActive ? "translate-x-0" : "translate-x-[-100%]"
				}`}
			>
				<form
					className="p-8 border-b-2"
					action="/"
					onSubmit={async e => {
						e.preventDefault()

						if (searchQueryBox.current) {
							setIsLoading(true)
							const { results } = await fetchData(
								`https://freesound.org/apiv2/search/text/?query=${searchQueryBox.current.value}&token=eTn9vAatgMdzT4sB0qHhkOAU0lM8cw4eZgVo5cyx`
							)

							setSoundList(results)
							setIsLoading(false)
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
				<section className="md:max-h-[unset]">
					{isLoading ? (
						<h2 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-clr-primary-100 uppercase">
							Loading
						</h2>
					) : (
						soundList.map((soundItem: SoundResData) => (
							<SoundResult
								{...soundItem}
								activeSoundId={activeSoundId}
								setActiveSoundId={setActiveSoundId}
								key={soundItem.id}
							/>
						))
					)}
				</section>
			</aside>
		</>
	)
}
