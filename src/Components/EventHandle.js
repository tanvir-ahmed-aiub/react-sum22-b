import {useState} from 'react';

const EventHandle =()=>{
    const [count,setCount]= useState(100);
    const HandleClick=()=>{
        setCount(count+1);
        //count++;
        //console.log(count);

    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={HandleClick}>Click Me</button>
        </div>
    )
}
export default EventHandle;