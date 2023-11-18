type ThumbnailObjType = {
	url: string
	width: number
	height: number
}

export type VideoResponseSnippetObj = {
	publishedAt: string
	title: string
	description: string
	videoOwnerChannelTitle: string
	thumbnails: {
		standard: ThumbnailObjType
	}
	resourceId: {
		videoId: string
	}
}

export type VideoItem = {
	etag: string
	id: string
	tags: string[]
	snippet: VideoResponseSnippetObj
}

export type VideoResponseData = {
	items: VideoItem[]
}
