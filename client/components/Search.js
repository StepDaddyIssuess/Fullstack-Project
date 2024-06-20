import { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import People from "../components/cards/People";

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
            setResult(data);
        }
        catch (error) {
            console.error("Error searching user:", error.response ? error.response.data : error.message);
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


            {result && result.map((r) => <People key={r._id} people={result} />)}
        </>



    )


}



export default Search;