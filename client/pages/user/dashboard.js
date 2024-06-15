import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";
import People from "../../components/cards/People";
import { Modal, Button } from 'react-bootstrap';
import Link from "next/link";
const Home = () => {
    const [state, setState] = useContext(UserContext);

    // State 
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [upLoading, setUpLoading] = useState(false);
    const [people, setPeople] = useState([]);
    const [posts, setPosts] = useState([]);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    // Router
    const router = useRouter();

    // Effect 
    useEffect(() => {
        if (state && state.token) {
            newsFeed();
            findPeople();
        }
    }, [state && state.token]);

    // Functions

    const newsFeed = async () => {
        try {
            const { data } = await axios.get("/news-feed");
            setPosts(data);
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
                setContent("");
                setImage({});
                newsFeed();
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
            // console.log("liked => ", data);
            newsFeed();
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleUnlike = async (_id) => {
        try {
            const { data } = await axios.put("/unlike-post", { _id });
            // console.log("unliked => ", data);
            newsFeed();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <UserRoute>
            <div className="container-fluid">
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
                        />
                    </div>

                    <div className="col-md-4">
                        {state && state.user && state.user.following &&
                            <Link href={`/user/following`}>
                                <span className="h6">
                                    Following {state.user.following.length}
                                </span>
                            </Link>
                        }
                        {state && state.user && state.user.followers &&
                            <Link href={"/user/followers"} style={{ marginLeft: "2rem" }}>
                                <span className="h6">
                                    Followers {state.user.followers.length}
                                </span>
                            </Link>
                        }
                        <People people={people} handleFollow={handleFollow} />
                    </div>
                </div>
            </div>

            {/* Modal for Delete Confirmation */}
            <Modal show={showModal} onHide={closeDeleteModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </UserRoute >
    );
};

export default Home;
