// Hooks
import { useState } from "react"

// Assets
import Star from "../assets/Star.svg?react"

export default function Person({ name, thumbnail: src, team }) {
	const [isFavorited, setIsFavorited] = useState(localStorage.getItem(name) === "true" ? true : false)

	return (
		<article className="person" data-team={team}>
			<div className="person__thumbnail">
				<img src={src} alt="" />
				<Star
					className={`person__star ${isFavorited && "active"}`}
					onClick={() => {
						setIsFavorited(prev => {
							localStorage.setItem(name, !prev)

							return !prev
						})
					}}
				/>
			</div>
			<div className="person__info">
				<h2 className="person__name">{name}</h2>
				<p className="person__team" dangerouslySetInnerHTML={{ __html: team }}></p>
			</div>
		</article>
	)
}
