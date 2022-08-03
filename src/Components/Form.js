import {useState} from 'react';
import axiosConfig from './axiosConfig';
const Form =()=>{
    const[uname,setUname] = useState("");
    const[pass,setPass] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var data={uname:uname,pass:pass};
        axiosConfig.post("login",data).then(
            (succ)=>{
                localStorage.setItem('_authToken',succ.data.tkey);
                debugger;
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