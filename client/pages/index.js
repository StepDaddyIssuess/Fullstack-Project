import { useContext } from "react";
import { UserContext } from "../context";



const Home = () => {

    const [state, setState] = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 text-center py-5">Home Page</h1>
                    <pre>{JSON.stringify(state)}</pre>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="/images/default.jpg" alt="Default Image" style={{ maxHeight: "600px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;