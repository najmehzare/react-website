import Auth from "../auth";

export default function withAuth(Component){
    let auth = true;
    let showForm = 'Login';

    //ajax

    if(auth){
        return props => <Component auth={auth} {...props} />
    }

    return props => <Auth showForm={showForm}/>
}