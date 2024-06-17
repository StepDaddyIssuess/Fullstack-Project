import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import { Avatar } from "antd";

function Nav() {

    const [current, setCurrent] = useState("");

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname]);

    const router = useRouter();
    const [state, setState] = useContext(UserContext);

    const logout = () => {
        window.localStorage.removeItem('auth');
        try {
            setState(null);
        }
        catch (err) {
            console.log(err);
        }
        router.reload();
        window.location.href = '/login';

    };

    return (
        <nav className=" nav d-flex justify-content-between nav-bar nav-fullstackproject" >
            <div style={{ marginLeft: "5rem" }}>
                <Link href="/" className={`nav-link text-light logo  ${current === "/" && "nav-active"}`} style={{ backgroundColor: "black" }}>
                    FullStackProject
                </Link>
            </div>

            {
                state !== null ? (

                    <>
                        <div className="dropdown show p-1 h5 dropdown-bg
                     " style={{ marginRight: "5rem" }}>
                            <a className={` dropdown-toggle text-light `} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <strong className="fs-5 text ">{current === "/" ? state && state.user && state.user.name : current === "/user/profile/update" ? "profile" : "dashboard"} </strong>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                <Link href="/user/dashboard" className="nav-link dropdown-item ">
                                    Dashboard
                                </Link>

                                <Link href="/user/profile/update" className="nav-link dropdown-item ">
                                    Profile
                                </Link>

                                <a className="nav-link dropdown-item" onClick={logout}>Logout</a>
                            </div>
                        </div>
                    </>

                ) : (
                    <>
                        <Link href="/register" className={`nav-link nav--register
                            text-light ${current === "/register" && "nav-active"} `}>
                            Register
                        </Link>
                        <Link href="/login" className={`nav-link nav--login
                            text-light ${current === "/login" && "nav-active"} `} style={{ marginRight: "5rem" }}>
                            Login
                        </Link>
                    </>

                )
            }



            { }


        </nav >
    )
}

export default Nav;