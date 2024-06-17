import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const [state] = useContext(UserContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(name, email, password, secret);
        try {
            const { data } = await axios.post(`/register`, {
                name,
                email,
                password,
                secret,
            });

            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            }
            else {
                setName("");
                setEmail("");
                setPassword("");
                setSecret("");
                setOk(data.ok);
                setLoading(false);
            }

        }
        catch (err) {
            setLoading(false);
            toast.error("Something went wrong, please try again");
        }
    }

    if (state && state.token) { router.push("/") };

    return (
        <div className="container-fluid">

            <div className="row py-5 ">
                <div className="col-md-6 offset-md-3 register--page">
                    <div className="register-content">
                        <AuthForm
                            handleSubmit={handleSubmit}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            secret={secret}
                            setSecret={setSecret}
                            loading={loading}
                            register={"register"}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">

                    <Modal
                        title="Congratulations!"
                        open={ok}
                        onCancel={() => setOk(false)}
                        footer={null}
                    >
                        <p>You have successfully registered.</p>
                        <Link href="/login">
                            <span className="btn btn-primary">Login</span>
                        </Link>
                    </Modal>
                </div>
            </div>

            <div className="row already-registered">
            <p>Already registered? <Link href="/login">Login</Link>
            </p>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default Register;