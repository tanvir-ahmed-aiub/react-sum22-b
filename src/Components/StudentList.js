import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
const StudentList=()=>{
    const[students,setStudents] = useState([]);
    useEffect(()=>{
        axiosConfig.get("student/get").then((rsp)=>{
        setStudents(rsp.data);
        },(er)=>{

        })

    },[]);
    const loadData=()=>{
        axiosConfig.get("student/get").then((rsp)=>{
            setStudents(rsp.data);
        },(er)=>{

        })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            <ul>
                {
                    students.map((st)=>
                    <li key={st.id}><Link to={`/student/details/${st.id}`}>{st.name}</Link></li>
                    )
                }
            </ul>
        </div>
    )
}
export default StudentList;