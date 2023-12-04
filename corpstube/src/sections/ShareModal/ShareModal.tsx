// lib
import { useParams } from "react-router-dom"

// Assets
import twitter from "../../assets/icon-twitter.svg"
import email from "../../assets/icon-email.svg"
import code from "../../assets/icon-code.svg"
import close from "../../assets/icon-close.svg"

// Styles
import "./ShareModal.scss"

export default function ShareModal({
	isShareModalShown,
	setIsShareModalShown,
}: {
	isShareModalShown: boolean | null
	setIsShareModalShown: (value: boolean) => void
}) {
	const { videoId } = useParams()

	return (
		<article
			className={`share-modal ${
				isShareModalShown !== null && (isShareModalShown ? "share-modal__active" : "share-modal__inactive")
			}`}
		>
			<header className="share-modal__header">
				<h2 className="share-modal__header-text">Share Video</h2>
				<button className="share-modal__close-btn" onClick={() => setIsShareModalShown(false)}>
					<img src={close} alt="" />
				</button>
			</header>
			<div className="share-modal__icons">
				<a href="#">
					<img src={code} alt="" />
				</a>
				<a target="_blank" href="https://twitter.com/intent/tweet?text=Hello%20world">
					<img src={twitter} alt="" />
				</a>
				<a href="#">
					<img src={email} alt="" />
				</a>
			</div>
			<div className="share-modal__embed">
				<code>
					{`<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0"></iframe>`}
				</code>
			</div>
		</article>
	)
}
