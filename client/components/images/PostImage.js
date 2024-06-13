const PostImage = ({ url }) => {
    return (
        <div
            style={{
                backgroundImage: "url(" + url + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "650px"
            }}
        ></div>
    )
}

export default PostImage;