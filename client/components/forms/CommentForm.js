const CommentForm = ({ comment, setComment, addComment }) => {
    return (
        <form onSubmit={addComment}>
            <input
                type="text"
                className="form-control"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm btn-block mt-3">Add Comment</button>
        </form>
    )
}

export default CommentForm;