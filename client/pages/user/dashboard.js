import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList";

const Home = () => {
    const [state, setState] = useContext(UserContext);

    // State 
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [upLoading, setUpLoading] = useState(false);
    const [people, setPeople] = useState([]);

    const [posts, setPosts] = useState([]);


    // Router
    const router = useRouter();

    // Effect 
    useEffect(() => {
        if (state && state.token) {
            fetchUserPosts()
            findPeople()
        };
    }, [state && state.token])

    // Functions

    const fetchUserPosts = async () => {
        try {
            const { data } = await axios.get("/user-posts");
            // console.log("Data =>", data)
            setPosts(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const findPeople = async () => {
        try {
            const { data } = await axios.get("/find-people");
            setPeople(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const postSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/create-post", { content, image });

            console.log("Data =>", data)

            if (data.error) {
                toast.error(data.error)
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
    }

    const handleImage = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);

        setUpLoading(true);
        try {
            const { data } = await axios.post("/upload-image", formData);
            setImage({ url: data.url, public_id: data.public_id });
            console.log("Data =>", data)
            console.log(file)

        }
        catch (error) {
            console.log(error);
            setUpLoading(false);
        }
    }

    const handleDelete = async (post) => {
        try {
            const answer = window.confirm("Are you sure you want to delete?")
            if (!answer) return;
            const { data } = await axios.delete(`/delete-post/${post._id}`)
            toast.error("Post Deleted!");
            fetchUserPosts();
        }
        catch (error) {
            console.log(error);
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

                        <PostList posts={posts} handleDelete={handleDelete} />
                    </div>

                    {/* <pre>
                        {JSON.stringify(posts, null, 4)}
                    </pre> */}

                    <div className="col-md-4">
                        <pre>{JSON.stringify(people, null, 4)}</pre>
                    </div>
                </div>
            </div>
        </UserRoute>
    );
};


export default Home;