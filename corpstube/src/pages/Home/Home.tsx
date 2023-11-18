// Types
import { VideoResponseData } from "../../types/videoItemTypes"

// Hooks
import { useState, useEffect } from "react"

// Utility Functions
import fetchData from "../../utilities/fetchData"

// Components
import VideoItem from "../../components/VideoItem/VideoItem"

// Styles
import "./Home.scss"

export default function Home() {
	const [videoList, setVideoList] = useState<VideoResponseData>({ items: [] })

	useEffect(() => {
		const API_URL = "https://rq180hf4vk.execute-api.us-east-2.amazonaws.com/dev/videos/"

		fetchData<VideoResponseData>(API_URL).then(data => setVideoList(data))
	}, [])

	return (
		<section className="home">
			{videoList.items.map(video => (
				<VideoItem {...video.snippet} key={video.id} />
			))}
		</section>
	)
}
