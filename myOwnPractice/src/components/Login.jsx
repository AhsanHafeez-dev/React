import { useContext ,useEffect,useState} from "react";
import userContext from "../contexts/UserContext";


export default function Login() {

    useEffect(()=>{console.log(" login mounted");
    }, [])
    

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(userContext);
    
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("setting ",userName,password);
        
        setUser(userName, password);
        
    }
    return (
        <div >
            
            <h2>login</h2>
            
            <input type="text" placeholder="userName" className="text-white bg-black border-2 border-red-500" onChange={(e) => { setUserName(e.target.value);console.log("target",e.target.value);
             }} />
            <br />
            <br />
            <input type="password" className="text-white bg-black border-2 border-red-500" placeholder="password" onChange={(e) => { setPassword(e.target.value); }} />
            <br /><br />
            <button onClick={handleSubmit}>submit</button>
            <br /><br />
    </div>
)
}