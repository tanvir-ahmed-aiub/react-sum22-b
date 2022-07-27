import MenuItem from './MenuItem';
const LeftMenu=()=>{
    return (
        <div>
            <MenuItem url="/" value="Home"/>
            <MenuItem url="/paragraph" value="Paragraph"/>
            <MenuItem url="/event" value="Event"/>
            <MenuItem url="/post" value="Post"/>
            <MenuItem url="/student" value="Create Stuedent"/>
            <MenuItem url="/list" value="Student List"/>
            
        </div>
    )
}
export default LeftMenu;