// Hooks
import { useRef } from "react"

// Pages
import Home from "./pages/Home/Home"
import VideoPage from "./pages/VideoPage/VideoPage"

// Components
import SuggestedSearch from "./components/SuggestedSearch/SuggestedSearch"

// Assets
import logo from "./assets/Logo.svg"
import search from "./assets/icon-search.svg"

// Styles
import "./global-styles/App.scss"

// React Router
import { Routes, Route, Link, useSearchParams } from "react-router-dom"

export default function () {
	const setVideoSearch = useSearchParams()[1]
	const searchBox = useRef<HTMLInputElement>(null)
	const suggestedSearches = ["music", "cat", "monkey", "trailer"]

	const handleVideoSearch = (text: string) => setVideoSearch(`search=${text}`)

	return (
		<section className="app">
			<div className="app__header-wrapper | alternative-bg">
				<header className="app__header">
					<Link className="app__header-logo" to="/">
						<img src={logo} alt="CorpsTube" />
					</Link>
					<form
						className="app__header-form"
						action="/"
						onSubmit={e => {
							e.preventDefault()

							if (searchBox.current) handleVideoSearch(searchBox.current.value)
						}}
					>
						<div className="app__header-form--input-container">
							<input type="text" placeholder="find something" ref={searchBox} />
							<button type="submit">
								<img src={search} alt="search" />
							</button>
						</div>
						<section className="app__header-form--suggested-searches">
							{suggestedSearches.map((text, i) => (
								<SuggestedSearch text={text} handleVideoSearch={handleVideoSearch} key={i} />
							))}
						</section>
					</form>
				</header>
			</div>
			<main className="app__main">
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="video/:videoId" element={<VideoPage />} />
				</Routes>
			</main>
			<footer className="app__footer | alternative-bg">
				<p>
					copyright © 2022 <span>digital corps</span>
				</p>
			</footer>
		</section>
	)
}
