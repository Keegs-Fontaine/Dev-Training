// Types
import { CommentItem } from "../../types/videoItemTypes"

// lib
import { formatDistanceToNow } from "date-fns"

// Styles
import "./Comment.scss"

export default function Comment({ name, date, comment }: CommentItem) {
	return (
		<div className="comment">
			<h3 className="comment__username">{name ? name : "No Username"}</h3>
			<h4 className="comment__date">{formatDistanceToNow(new Date(date))}</h4>
			<p className="comment__body">{comment ? comment : "No Comment"}</p>
		</div>
	)
}
