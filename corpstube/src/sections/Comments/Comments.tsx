// Types
import { CommentItem } from "../../types/videoItemTypes"

// React
import { SetStateAction, useRef } from "react"

// Utilities
import { postData } from "../../utilities/fetchData"

// Components
import Comment from "../../components/Comment/Comment"

// lib
import { useParams } from "react-router-dom"

// Styles
import "./Comments.scss"

export default function Comments({
	commentsList,
	setCommentsList,
}: {
	commentsList: CommentItem[]
	setCommentsList: React.Dispatch<SetStateAction<CommentItem[]>>
}) {
	const { videoId } = useParams()
	const name = useRef<HTMLInputElement>(null)
	const comment = useRef<HTMLInputElement>(null)

	return (
		<section className="comments">
			<h2 className="comments__count | bg-clr-accent">{commentsList.length} Comments</h2>
			<form
				className="comments__form"
				action="/"
				onSubmit={async e => {
					e.preventDefault()

					if (name.current && comment.current) {
						const res = await postData<CommentItem>(
							`https://rq180hf4vk.execute-api.us-east-2.amazonaws.com/dev/comment/${videoId}`,
							{
								name: name.current.value,
								comment: comment.current.value,
							}
						)

						name.current.value = ""
						comment.current.value = ""

						setCommentsList([...commentsList, res])
					}
				}}
			>
				<h3 className="comments__form-header">Add a Comment!</h3>
				<div className="comments__form-input-container">
					<input
						className="comments__form-input"
						ref={name}
						type="text"
						placeholder="Name"
						required
						onChange={e => {
							!e.currentTarget.value
								? e.currentTarget.setCustomValidity("Please Add a Name!")
								: e.currentTarget.setCustomValidity("")
						}}
					/>
					<input
						className="comments__form-input"
						ref={comment}
						type="text"
						placeholder="What did you think?"
						required
						onChange={e => {
							!e.currentTarget.value
								? e.currentTarget.setCustomValidity("Please Add a Comment!")
								: e.currentTarget.setCustomValidity("")
						}}
					/>
				</div>
				<button type="submit" style={{ display: "none" }}></button>
			</form>
			<div className="comments__list-container">
				{commentsList.map(comment => (
					<Comment {...comment} key={comment.id} />
				))}
			</div>
		</section>
	)
}
