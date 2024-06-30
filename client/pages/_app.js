import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import "../public/css/home.css";
import "../public/css/nav.css"
import "../public/css/register.css"
import "../public/css/login.css"
import "../public/css/profile.css"
import "../public/css/dashboard.css"
import "../public/css/forgot-pass.css"

function Myapp({ Component, pageProps }) {
    return (
        <UserProvider >
            <>
                <Head>
                    {/* <link rel="stylesheet" href="css/styles.css" /> */}
                </Head>

                <Nav />

                <ToastContainer
                    position="top-center"
                />

                <Component {...pageProps} />
            </>
        </UserProvider>
    )
}

export default Myapp;