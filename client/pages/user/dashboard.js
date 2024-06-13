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
            fetchUserPosts();
            findPeople();
        }
    }, [state && state.token]);

    // Functions

    const fetchUserPosts = async () => {
        try {
            const { data } = await axios.get("/user-posts");
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
                fetchUserPosts();
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
            fetchUserPosts();
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

                        <PostList posts={posts} handleDelete={openDeleteModal} />
                    </div>

                    <div className="col-md-4">
                        <People people={people} />
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
