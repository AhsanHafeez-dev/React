import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

export default function Profile() {
    useEffect(()=>{console.log("profile mountedx");
    }, [])
    
    const { user } = useContext(UserContext);
    console.log(!user);
    
    
    
    
    if (!user) {
        return (
            <div>
                Please Login First
            </div>
        )
        
    }


    return (
        <div>
            Welcome {user} 

        </div>
    )
}