// Types
import { VideoItemType } from "../../types/videoItemTypes"

// Hooks
import { useState } from "react"

// Sections
import ShareModal from "../ShareModal/ShareModal"

// lib
import { format } from "date-fns"

// Assets
import shareIcon from "../../assets/icon-share.svg"

// Styles
import "./VideoPlaying.scss"

export default function VideoPage({
	currentlyPlayingData,
	videoId,
}: {
	currentlyPlayingData: VideoItemType | null
	videoId: string | undefined
}) {
	const [isDescriptionShown, setIsDescriptionShown] = useState(false)
	const [isShareModalShown, setIsShareModalShown] = useState<boolean | null>(null)

	return (
		<section className="video-playing">
			<section className="video-playing__video-content">
				<iframe
					src={`https://www.youtube.com/embed/${videoId}`}
					title={"YouTube video player"}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<div className="video-playing__info-container">
					<h2 className="video-playing__title">{currentlyPlayingData?.snippet.title}</h2>
					<div className="video-playing__main-info">
						<p className="| bg-clr-accent">{currentlyPlayingData?.views} Views</p>
						<p className="video-playing__date">
							Published{" "}
							<span className="video-playing__text-highlight">
								{currentlyPlayingData?.snippet.publishedAt &&
									format(
										new Date(currentlyPlayingData?.snippet.publishedAt),
										"MMMM dd, yyyy"
									)}
							</span>
						</p>
						<button className="video-playing__share" onClick={() => setIsShareModalShown(true)}>
							<img src={shareIcon} alt="" />
							<span className="video-playing__text-highlight">share</span>
						</button>
						<button
							className="video-playing__description-hide-btn"
							onClick={() => setIsDescriptionShown(!isDescriptionShown)}
						>
							{isDescriptionShown ? "hide description" : "show description"}
						</button>
					</div>
					<p className="video-playing__description">
						{isDescriptionShown ? currentlyPlayingData?.snippet.description : ""}
					</p>
				</div>
			</section>
			<ShareModal isShareModalShown={isShareModalShown} setIsShareModalShown={setIsShareModalShown} />
		</section>
	)
}
