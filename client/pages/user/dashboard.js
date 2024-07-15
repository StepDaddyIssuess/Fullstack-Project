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
import Search from "../../components/Search";
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, {
    reconnection: true,
})


const Home = () => {
    const [state, setState] = useContext(UserContext);

    // State 
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [upLoading, setUpLoading] = useState(false);
    const [people, setPeople] = useState([]);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    // Modal state Delete post
    const [showModal, setShowModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    // Modal state Add comment
    const [comment, setComment] = useState("");
    const [visible, setVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    // Pagination state's
    const [totalPosts, setTotalPosts] = useState(0);
    const [page, setPage] = useState(1);

    // Router
    const router = useRouter();

    // Effect 
    useEffect(() => {
        if (state && state.token) {
            newsFeed();
            findPeople();
        }
    }, [state && state.token, page]);

    useEffect(() => {
        try {
            axios.get("/total-posts")
                .then(({ data }) => setTotalPosts(data));
            // const { data } = await axios.get(`/total-posts`);
            // setTotalPosts(data);
        }
        catch (err) {
            console.log(err);
        }
    }, [])

    // Functions

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

    const findPeople = async () => {
        try {
            const { data } = await axios.get("/find-people");
            setPeople(data);
        }
        catch (err) {
            console.log(err);
        }
    };

    const postSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/create-post", { content, image });


            if (data.error) {
                toast.error(data.error);
            }
            else {
                toast.success("Post Created");
                setPage(1);
                setContent("");
                setImage({});
                newsFeed();
                socket.emit("new-post", data);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleImage = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);

        setUpLoading(true);
        try {
            const { data } = await axios.post("/upload-image", formData);
            setImage({ url: data.url, public_id: data.public_id });
        }
        catch (error) {
            console.log(error);
            setUpLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/delete-post/${postToDelete._id}`);
            toast.error("Post Deleted!");
            newsFeed();
            setShowModal(false); // Close modal after successful deletion
        }
        catch (error) {
            console.log(error);
        }
    };

    const openDeleteModal = (post) => {
        setPostToDelete(post);
        setShowModal(true);
    };

    const closeDeleteModal = () => {
        setShowModal(false);
        setPostToDelete(null);
    };

    const handleFollow = async (user) => {
        // console.log("add this user to the following list", user);
        try {
            const { data } = await axios.put("user-follow", { _id: user._id })

            // Update local storage, update user , keep token
            let auth = JSON.parse(localStorage.getItem("auth"));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            // update context
            setState({ ...state, user: data });
            // update people state
            setPeople(prevPeople => prevPeople.filter((p) => p._id !== user._id));
            // Success
            newsFeed() // Reloading the feed
            toast.success(`Following ${user.username}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleLike = async (_id) => {
        try {
            const { data } = await axios.put("/like-post", { _id });
            console.log("liked => ", data);
            newsFeed();
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleUnlike = async (_id) => {
        try {
            const { data } = await axios.put("/unlike-post", { _id });
            console.log("unliked => ", data);
            newsFeed();
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
            newsFeed();
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
            newsFeed();
        }
        catch (err) {
            console.log(err);
        }
    }

    const handlePageClick = (data) => {
        setPage(data.selected + 1);
    }


    return (
        <UserRoute>
            <div className="container-fluid ">
                <div className="row py-5 bg-secondary text-light bg-default-image">
                    <div className="col text-center">
                        <h1>NewsFeed</h1>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-md-8">
                        <PostForm
                            content={content}
                            setContent={setContent}
                            postSubmit={postSubmit}
                            handleImage={handleImage}
                            image={image}
                            upLoading={upLoading}
                        />

                        <PostList
                            posts={posts}
                            handleDelete={openDeleteModal}
                            handleLike={handleLike}
                            handleUnlike={handleUnlike}
                            handleComment={handleComment}
                            removeComment={removeComment}
                            addComment={addComment}
                        />

                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={">"}
                            previousClassName={'page-previous'}
                            nextClassName={'page-next'}
                            breakLabel={'...'}
                            pageCount={Math.ceil(totalPosts / 3)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={100}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'focused'}
                            pageClassName={"pages"}
                            pageLinkClassName={'page-link'}
                            forcePage={page - 1}
                            className="pb-5 d-flex fs-5"
                        />

                    </div>

                    <div className="col-md-4 dashboard--side--bar--container">

                        <Search />

                        {state && state.user && state.user.following &&
                            <Link href={`/user/following`} className="dashboard--side--bar--link">
                                <span className="h6 dashboard--side--bar--link-text">
                                    Following {state.user.following.length}
                                </span>
                            </Link>
                        }
                        <People people={people} handleFollow={handleFollow} />
                    </div>
                </div>
            </div>

            {/* Modal for Delete Confirmation */}
            <Modal
                title="Confirmation"
                open={showModal}
                onCancel={closeDeleteModal}
                footer={[
                    <Button key="cancel" onClick={closeDeleteModal}>
                        Cancel
                    </Button>,
                    <Button key="delete" type="primary" danger onClick={handleDelete}>
                        Delete
                    </Button>
                ]}
                centered
            >
                <p>Are you sure you want to delete this post?</p>
            </Modal>

            {/* Modal for adding a comment */}
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

        </UserRoute >
    );
};

export default Home;
