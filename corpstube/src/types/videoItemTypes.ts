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

export type CommentItem = {
	id: number
	videoId: string
	name: string
	comment: string
	date: string
}

export type VideoItemType = {
	id: string
	tags: string[]
	snippet: VideoResponseSnippetObj
	views: number
	comments: CommentItem[]
}

export type VideoResponseData = {
	items: VideoItemType[]
}
