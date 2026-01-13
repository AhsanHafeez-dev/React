import { useEffect, useState } from "react";
import UserContext from "./UserContext";

export default function UserContextPorvider({ children }) {
    useEffect(()=>{console.log("context mounted");
    }, [])
    console.log("childre",children);
    
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
    )
}