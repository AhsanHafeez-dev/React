import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Github() {
    // const { userName } = useParams();
    // const [data, setData] = useState({});
    // useEffect(
    //     () => {
    //         fetch(`https://api.github.com/users/${userName}`)
    //     .then((res) => res.json())
    //     .then((res)=>setData(res))
    //     }
    // , [userName])


    const data=useLoaderData()
    return (
        <div className=" flex flex-col items-center">
            <h1> Username : {data.login}</h1>

            <img className="my-6" src={data.avatar_url} width="330" height="330" />
        </div>
    )
    
    
}

export  async function getGithubInfo({params}) {
    const { userName } = params;   
    
    const response = await fetch(`https://api.github.com/users/${userName}`);
    return response.json();
}