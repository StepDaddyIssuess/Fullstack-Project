import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import Link from "next/link";
import AuthForm from "../../../components/forms/AuthForm";
import { UserContext } from "../../../context";
import { useRouter } from "next/router";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const ProfileUpdate = () => {
    const [state, setState] = useContext(UserContext);

    const [username, setUsername] = useState("")
    const [about, setAbout] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState({});
    const [uploading, setUpLoading] = useState(false)


    const router = useRouter();

    useEffect(() => {
        if (state && state.user) {
            setUsername(state.user.username);
            setAbout(state.user.about);
            setName(state.user.name);
            setEmail(state.user.email);
            setImage(state.user.image);
        }
    }, [state && state.user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email, password, secret);
        try {
            setLoading(true);
            const { data } = await axios.put(`/profile-update`, {
                username,
                about,
                name,
                email,
                password,
                secret,
                image,
            });
            console.log("update Response", data)
            // console.log("profile update res => ", data);

            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            }
            else {
                setOk(true);
                setLoading(false);
                // ! update local storage, update user, keep token !
                let auth = JSON.parse(localStorage.getItem("auth"));
                auth.user = data;
                localStorage.setItem("auth", JSON.stringify(auth));

                // ! Update Context ! // 
                setState({ ...state, user: data });
                router.reload();
            }

        }
        catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                // Display the specific error message received from the server
                toast.error(err.response.data.error)
            }
            else {
                toast.error(err);
                setLoading(false);
            }
            // catch (error) {
            //     return toast.error(error);
            //     // toast.error(error.response.data)
            //     setLoading(false);
            // }
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
        <div className="container-fluid">
            <div className="row py-5 bg-secondary text-light bg-default-image">
                <div className="col text-center">
                    <h1>Profile</h1>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-md-6 offset-md-3">

                    <label className="d-flex justify-content-center display-4">
                        {
                            image && image.url ?
                                (<Avatar size={60} src={image.url} className="mt-1" />) :
                                uploading ?
                                    (<LoadingOutlined spin />) :
                                    (<CameraOutlined className="mt-2" role="button" />)
                        }
                        <input onChange={handleImage} type="file" accept="images/*" hidden />
                    </label>


                    <AuthForm
                        username={username}
                        setUsername={setUsername}
                        about={about}
                        setAbout={setAbout}
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                        profileUpdate={true}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">

                    <Modal
                        title="Congratulations!"
                        open={ok}
                        onCancel={() => setOk(false)}
                        footer={null}
                    >
                        <p>You have successfully applied the changes!</p>
                        <Link href="/user/dashboard">
                            <span className="btn btn-primary">Back to Dashboard</span>
                        </Link>
                        <Link href="/user/profile/update">
                            <span className="btn btn-primary m-2" onClick={() => setOk(false)}>Go back</span>
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdate;