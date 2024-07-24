
import axios from "axios";
import Post from "../../../components/cards/Post";
import Head from "next/head";



const SinglePost = ({ post }) => {


    const imageSource = (user) => {
        if (post.image) {
            return post.image.url;
        }
        else {
            return "/images/logo.png"
        }
    };

    const head = () => {
        <Head>
            <title>FULLSTACK PROJECT - A social network by devs for devs</title>

            <meta name="description" content={post.content} />

            <meta property="og:description" content="A social network by devs for devs" />
            <meta property="og:type" content="Website" />
            <meta property="og:site_name" content="FULLSTACK PROJECT" />
            <meta property="og:url" content={`http://fullstackproject.com/post/view/${post._id}`} />
            <meta property="og:image:secure_url" content={imageSource(post)} />


        </Head>
    }

    return (
        <>
            {head()}
<div style={{ overflow: "hidden"}}>

                <div className="container-fluid home--container">
    
                            <div>
                                <h1 className=" text-center home--text">FULL STACK PROJECT
                                </h1>
                            </div>

                    <div className="container">
                        <div className="row pt-5">

                            <div className="col-md-8 offset-md-2" key={post._id}>
                                <Post key={post._id} post={post} SinglePost={true} />
                            </div>

                        </div>
                    </div>
                </div>

                {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
            </div >
        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const { data } = await axios.get(`/post/${context.params._id}`);
        return {
            props: {
                post: data
            }
        }
    } catch (error) {
        console.error("Error fetching posts:", error);


        return {
            props: {
                post: []
            }
        }
    }
}

export default SinglePost;