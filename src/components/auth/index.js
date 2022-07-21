import Login from "../auth/login";
import Register from "../../pages/register";


export default function Auth({showForm}){
    
    const showFormComponent ={
        Login : <Login />,
        Register : <Register />
    }
    return (
        <>
            {showFormComponent[showForm]}
        </>
    )
}