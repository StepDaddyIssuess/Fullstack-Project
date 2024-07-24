import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import AdminRoute from "../../components/routes/AdminRoute";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import ReactHtmlParser from 'html-react-parser';



const Home = () => {
    const [state, setState] = useContext(UserContext);

    const [posts, setPosts] = useState([]);

    const [users, setUsers] = useState([])

    // Router
    const router = useRouter();

    // Effect 
    useEffect(() => {
        if (state && state.token) {
            newsFeed();
            loadUsers();
        }
    }, [state && state.token]);

    // Functions

    const newsFeed = async () => {
        try {
            const { data } = await axios.get(`/posts`);
            setPosts(data);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (post) => {
        try {
            const { data } = await axios.delete(`/admin/delete-post/${post._id}`);
            toast.error("Post Deleted!");
            loadUsers();
            newsFeed();
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleDeleteUser = async (user) => {
        try {
            const { data } = await axios.delete(`/admin/delete-user/${user._id}`);
            toast.error("User Deleted!");
            // Remove user from state
            setUsers(users.filter(u => u._id !== user._id));
            newsFeed();
        } catch (error) {
            console.log(error);
        }
    };

    const loadUsers = async () => {
        try {
            const { data } = await axios.get(`/users`);
            setUsers(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <AdminRoute>
            <div className="container-fluid ">
                <div className="row py-5 bg-secondary text-light bg-default-image">
                    <div className="col text-center">
                        <h1>ADMIN</h1>
                    </div>
                </div>

                <div className="row py-4">
                    <div className="col-md-8 offset-md-2">
                        {posts.map((p) => {
                            return (
                                <div className="d-flex justify-content-around fs-5 h1 " key={p._id}>
                                    Content: {ReactHtmlParser(p.content)} <b>Posted By {p.postedBy.name}</b>
                                    <span className="text-danger " onClick={() => handleDelete(p)} role="button">
                                        Delete
                                    </span>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="row py-1">
                    <div className="col-md-12">
                        {users.map((user) => {
                            return (
                                user.role == 'admin' ? null : (
                                    <div className="d-flex justify-content-around fs-5 h1 " key={user._id}>
                                        name: <b>{user.name}</b>

                                        username: <b>{user.username}</b>

                                        role: <b>{user.role}</b>
                                        <span className="text-danger " onClick={() => handleDeleteUser(user)} role="button">
                                            Delete
                                        </span>
                                    </div>
                                )
                            )
                        })}

                    </div>
                </div>
            </div>
        </AdminRoute >
    );
};

export default Home;
