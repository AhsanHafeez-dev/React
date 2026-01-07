import { useParams } from "react-router-dom"
import React from 'react';

export default function User() {
    
    const { id } = useParams();
    return (
        <>
            <div className="bg-green-500 text-3xl">User : {id} </div>
        </>
    )
}