// Types
import { VideoItemType } from "../../types/videoItemTypes"

// Hooks
import { useState, useEffect } from "react"

// Components
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import VideoItem from "../../components/VideoItem/VideoItem"

// Utilities
import fetchData from "../../utilities/fetchData"

// Styles
import "./RelatedVideos.scss"

export default function RelatedVideos({
	tagList,
	currentVideoId,
}: {
	tagList: string[]
	currentVideoId: string | undefined
}) {
	const [videoList, setVideoList] = useState<VideoItemType[]>([])

	useEffect(() => {
		const idArr: string[] = [currentVideoId || ""]
		const promiseArr: Promise<VideoItemType[]>[] = []

		tagList.forEach(tag => {
			const API_URL = `https://rq180hf4vk.execute-api.us-east-2.amazonaws.com/dev/videos/tag/${tag}`
			promiseArr.push(fetchData<VideoItemType[]>(API_URL))
		})

		Promise.all(promiseArr)
			.then(data => data.flatMap(item => item))
			.then(data =>
				data.filter(item => {
					if (!idArr.includes(item.id)) {
						idArr.push(item.id)
						return item
					}
				})
			)
			.then(data => setVideoList(data))
	}, [tagList])

	return (
		<section className="related-videos">
			<SectionHeader text={"related videos"} lineThrough={false} />
			<section className="related-videos__video-list">
				{videoList.map(video => (
					<VideoItem {...video.snippet} key={video.id} />
				))}
			</section>
		</section>
	)
}
