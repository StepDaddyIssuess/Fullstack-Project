import { Avatar } from "antd"
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import React, { useState, useEffect } from 'react';
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";




const PostForm = ({ content, setContent, postSubmit, handleImage, image, upLoading }) => {



    const [editorContent, setEditorContent] = useState(content);

    useEffect(() => {
        setEditorContent(content);
    }, [content])

    const handleEditorChange = (content) => {
        setEditorContent(content);
        setContent(content);
    };



    return (
        <div className="card mb-5">
            <div className="card-body pb-3">
                <form className="form-group editor-container">
                    <ReactQuill
                        value={editorContent}
                        onChange={handleEditorChange}
                        placeholder="Write something..."
                        style={{ height: "135px" }}

                        modules={{
                            toolbar: [
                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                ['link',],
                                [{ 'align': [] }],
                                ['clean'],
                            ],
                        }}
                        formats={[
                            'header', 'font', 'size',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet', 'link',
                        ]}
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
                                (<CameraOutlined className="mt-2 h5" role="button" />)
                    }
                    <input onChange={handleImage} type="file" accept="images/*" hidden />
                </label>
            </div>
        </div>
    )
}

export default PostForm;