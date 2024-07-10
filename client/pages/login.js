import { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [state, setState] = useContext(UserContext);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(name, email, password, secret);
        try {
            const { data } = await axios.post(`/login`, {
                email,
                password,
            });

            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            }
            else {
                // console.log(data);

                // Save authentication data to local storage
                window.localStorage.setItem("auth", JSON.stringify(data));

                // Redirect to the home page
                router.reload();
                window.location.href = '/user/dashboard';
            }
        }
        catch (err) {
            setLoading(false);
            toast.error("Email or Password is incorrect");
        }


    }

    if (state && state.token) { router.push("/") };

    return (
        <div className="container-fluid image-bg">
            <div className="row py-5 bg-secondary text-light bg-default-image extra-styling">
     
            </div>

            <div className="">
                <div className="login-page">
                <div className="text-center">
                    <h1 className="login-title">Login Page</h1>
                </div>
                <br />
                    <AuthForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page="login"
                    />
                    <br />
                    <p>
                        <Link href="/forgot-password">
                        <span className="login--forgot--password">Forgot Password?</span>
                         </Link>
                    </p>
                     <p >Not registered yet? <Link href="/register">Register</Link> </p>

                </div>
            </div>
        </div>
    )
}

export default Login;