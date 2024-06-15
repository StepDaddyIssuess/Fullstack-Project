import { useContext } from "react";
import { UserContext } from "../context";



const Home = () => {

    const [state, setState] = useContext(UserContext);

    return (
        <div className="container bg-img">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 text-center py-5  text-light home-title">FullStack Project</h1>
                    {/* <pre>{JSON.stringify(state)}</pre> */}
                    <div className="row">


                        <div className="col-6 d-flex align-items-center justify-content-center col-sm-12 text-light">
                            <h3 className="text-light">RealTime Network Project</h3>
                        </div>

                        <figure className="d-flex align-items-center justify-content-center text-light">
                            <ul>
                                <figcaption>Includes</figcaption>

                                <li>Apple</li>
                                <li>Pear</li>
                                <li>Orange</li>
                            </ul>
                        </figure>


                        {/* <div className="col-6 col-sm-12">
                            <div className="d-flex justify-content-center align-items-center">
                                <img className="img-fluid m-3" src="/images/default.jpg" alt="Default Image" style={{ maxHeight: "300px" }} />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;