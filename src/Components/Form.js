import {useState} from 'react';
import axios from 'axios';
const Form =()=>{
    const[uname,setUname] = useState("");
    const[pass,setPass] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var data={username:uname,password:pass};
        axios.post("",data).then(
            (succ)=>{
                
            },
            (err)=>{

            }
        )

    }
    return (
        <div>
            <form onSubmit={handleForm}>
                Username:<input value={uname} onChange={(e)=>{setUname(e.target.value)}} type="text"/><br/>
                Password: <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password"/> <br/>
                <input type="submit" value="login"/>
            </form>
            
        </div>
    )
}
export default Form;