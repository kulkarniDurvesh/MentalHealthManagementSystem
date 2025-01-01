import UserContext from './userContext'
import react,{useState} from 'react'

const UserState = (props)=>{


    const[login,setLogin] = useState(false);

    const toggleLogin = (val)=>{
        console.log('working' + val)
        setLogin(val)
    }

    return(
        <UserContext.Provider value={{login, toggleLogin}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;