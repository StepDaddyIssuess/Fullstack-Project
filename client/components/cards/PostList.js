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






const PostList = ({ posts, handleDelete }) => {

    const [state] = useContext(UserContext);
    const router = useRouter();

    return (
        <div>
            {
                posts && posts.map(post =>
                    <div key={posts._id} className="card mb-5">
                        <div className="card-header">
                            <div>
                                <Avatar size={40}>
                                    {post.postedBy.name[0]}
                                </Avatar>

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
                                    <HeartOutlined className="text-danger  h5" style={{
                                        marginRight: "0.5rem",
                                        marginTop: "0.5rem"
                                    }}
                                        role="button"
                                    />
                                    <div className="pt-2 px-3">3 likes</div>
                                    <CommentOutlined className="text-danger h5" style={{ marginLeft: "1rem", marginRight: "0.5rem", marginTop: "0.5rem" }} role="button" />
                                    <div className="pt-2 px-3">2 comments</div>
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
                    </div>

                )
            }
        </div >
    )
}


export default PostList