import react, { useContext } from 'react'
import userContext from '../context/user/userContext'
import { Route, useHistory } from 'react-router-dom';

function AdminAuth(props) {

    const context = useContext(userContext);
    const history = useHistory();

    if(localStorage.getItem('token') === null){
        history.push('/login')
    }

    else if(localStorage.getItem('role') != 'ROLE_ADMIN'){
        history.push('/')
    }
    return (
        <Route {...props}/>
    )
}

export default AdminAuth