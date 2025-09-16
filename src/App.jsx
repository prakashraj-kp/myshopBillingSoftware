import { Route, Routes,Navigate, useLocation} from 'react-router-dom'
import './App.css'
import Menubar from  './components/Menubar'
import Dashboard from './pages/Dashboard/Dashboard';
import Explore  from './pages/Explore/Explore';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import ManageCategory from './pages/ManageCategory/ManageCategory';
import MangeItem from  './pages/ManageItems/ManageItems';
import Login from './pages/Login/Login'; 
import { Toaster } from 'react-hot-toast';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import { useContext } from 'react';
import { AppConstants } from './Util/constants';
import { AppContext } from './context/AppContext';
import ManageItems from './pages/ManageItems/ManageItems';
import NotFound from './components/NotFound/NotFound';

function App() {
    const location=useLocation();
    const{auth} =useContext(AppContext);

    const LoginRoute=({element})=>{
      if(auth.token){
        return <Navigate to="/dashboard" replace/>
      }
      return element;
    }

    const ProtectedRoute=({element,allowedRoles})=>{
      if(!auth.token){
        return <Navigate to="/login" replace />
      }
      if(allowedRoles && !allowedRoles.includes(auth.role)){
        return<Navigate to="/dashboard" replace/>
            }
            return element;
    }

  return (
    <div>
   {location.pathname !=="/login" && <Menubar/>}
   <Toaster/>
   <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/explore" element={<Explore/>}/>
    {/* admin only routes*/}
   <Route path="/category" element={<ProtectedRoute element={<ManageCategory/>} allowedRoles={['ROLE_ADMIN']}/>}/>
    <Route path="/users" element={<ProtectedRoute element={<ManageUsers/>} allowedRoles={['ROLE_ADMIN']}/>}/>
     <Route path="/items" element={<ProtectedRoute element={<ManageItems/>} allowedRoles={['ROLE_ADMIN']}/>}/>
   
    <Route path="/login"element={<LoginRoute element={<Login/>}/>}/>
  
    <Route path="/orders" element={<OrderHistory/>}/>
      <Route path="*" element={<NotFound/>}/>
   </Routes>
    </div>
  )
}

export default App;
 
