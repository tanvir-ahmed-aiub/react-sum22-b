import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
const FileUpload=()=>{
    const[mfile,setFile] = useState(null);
    const upload=(event)=>{
        event.preventDefault();
        var data = new FormData();
        data.append("file",mfile,mfile.name);
        debugger;
        axiosConfig.post("file",data).then((rsp)=>{
            debugger;
        },(er)=>{
            debugger;
        });
        alert("clicked");
    }
    return(
        <div>
            <img width="300" height="300" src="http://localhost:8000/storage/pro_pics/pro_picture.png"/> 
            <form onSubmit={upload}>
                <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} name="image"></input>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default FileUpload;