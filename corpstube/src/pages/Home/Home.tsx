// Types
import { VideoItemType } from "../../types/videoItemTypes"
import { VideoResponseData } from "../../types/videoItemTypes"

// Hooks
import { useState, useEffect } from "react"

// Utility Functions
import fetchData from "../../utilities/fetchData"

// Components
import VideoItem from "../../components/VideoItem/VideoItem"
import SectionHeader from "../../components/SectionHeader/SectionHeader"

// Assets
import time from "../../assets/icon-time.svg"

// lib
import { compareAsc } from "date-fns"
import { useSearchParams } from "react-router-dom"

// Styles
import "./Home.scss"

export default function Home() {
	const VIDEO_DISPLAY_COUNT = 15

	const [videoList, setVideoList] = useState<VideoItemType[]>([])
	const [listCount, setListCount] = useState(1)
	const [activeSortBtn, setActiveSortBtn] = useState("old")
	const videoSearch = useSearchParams()[0]
	const filteredList = videoList.filter(video =>
		video.snippet.title.toLowerCase().includes(videoSearch.get("search")?.toLowerCase() || "")
	)

	useEffect(() => {
		const API_URL = "https://rq180hf4vk.execute-api.us-east-2.amazonaws.com/dev/videos/"

		fetchData<VideoResponseData>(API_URL).then(({ items }) => setVideoList(items))
	}, [])

	const handleListFilter = (
		activeBtnValue: string,
		sortCallbackFunc: (a: VideoItemType, b: VideoItemType) => number
	): void => {
		setActiveSortBtn(activeBtnValue)
		setVideoList([...videoList].sort(sortCallbackFunc))
	}

	console.log(filteredList.length)
	return (
		<>
			<section className="home">
				<header className="home__header">
					<SectionHeader text="the library" />
					<section className="home__btn-container">
						<span className="home__btn-container-highlight">Sort</span>
						<button
							className={`${activeSortBtn.toLocaleLowerCase() === "a/z" && "active"}`}
							onClick={() =>
								handleListFilter("a/z", (a, b) => {
									const aName = a.snippet.title.toLowerCase()
									const bName = b.snippet.title.toLowerCase()

									if (aName > bName) return 1
									if (aName < bName) return -1

									return 0
								})
							}
						>
							A/Z
						</button>
						<button
							className={`${activeSortBtn.toLocaleLowerCase() === "new" && "active"}`}
							onClick={() =>
								handleListFilter("new", (a, b) =>
									compareAsc(
										new Date(b.snippet.publishedAt),
										new Date(a.snippet.publishedAt)
									)
								)
							}
						>
							<img src={time} alt="" />
							new
						</button>
						<button
							className={`${activeSortBtn.toLocaleLowerCase() === "old" && "active"}`}
							onClick={() =>
								handleListFilter("old", (a, b) =>
									compareAsc(
										new Date(a.snippet.publishedAt),
										new Date(b.snippet.publishedAt)
									)
								)
							}
						>
							<img src={time} alt="" />
							old
						</button>
					</section>
				</header>
				<section className="home__video-list">
					{filteredList.slice(0, VIDEO_DISPLAY_COUNT * listCount).map(video => (
						<VideoItem {...video.snippet} key={video.id} />
					))}
				</section>
				<button
					className={`home__more-btn ${
						filteredList.length <= VIDEO_DISPLAY_COUNT * listCount && "home__more-btn--hidden"
					}`}
					onClick={() => setListCount(prev => prev + 1)}
				>
					+ more
				</button>
			</section>
		</>
	)
}
