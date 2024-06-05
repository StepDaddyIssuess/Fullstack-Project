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
        try{
            setState(null);
        }
        catch(err){
            console.log(err);
        }
        router.reload();
        window.location.href = '/login';
        
    };

    return (
        <nav className=" nav d-flex justify-content-around" style={{backgroundColor: "blue"}}>
            <Link href="/" className={`nav-link text-light logo ${current === "/" && "active"}`}>
                FullStackProject
            </Link>

            {state !== null ? (
                
                <>
                    <a className="nav-link text-light" onClick={logout}>Logout</a>

                    <Link href="/user/dashboard" className="nav-link text-light">
                        {state && state.user && state.user.name}
                    </Link>

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
            


            {}

            
        </nav>
    )
}

export default Nav;