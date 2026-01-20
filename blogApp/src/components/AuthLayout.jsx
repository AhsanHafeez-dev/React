import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children,authetication=true}) {

    const [loader, setLoader] = useState(true);
    const navigate = useNavigate(); 
    const authStatus = useSelector(state => state?.status) || false;
    useEffect(
        () => { 
            // if (authetication && authetication!==authStatus) {
            if(!authStatus){
                navigate("/login");
            }
            else if (!authetication && authetication !== authStatus) { navigate("/") }
            
            
            setLoader(false);
        }
        , [authStatus, navigate, authetication])
    
    return loader ? <h1>Loading ...</h1> : <>{children}</>
}