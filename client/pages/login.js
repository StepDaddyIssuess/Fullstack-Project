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
        <div className="container-fluid">
            <div className="row py-5 bg-secondary text-light bg-default-image login-box-above-text">
                <div className="col text-center">
                    <h1>Login Page</h1>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-md-6 offset-md-3 login-page">
                    <AuthForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page="login"
                    />
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <p className="text-center">Not registered yet? <Link href="/register">Register</Link>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="text-center">
                        <Link href="/forgot-password">
                            Forgot Password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;