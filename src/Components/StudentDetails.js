import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axios from 'axios';
const StudentDetails=()=>{
    const{id,name} = useParams();
    useEffect(()=>{
        //axios.get("/student/detials/"+id)
    },[]);
    return(
        <div>
            Student Id : {id}
        </div>
    )

}
export default StudentDetails;