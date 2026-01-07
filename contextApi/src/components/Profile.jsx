import { useContext } from "react";
import userContext from "../context/UserContext";

export default function Profile() {
    const { user } = useContext(userContext)
    console.log(user);
    
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