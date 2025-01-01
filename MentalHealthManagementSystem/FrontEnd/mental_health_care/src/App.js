import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import Slider from './components/Slider';
// import Cards from './components/Cards';
// import Footer from './components/Footer';
// import Doctors from './components/Doctors';
// import Content from './components/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import Admin from './components/Admin/Admin';
import DoctorProf from './components/DoctorProf/DoctorProf';
import Singup from './components/Singup/Signup';
import FreeEvaluation from './components/FreeEvaluation/FreeEvaluation';
import bloghome from './components/Blog/bloghome';
import Page1 from './components/Blog/Page1'
import Page2 from './components/Blog/Page2'
import Page3 from './components/Blog/Page3'
import UserState from './context/user/UserState';
import RequiresAuth from './services/RequiresAuth'
import AdminAuth from './services/AdminAuth'
import DoctorsAuth from './services/DoctorsAuth'
import userContext from './context/user/userContext'
import { useContext,useEffect,useState } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Alert from './components/Alert';
import NavBar from './components/NavBar/NavBar'
import Payment from './components/BookAppointment/Payment'
import Footer from './components/Footer/Footer'
import EditUserProfile from './components/DoctorProf/EditUserProfile';
import ChangePassword from './components/DoctorProf/ChangePassword';
import NotFound from './components/ErrorPages/NotFound'


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    console.log(message);
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <div>
      <UserState>
        <NavBar />
        <Alert alert={alert}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Home" component={Home} showAlert={showAlert}/>
        <Route exact path="/Login" >
          <Login showAlert={showAlert}/>
        </Route>
        <RequiresAuth exact path="/BookAppointment" component={BookAppointment} showAlert={showAlert}/>
        <DoctorsAuth exact path="/DoctorProfile" component={DoctorProfile} showAlert={showAlert}/> 
        <AdminAuth exact path="/Admin" component={Admin} showAlert={showAlert}/> 
        <RequiresAuth exact path="/DoctorProf" component={DoctorProf} showAlert ={showAlert}/> 

        <Route exact path="/Signup" >
          <Singup showAlert={showAlert}/>
        </Route>

        <Route exact path="/FreeEvaluation" component={FreeEvaluation} showAlert={showAlert}/> 
        <Route exact path="/Blogs" component={bloghome} showAlert={showAlert}/> 
        <Route exact path="/Blogs/Page1" component={Page1} showAlert={showAlert}/> 
        <Route exact path="/Blogs/Page2" component={Page2} showAlert={showAlert}/> 
        <Route exact path="/Blogs/Page3" component={Page3} showAlert={showAlert}/>
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/About" component={About} />
        <Route exact path ="/contactUs" component={Contact}/> 
        <RequiresAuth exact path ="/editUserProfile">
          <EditUserProfile/>
        </RequiresAuth>
        <RequiresAuth exact path ="/changePassword">
          <ChangePassword/>
        </RequiresAuth>

        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      </UserState>
      

    </div>
  )
}

export default App
