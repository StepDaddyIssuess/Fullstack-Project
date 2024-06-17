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
import Post from "../../components/cards/Post";






const PostList = ({ posts, handleDelete, handleLike, handleUnlike, handleComment, addComment, removeComment }) => {

    const [state] = useContext(UserContext);
    const router = useRouter();

    return (
        <div>
            {
                posts && posts.map(post =>
                    <Post
                        post={post}
                        handleDelete={handleDelete}
                        handleLike={handleLike}
                        handleUnlike={handleUnlike}
                        handleComment={handleComment}
                        addComment={addComment}
                        removeComment={removeComment}

                    />
                )}
        </div >
    )
}


export default PostList