import { Avatar } from "antd"
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const CreatePostForm = ({ content, setContent, postSubmit, handleImage, image, upLoading }) => {
    return (
        <div className="card">
            <div className="card-body pb-3">
                <form className="form-group">
                    <ReactQuill
                        theme="snow"
                        className="form-control"
                        placeholder="Write something..."
                        value={content}
                        onChange={(e) => setContent(e)}
                    />
                </form>
            </div>

            <div className="card-footer d-flex justify-content-between text-muted">
                <button className="btn btn-primary btn-sm mt-1"
                    disabled={!content}
                    onClick={postSubmit}>
                    Post
                </button>

                <label>
                    {
                        image && image.url ?
                            (<Avatar size={30} src={image.url} className="mt-1" />) :
                            upLoading ?
                                (<LoadingOutlined spin />) :
                                (<CameraOutlined className="mt-2" role="button" />)
                    }
                    <input onChange={handleImage} type="file" accept="images/*" hidden />
                </label>
            </div>
        </div>
    )
}

export default CreatePostForm;