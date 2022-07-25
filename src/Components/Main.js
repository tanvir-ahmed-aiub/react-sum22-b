import EventHandle from './EventHandle';
import Form from './Form';
import LeftMenu from './LeftMenu';
import Par from './Par';
import Post from './Post';
const Main = ()=>{
    return (
        <div>
            <LeftMenu/>
            <Form></Form>
            <Par></Par>
            <Form></Form>
            <EventHandle/>
            <Post/>
        </div>
    )
}
export default Main;