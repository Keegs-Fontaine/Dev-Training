/// <reference types="vite-plugin-svgr/client" />

// Assets
import Search from "../../assets/icon-search.svg?react"

// Styles
import "./SuggestedSearch.scss"

export default function SuggestedSearch({
	text,
	handleVideoSearch,
}: {
	text: string
	handleVideoSearch: (text: string) => void
}) {
	return (
		<button
			className="suggested-search"
			onClick={e => {
				e.preventDefault()
				handleVideoSearch(text)
			}}
		>
			<Search />
			<p>{text}</p>
		</button>
	)
}
