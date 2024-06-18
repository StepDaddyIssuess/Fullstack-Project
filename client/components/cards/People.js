import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { useContext } from "react";
import { imageSource } from "../../functions";

const People = ({ people, handleFollow }) => {

    const [state] = useContext(UserContext);

    const router = useRouter();

    return (
        <>
            {/* <pre>{JSON.stringify(people, null, 4)}</pre> */}
            <List
                itemLayout="horizontal"
                dataSource={people}
                renderItem={(user) => (
                    <List.Item.Meta
                        className="mb-2 people-after dashboard--sidebar--following--container "
                        avatar={<Avatar size={60} src={imageSource(user)} />}
                        title={<div className="d-flex justify-content-between h5 ">
                            <span className="dashboard--sidebar--following--usernames">
                                {user.username}
                            </span>
                            <span className=" people-border dashboard--sidebar--following--button" role="button"
                                onClick={() => handleFollow(user)}
                            >Follow</span></div>}
                    />
                )}
            >
            </List>
        </>
    )
};

export default People;