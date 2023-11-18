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
}

export type VideoResponseData = {
	items: {
		id: string
		tags: string[]
		snippet: VideoResponseSnippetObj
	}[]
}
