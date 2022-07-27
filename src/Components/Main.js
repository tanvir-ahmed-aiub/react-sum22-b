import EventHandle from './EventHandle';
import Form from './Form';
import LeftMenu from './LeftMenu';
import Par from './Par';
import Post from './Post';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateStudent from './CreateStudent';
import StudentList from './StudentList';
const Main = ()=>{
    return (
        <div>
            <BrowserRouter>
                <LeftMenu/>
                <Routes>
                    <Route path="/" element={<Form></Form>} />
                    <Route path="/paragraph" element={<Par/>} />
                    <Route path="/event" element={<EventHandle/>} />
                    <Route path="/post" element={<Post/>} />
                    <Route path="/student" element={<CreateStudent/>} />
                    <Route path="/list" element={<StudentList/>} />
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}
export default Main;