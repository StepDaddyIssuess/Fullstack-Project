import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import axios from "axios";

const Following = () => {

    const [state, setState] = useContext(UserContext);

    const [people, setPeople] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (state && state.token) {
            fetchFollowing()
        }
    }, [state && state.token])

    const imageSource = (user) => {
        if (user.image) {
            return user.image.url;
        }
        else {
            return "/images/logo.png"
        }
    }

    const fetchFollowing = async () => {
        try {
            const { data } = await axios.get("/user-following");
            console.log("Following => ", data);
            setPeople(data);

        }
        catch (err) {
            console.log(err);
        }
    }

    const handleUnfollow = async (user) => {
        try {
            const { data } = await axios.put("/user-unfollow", { _id: user._id });

            let auth = JSON.parse(localStorage.getItem("auth"));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            // update context
            setState({ ...state, user: data });
            // update people state
            setPeople(prevPeople => prevPeople.filter((p) => p._id !== user._id));
            toast.error(`Unfollowed ${user.username}`);

        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="row col-md-6 offset-md-3">
            {/* <pre>{JSON.stringify(people, null, 4)}</pre> */}
            <List
                itemLayout="horizontal"
                dataSource={people}
                renderItem={(user) => (
                    <List.Item.Meta
                        className="mb-2 mt-4 "
                        avatar={<Avatar src={imageSource(user)} />}
                        title={<div className="d-flex justify-content-between h5">{user.username} <span className="text-primary people-border" role="button"
                            onClick={() => handleUnfollow(user)}
                        >Unfollow</span></div>}
                    />
                )}
            >
            </List>

            <Link href="/user/dashboard" className="d-flex justify-content-center h1 pt-5 sticky-bottom ">
                <span role="button"><RollbackOutlined /></span>
            </Link>
        </div>
    )
};

export default Following;