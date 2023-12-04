// Types
import { VideoItemType, CommentItem } from "../../types/videoItemTypes"

// Hooks
import { useState, useEffect } from "react"

// Sections
import VideoPlaying from "../../sections/VideoPlaying/VideoPlaying"
import Comments from "../../sections/Comments/Comments"
import RelatedVideos from "../../sections/RelatedVideos/RelatedVideos"

// Components
import SectionHeader from "../../components/SectionHeader/SectionHeader"

// Utilities
import fetchData from "../../utilities/fetchData"

// lib
import { useParams } from "react-router-dom"

// Styles
import "./VideoPage.scss"

export default function VideoPage() {
	const [currentlyPlayingData, setCurrentlyPlayingData] = useState<VideoItemType | null>(null)
	const [commentsList, setCommentsList] = useState<CommentItem[]>([])
	const { videoId } = useParams()

	console.log("RERENDER")
	useEffect(() => {
		fetchData<VideoItemType>(`https://rq180hf4vk.execute-api.us-east-2.amazonaws.com/dev/videos/${videoId}`).then(
			data => {
				setCurrentlyPlayingData(data)
				setCommentsList(data.comments)
			}
		)
	}, [videoId])

	if (currentlyPlayingData) {
		return (
			<section className="video-page">
				<div>
					<SectionHeader text={"now playing"} />
					<VideoPlaying currentlyPlayingData={currentlyPlayingData} videoId={videoId} />
					<Comments commentsList={commentsList} setCommentsList={setCommentsList} />
				</div>
				<RelatedVideos tagList={currentlyPlayingData.tags} currentVideoId={currentlyPlayingData.id} />
			</section>
		)
	}
}
