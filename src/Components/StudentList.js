import {useState} from 'react';
import axios from 'axios';
const StudentList=()=>{
    const[students,setStudents] = useState([]);
    const loadData=()=>{
        axios.get("http://localhost:8000/api/student/get").then((rsp)=>{
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
                    <li>{st.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default StudentList;