
import { useContext } from "react";
// import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";
import { HeartFilled, HeartOutlined, CommentOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { UserContext } from "../../context"
import { useRouter } from "next/router";
import PostForm from "../forms/PostForm";
import ReactHtmlParser from 'html-react-parser';
import { imageSource } from "../../functions";
import Link from "next/link";







const Post = ({ post, handleDelete, handleLike, handleUnlike, handleComment, addComment, removeComment, commentCount = 10 }) => {

    const [state, setState] = useContext(UserContext);
    const router = useRouter();


    return (
        <>
            {post && post.postedBy && <div key={post._id} className="card mb-5" >
                <div className="card-header">
                    <div>
                        {/* <Avatar size={40}>
                                    {post.postedBy.name[0]}
                                </Avatar> */}

                        <Avatar size={40} src={imageSource(post.postedBy)} />

                        <span style={{ marginLeft: "1rem" }}>
                            {post.postedBy.name}
                        </span>

                        <span style={{ marginLeft: "1rem" }}>
                            {moment(post.createdAt).fromNow()}
                        </span>

                    </div>
                </div>
                <div className="card-body">
                    <div>
                        {ReactHtmlParser(post.content)}
                    </div>
                </div>

                <div className="card-footer">
                    {post.image && (
                        <PostImage
                            url={post.image.url}
                        />
                    )}

                    <div className="pt-2 d-flex justify-content-between">
                        <div className="d-flex">
                            {post.likes.includes(state.user._id)
                                ? <HeartFilled
                                    onClick={() => handleUnlike(post._id)}
                                    className="text-danger  h5" style={{
                                        marginRight: "0.5rem",
                                        marginTop: "0.5rem"
                                    }}
                                    role="button"
                                /> : <HeartOutlined
                                    onClick={() => handleLike(post._id)}
                                    className="text-danger  h5" style={{
                                        marginRight: "0.5rem",
                                        marginTop: "0.5rem"
                                    }}
                                    role="button"
                                />}
                            <div className="pt-2 ">{post.likes.length} likes</div>
                            <CommentOutlined
                                onClick={() => handleComment(post)}
                                className="text-danger h5" style={{ marginLeft: "1rem", marginRight: "0.5rem", marginTop: "0.5rem" }} role="button" />
                            <div className="pt-2">
                                <Link href={`/post/${post._id}`}>
                                    <span className="text-dark" >{post.comments.length} comments</span>
                                </Link>
                            </div>
                        </div>

                        <div className="">
                            {
                                state && state.user && state.user._id === post.postedBy._id ?
                                    <>
                                        <EditOutlined className="pt-2 px-3 h5" role="button" onClick={() => router.push(`/user/post/${post._id}`)} />
                                        <DeleteOutlined
                                            onClick={() =>
                                                handleDelete(post)
                                            }
                                            className="pt-2 px-3 h5 text-danger" role="button" />
                                    </> :
                                    null
                            }



                        </div>
                    </div>
                </div>
                {
                    post.comments && post.comments.length > 0 && (
                        <ol className="list-group" style={{ maxHeight: "165px", overflow: "scroll" }}>
                            {post.comments.slice(0, commentCount).map((c) => (
                                <li className="list-group-item d-flex justify-content-between align-items-start" key={c._id}>
                                    <div className="ms-2 me-auto">
                                        <div>
                                            <Avatar size={30} className="mb-1 mr-3"
                                                src={imageSource(c.postedBy)}
                                            />
                                            <span style={{ marginLeft: "0.5rem" }} className="h5">{c.postedBy.name}</span>
                                        </div>

                                        <div>
                                            {c.text}
                                        </div>
                                    </div>

                                    <div>
                                        {moment(c.created).fromNow()}
                                        {state && state.user && state.user._id === c.postedBy._id && (
                                            <div style={{ marginLeft: "auto", marginTop: "1rem" }} className="ml-auto mt-1 text-center">
                                                <DeleteOutlined className="pl-3 text-danger"
                                                    onClick={() => removeComment(post._id, c)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )
                }
            </div >}
        </>

    )
}









export default Post;