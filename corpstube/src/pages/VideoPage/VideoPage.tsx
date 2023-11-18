// Types
import { VideoItem } from "../../types/videoItemTypes"

// Hooks
import { useState } from "react"

// Utilities
import fetchData from "../../utilities/fetchData"

// lib
import { useParams } from "react-router-dom"

// Styles
import "./VideoPage.scss"

export default function VideoPage() {
	const [currentlyPlayingData, setCurrentlyPlayingData] = useState<VideoItem | undefined>()

	const { videoId } = useParams()
	fetchData<VideoItem>(`https://rq180hf4vk.execute-api.us-east-2.amazonaws.com/dev/videos/${videoId}`).then(data =>
		setCurrentlyPlayingData(data)
	)

	return <h1>{videoId}</h1>
}
