import { useContext } from "react";
import { UserContext } from "../context";



const Home = () => {

    const [state, setState] = useContext(UserContext);

    return (
        <div style={{ overflow: "hidden" }}>
            <div className="container home--container">
                <div className="row">
                    <div className="col home--title">
                        <h1 className="display-1 text-center py-5 home--text">FULL STACK PROJECT
                        </h1>
                        {/* <pre>{JSON.stringify(state)}</pre> */}
                        <div className="d-flex justify-content-center align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;