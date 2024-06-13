import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";

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

        <nav className=" nav d-flex justify-content-between" style={{ backgroundColor: "blue" }}>
            <Link href="/" className={`nav-link text-light logo ${current === "/" && "active"}`}>
                FullStackProject
            </Link>


            {state !== null ? (

                <>
                    <div className="dropdown show p-1 h5 dropdown-bg
                     " style={{ marginRight: "2rem" }}>
                        <a className="dropdown-toggle text-light " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <strong>{state && state.user && state.user.name}</strong>
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
                    <Link href="/login" className={`nav-link text-light ${current === "/login" && "active"}`}>
                        Login
                    </Link>


                    <Link href="/register" className={`nav-link text-light ${current === "/register" && "active"}`}>
                        Register
                    </Link>
                </>

            )}



            { }


        </nav>
    )
}

export default Nav;