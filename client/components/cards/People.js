import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { useContext } from "react";

const People = ({ people }) => {

    const [state] = useContext(UserContext);

    const router = useRouter();

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={people}
                renderItem={(user) => (
                    <List.Item.Meta
                        title={<div className="d-flex justify-content-between h5">{user.username} <span className="text-primary" role="button">Follow</span></div>}
                    />
                )}
            >
            </List>
        </>
    )
};

export default People;