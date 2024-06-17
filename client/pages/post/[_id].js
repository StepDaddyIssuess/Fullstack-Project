import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserRoute from "./../../components/routes/UserRoute";
import { toast } from "react-toastify";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Post from "../../components/cards/Post";
import Link from "next/link"


const PostComment = () => {

    const [post, setPost] = useState({});

    const router = useRouter();
    const _id = router.query._id

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

    return (
        <>
            <div className="container-fluid">
                <div className="row py-5 bg-secondary text-light bg-default-image">
                    <div className="col text-center">
                        <h1 className="login-title">FullStackProject</h1>
                    </div>
                </div>

                <div className="container col-md-8 offset-md-2 pt-5">
                    <Post post={post} commentCount={100} removeComment={removeComment} />
                </div>

                <Link href="/user/dashboard">
                    <span className="d-flex justify-content-center p-5 h1">
                        <RollbackOutlined />
                    </span>
                </Link>
            </div>
        </>
    )

}

export default PostComment;