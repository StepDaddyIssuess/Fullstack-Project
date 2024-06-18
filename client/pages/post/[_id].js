import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";
import People from "../../components/cards/People";
import Link from "next/link";
import { Modal, Button, Pagination } from 'antd';
import CommentForm from "../../components/forms/CommentForm";
import ReactPaginate from "react-paginate";
import Post from "../../components/cards/Post";
import { RollbackOutlined } from "@ant-design/icons";


const PostComment = () => {
    const [state, setState] = useContext(UserContext);

    // State 
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [upLoading, setUpLoading] = useState(false);
    const [people, setPeople] = useState([]);
    const [posts, setPosts] = useState([]);

    const [post, setPost] = useState({});


    // Modal state Add comment
    const [comment, setComment] = useState("");
    const [visible, setVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    // Pagination state's
    const [totalPosts, setTotalPosts] = useState(0);
    const [page, setPage] = useState(1);

    // Router
    const router = useRouter();
    const _id = router.query._id

    // Effect 


    useEffect(() => {
        if (_id) fetchPost();
    }, [_id]);


    const fetchPost = async () => {
        try {
            const { data } = await axios.get(`/user-post/${_id}`);
            setPost(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const newsFeed = async () => {
        try {
            const { data } = await axios.get(`/news-feed/${page}`);
            setPosts(data);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    };

    const removeComment = async (postId, comment) => {
        let anwser = window.confirm("Are you sure you want to remove!");
        if (!anwser) return;
        try {
            const { data } = await axios.put("/remove-comment", { postId, comment });
            console.log("Comment Removed", data)
            fetchPost();
        }
        catch (err) {
            console.log(err);
        }
    }

    // Functions




    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/delete-post/${_id}`);
            console.log(data)
            let anwser = window.confirm("Are you sure you want to delete this post?");
            if (!anwser) return;
            toast.error("Post Deleted!");
            router.push("/user/dashboard");
            newsFeed();
        }
        catch (error) {
            console.log(error);
        }
    };



    const handleLike = async (_id) => {
        try {
            const { data } = await axios.put("/like-post", { _id });
            console.log("liked => ", data);
            fetchPost();
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleUnlike = async (_id) => {
        try {
            const { data } = await axios.put("/unlike-post", { _id });
            console.log("unliked => ", data);
            fetchPost();
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleComment = (post) => {
        setCurrentPost(post);
        setVisible(true);
    }

    const addComment = async (e) => {
        e.preventDefault();
        // console.log("Add comment to this post => ", currentPost._id);
        // console.log("Save comment in Database", comment)
        try {
            const { data } = await axios.put("/add-comment", {
                comment,
                postId: currentPost._id
            })
            console.log("Add comment", data);
            setVisible(false);
            setComment("");
            fetchPost();
        }
        catch (err) {
            console.log(err);
        }
    }





    return (
        <>
            <div className="container-fluid">
                <div className="row py-5 bg-secondary text-light bg-default-image">
                    <div className="col text-center">
                        <h1 className="login-title">FullStackProject</h1>
                    </div>
                </div>

                <div className="container col-md-8 offset-md-2 pt-5">
                    <Post post={post} commentCount={100} removeComment={removeComment} handleDelete={handleDelete} handleLike={handleLike} handleUnlike={handleUnlike} handleComment={handleComment} />
                </div>

                <Link href="/user/dashboard">
                    <span className="d-flex justify-content-center p-5 h1">
                        <RollbackOutlined />
                    </span>
                </Link>
            </div>

            <Modal
                open={visible}
                onCancel={() => setVisible(false)}
                title="Comment Section"
                footer={null}
            >
                <CommentForm
                    addComment={addComment}
                    comment={comment}
                    setComment={setComment}
                />
            </Modal>
        </>
    )
};

export default PostComment;
