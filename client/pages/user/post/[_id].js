import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PostForm from "../../../components/forms/PostForm";
import { toast } from "react-toastify";
import UserRoute from "../../../components/routes/UserRoute";



const EditPost = () => {
    const router = useRouter();
    // console.log(router);
    const _id = router.query._id;

    const [post, setPost] = useState({})
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [upLoading, setUpLoading] = useState(false);

    useEffect(() => {
        if (_id) fetchPost();
    }, [_id])

    const fetchPost = async () => {
        try {
            // console.log(`Fetching post with ID: ${_id}`);
            const { data } = await axios.get(`/user-post/${_id}`);
            // console.log('Fetched post data:', data);
            setPost(data);
            setContent(data.content);
            setImage(data.image);
        }
        catch (err) {
            console.log(err);
        }
    }

    const postSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`/update-post/${_id}`,
                {
                    content,
                    image
                }
            )

            if (data.error) {
                toast.error(data.error);
            }
            else {
                toast.success("Post Updated");
                router.push("/user/dashboard");
            }

        }
        catch (err) {
            console.log(err);
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

    return (
        <UserRoute>
            <div className="container-fluid">
                <div className="row py-5 bg-secondary text-light bg-default-image">
                    <div className="col text-center">
                        <h1>1NewsFeed</h1>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-md-8 offset-md-2">
                        <PostForm
                            content={content}
                            setContent={setContent}
                            postSubmit={postSubmit}
                            handleImage={handleImage}
                            image={image}
                            upLoading={upLoading}
                        />
                    </div>
                </div>
            </div>
        </UserRoute>
    )
}

export default EditPost;