import { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import People from "../components/cards/People";
import { toast } from "react-toastify";

const Search = () => {

    //Context
    const [state, setState] = useContext(UserContext);

    // State's
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    // Function's
    const searchUser = async (e) => {
        e.preventDefault();

        // Try/Catch
        try {
            const { data } = await axios.put(`/search-user/${query}`)
            const uniqueUsers = Array.from(new Map(data.map(user => [user._id, user])).values());
            setResult(uniqueUsers);
        }
        catch (error) {
            console.error("Error searching user:", error.response ? error.response.data : error.message);
        }
    }

    const handleFollow = async (user) => {
        try {
            const { data } = await axios.put("user-follow", { _id: user._id })

            // Update local storage, update user , keep token
            let auth = JSON.parse(localStorage.getItem("auth"));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            // update context
            setState({ ...state, user: data });
            // update people state
            setResult(prevPeople => prevPeople.filter((p) => p._id !== user._id));
            // Success
            toast.success(`Following ${user.username}`);
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
            setResult(prevPeople => prevPeople.filter((p) => p._id !== user._id));
            toast.error(`Unfollowed ${user.username}`);

        }
        catch (err) {
            console.log(err);
        }
    }

    return (

        <>
            <form className="form-inline row pt-3" onSubmit={searchUser}>
                <div className="col-8">
                    <input
                        onChange={e => {
                            setQuery(e.target.value)
                            setResult([])
                        }}
                        value={query}
                        type="search"
                        placeholder="Search"
                        className="form-control border-black"
                    />
                </div>

                <div className="col-4">
                    <button className="btn btn-outline-primary col-12" type="submit">
                        Submit
                    </button>
                </div>
            </form>


            {result.length > 0 ? (
                <People
                    people={result} // Pass an array of users
                    handleFollow={handleFollow}
                    handleUnfollow={handleUnfollow}
                />
            ) : (
                <p></p>
            )}
        </>



    )


}



export default Search;