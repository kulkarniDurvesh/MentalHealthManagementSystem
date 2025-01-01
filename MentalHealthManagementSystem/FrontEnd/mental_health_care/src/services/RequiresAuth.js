import react,{useContext} from 'react'
import userContext from '../context/user/userContext'
import { Route,useHistory } from 'react-router-dom';

import React from 'react'

function RequiresAuth(props) {

    //const context = useContext(userContext);
    const history = useHistory();

    if(localStorage.getItem('token') === null){
        history.push('/login')
    }
    else if(localStorage.getItem('role') != 'ROLE_USER'){
      history.push('/')
  }

  return (
    <Route {...props}/> // arr[1,2,3] arr1 = [,4,5...arr]
  )
}

export default RequiresAuth
