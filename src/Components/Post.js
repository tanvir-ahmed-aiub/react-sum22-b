import axios from 'axios';
import {useState} from 'react';
const Post=()=>{
    const[post,setPost]=useState({});
    const[cl,setCl]=useState(false);
    const LoadAPIData=()=>{
        setCl(true);
        axios.get("https://jsonplaceholder.typicode.com/posts/1").
        then((rsp)=>{
            
            setPost(rsp.data);
        },(err)=>{
            debugger;
        });
    }

    return(
        <div>
            <button onClick={LoadAPIData}>Load From API</button>
            <h4>{post.title}</h4>
            {
                cl ==true &&
                <textarea value={post.body}></textarea>
            }
        </div>
    )
}
export default Post;