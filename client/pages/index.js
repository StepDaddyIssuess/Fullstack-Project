import { useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import Post from "../components/cards/Post";



const Home = ({ posts }) => {

    const [state, setState] = useContext(UserContext);

    return (
        <div style={{ overflow: "hidden" }}>
            <div className="container-fluid home--container">
                <div className="home--title">
                    <h1 className="display-1 text-center py-5 home--text">FULL STACK PROJECT
                    </h1>
                </div>

            </div>
            <div className="container">
                <div className="row pt-5">
                    {posts.map((post) => (
                        <div className="col-md-4">
                            <Post key={post._id} post={post} />
                        </div>
                    ))}
                </div>
            </div>
            {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
        </div>
    )
}

export async function getServerSideProps() {
    const { data } = await axios.get("/posts");
    return {
        props: {
            posts: data
        }
    }
}

export default Home;