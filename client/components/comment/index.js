import { CommentOutlined } from "@ant-design/icons";
import Link from "next/link";

const CommentHandler = ({ post, handleComment, commentPage }) => {
    return (
        <>
            {commentPage ? <>
                <CommentOutlined
                    onClick={() => handleComment(post)}
                    className="text-danger h5" style={{ marginLeft: "1rem", marginRight: "0.5rem", marginTop: "0.5rem" }} role="button" />
                <div className="pt-2">
                    <Link href={`/post/${post._id}`} target="_blank">
                        <span className="text-dark" ><pre>{JSON.stringify(post)}</pre>comments</span>
                    </Link>
                </div>
            </> : <>
                <CommentOutlined
                    onClick={() => handleComment(post)}
                    className="text-danger h5" style={{ marginLeft: "1rem", marginRight: "0.5rem", marginTop: "0.5rem" }} role="button" />
                <div className="pt-2">
                    <Link href={`/post/${post._id}`} target="_blank">
                        <span className="text-dark" >{post.comments.length} comments</span>
                    </Link>
                </div>
            </>}
        </>
    )
}

export default CommentHandler;