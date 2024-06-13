import { Avatar } from "antd"
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import React, { useState } from 'react';
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css'; // Import Draft.js CSS




const PostForm = ({ content, setContent, postSubmit, handleImage, image, upLoading }) => {



    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(ContentState.createFromText(content))
    );

    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
        setContent(newEditorState.getCurrentContent().getPlainText()); // Update content state
    };



    return (
        <div className="card">
            <div className="card-body pb-3">
                <form className="form-group">
                    <Editor
                        editorState={editorState}
                        onChange={handleEditorChange}
                        placeholder="Write something..."
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

export default PostForm;