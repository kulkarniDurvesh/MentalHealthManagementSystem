import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

function ChangePassword() {

    const baseURL = 'http://localhost:9090/users'

const[userName,setUserName] = useState(localStorage.getItem('userName'));
const[oldPassword,setOldPassword] = useState('')
const[newPassword,setNewPassword] = useState('')
const[verify,setVerify] = useState('')

const onSubmitHandler = (event)=>{
    event.preventDefault();
    const formValue = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        userName: userName
    }

    axios.post(`${baseURL}/change/password`,formValue,{
        headers:{
            'Authorization': 'Bearer '+localStorage.getItem('token')
        }
    }).then((response)=>{
        console.log(response);
        swal(response.data);
    }).catch((error)=>{
        console.log(error);
        swal("Failed: something went wrong");
    })

    setOldPassword('')
    setNewPassword('')
    setVerify('')
}

  return (
    <>
                   <div className="d-flex justify-content-center">
                    <div className="card card-outline-secondary w-50">
                        <div className="card-header">
                            <h3 className="mb-0">Change Password</h3>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off" onSubmit={onSubmitHandler}>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputPasswordOld">Current Password</label>
                                    <input type="password" className="form-control" id="inputPasswordOld" value={oldPassword} required onChange={(e)=>setOldPassword(e.target.value)} style={{marginBottom:'8px'}}/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputPasswordNew">New Password</label>
                                    <input type="password" className="form-control" id="inputPasswordNew" value={newPassword} required onChange={(e)=>setNewPassword(e.target.value)} style={{marginBottom:'8px'}}/>
                                    <span className="form-text small text-muted">
                                            The password must be 8-20 characters, and must <em>not</em> contain spaces.
                                        </span>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputPasswordNewVerify">Verify</label>
                                    <input type="password" className="form-control" id="inputPasswordNewVerify" value={verify} required onChange={(e)=>setVerify(e.target.value)} style={{marginBottom:'8px'}}/>
                                    <span className="form-text small text-muted">
                                            To confirm, type the new password again.
                                        </span>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="btn btn-secondary  w-100 float-right">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default ChangePassword