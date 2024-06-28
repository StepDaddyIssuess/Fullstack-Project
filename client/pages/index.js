import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import axios from "axios";
import Post from "../components/cards/Post";
import Head from "next/head";
import Link from "next/link";
import io from "socket.io-client";


const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, { path: "/socket.io" }, {
    reconnection: true,
})

const Home = ({ posts }) => {

    const [state, setState] = useContext(UserContext);
    const [homePage, setHomePage] = useState([]);

    useEffect(() => {
        socket.on("new-post", (newPost) => {
            setHomePage([newPost, ...posts]);
        })
    })



    const head = () => {
        <Head>
            <title>FULLSTACK PROJECT - A social network by devs for devs</title>

            <meta name="description" content="A social network by developers for developers" />

            <meta property="og:description" content="A social network by devs for devs" />
            <meta property="og:type" content="Website" />
            <meta property="og:site_name" content="FULLSTACK PROJECT" />
            <meta property="og:url" content="http://fullstackproject.com" />
            <meta property="og:image:secure_url" content="http://fullstackproject.com/images/logo.png" />

        </Head>
    }

    const collection = homePage.length > 0 ? homePage : posts

    return (
        <div style={{ overflow: "hidden" }}>
            <div className="container-fluid home--container">
                <div className="home--title">
                    <h1 className="display-1 text-center py-5 home--text">FULL STACK PROJECT
                    </h1>
                </div>

                <div className="container">
                    <div className="row pt-5">
                        {collection.map((post) => (
                            <div className="col-md-4" key={post._id}>
                                <Link href={`/post/view/${post._id}`}>
                                    <Post key={post._id} post={post} homepage={true} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const { data } = await axios.get("/posts");
        return {
            props: {
                posts: data
            }
        }
    } catch (error) {
        console.error("Error fetching posts:", error);

        return {
            props: {
                posts: []
            }
        }
    }
}

export default Home;