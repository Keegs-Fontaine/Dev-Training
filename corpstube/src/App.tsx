// Pages
import Home from "./pages/Home/Home"

// Assets
import logo from "./assets/Logo.svg"
import search from "./assets/icon-search.svg"

// Styles
import "./global-styles/App.scss"

// React Router
import { Routes, Route, Link } from "react-router-dom"

export default function () {
	return (
		<section className="app">
			<header className="app__header | alternative-bg">
				<div className="app__header-logo">
					<img src={logo} alt="CorpsTube" />
				</div>
				<form className="app__header-form" action="/">
					<div className="app__header-form--input-container">
						<input type="text" placeholder="find something" />
						<button type="submit">
							<img src={search} alt="search" />
						</button>
					</div>
					<div className="app__header-form--suggested-searches">what</div>
				</form>
			</header>
			<main className="app__main | main-bg">
				<header className="| main-style-header main-style-header--line">
					<h1 className="main-style-header__text">the library</h1>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
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
