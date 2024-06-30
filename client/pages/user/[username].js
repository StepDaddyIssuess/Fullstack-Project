import { Avatar, List, Card } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import axios from "axios";

const Username = () => {

    const [state, setState] = useContext(UserContext);

    const [user, setUser] = useState({});

    const router = useRouter();

    useEffect(() => {
        if (router.query.username) {
            fetchUser();
        }
    }, [router.query.username])

    const imageSource = (user) => {
        if (user.image) {
            return user.image.url;
        }
        else {
            return "/images/logo.png"
        }
    }

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`/user/${router.query.username}`);
            setUser(data);
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="row col-md-6 offset-md-3">
            {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}


            <div className="pt-5 pb-5">

                <Card hoverable cover={<img src={imageSource(user)} height="600px" alt={user.name} />} >
                    <Card.Meta title={user.name} description={user.about} />

                    <p className="pt-2 text-muted"> Joined {moment(user.createdAt).fromNow()}</p>

                    <div className="d-flex justify-content-between">
                        <span className="btn btn-sm">
                            {user.followers && user.followers.length} Followers
                        </span>

                        <span className="btn btn-sm">
                            {user.following && user.following.length} Following
                        </span>
                    </div>



                </Card>



                <Link href="/user/dashboard" className="d-flex justify-content-center h1 pt-5 sticky-bottom ">
                    <span role="button"><RollbackOutlined /></span>
                </Link>
            </div>
        </div >
    )
};

export default Username;