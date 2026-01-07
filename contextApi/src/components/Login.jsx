import React,{ useContext ,useState} from "react";
import userContext from "../context/UserContext";


export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(userContext);
    function handleSubmit(e) {
        e.preventDefault();
        console.log("setting ",userName,password);
        
        setUser(userName, password);
        
    }
    return (
        <div>
            
            <h2>login</h2>
            
            <input type="text" placeholder="kjkj"  onChange={(e) => { setUserName(e.target.value);console.log("target",e.target.value);
             }} />
            <br />
            <br />
            <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
            <br /><br />
            <button onClick={handleSubmit}>submit</button>
            <br /><br />
    </div>
)
}