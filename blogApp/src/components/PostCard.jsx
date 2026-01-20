import { useState } from "react";
import appWriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
function PostCard(
    {
        $id,title,featuredImage
     }
) {

    const [url, setUrl] = useState("");
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-60 flex items-center justify-center flex-col bg-gray-100 rounded-xl p-4 ">
                <div className="w-30 justify-center mb-4">
                    <img src={appWriteService.getFilePreview(featuredImage)} alt="Blog Image" className="rounded-2xl w-30 h-30" />

                </div>
                <h2 className="text-xl font-bold">{title}</h2>

            </div>
        </Link>
    )
    
}

export default PostCard;