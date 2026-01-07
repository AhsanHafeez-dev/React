import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github({ name = "hiteshchoudhary" }) {
    const data = useLoaderData();
    let url = `https://api.github.com/users/${name}`;
    // let [data,setData]=useState({});
//     useEffect(
//         () => {
//                 fetch(url)
//         .then((res) => res.json()) 
//         .then((res) => setData(res)  )
//     }
// )

    
    
    
   return ( <div className="flex justify-center items-center flex-col ">
       <div >Github followers : {data.followers}</div>
       
       <img className="h-70 w-70 my-3" src={data["avatar_url"]}></img>
       
   </div>
   )

    
}


export const loadGithubInfo = async () => {
    console.log("url ",`https://api.github.com/users/hiteshchoudhary`);
    
    let res = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    res = await res.json()
    console.log("return ",res);
    
    return res
}