// Types
import { VideoResponseSnippetObj } from "../../types/videoItemTypes"

// Styles
import "./VideoItem.scss"

// lib
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"

export default function VideoItem({
	publishedAt,
	title,
	videoOwnerChannelTitle,
	thumbnails,
	resourceId,
}: VideoResponseSnippetObj) {
	return (
		<Link className="video-item" to={`/video/${resourceId.videoId}`}>
			<div className="video-item__thumbnail">
				<img src={thumbnails.standard ? thumbnails.standard.url : ""} alt="" />
				{/* <p className="video-item__duration">10:00</p> */}
			</div>
			<section>
				<p className="video-item__title">{title}</p>
				<div className="video-item__info-container">
					<p className="video-item__channel">{videoOwnerChannelTitle}</p>
					<p className="video-item__date">{formatDistanceToNow(new Date(publishedAt))}</p>
				</div>
			</section>
		</Link>
	)
}
