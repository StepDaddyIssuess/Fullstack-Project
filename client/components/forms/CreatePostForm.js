import { Avatar } from "antd"

const CreatePostForm = ({content, setContent, postSubmit}) => {
    return (
        <div className="card">
            <div className="card-body pb-3">
                <form className="form-group">
                    <textarea
                    className="form-control"
                    placeholder="Write something..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </form>
            </div>

            <div className="card-footer">
                <button className="btn btn-primary btn-sm mt-1"
                disabled={!content}
                onClick={postSubmit}> 
                    Post
                </button>
            </div>
        </div>
    )
}

export default CreatePostForm;