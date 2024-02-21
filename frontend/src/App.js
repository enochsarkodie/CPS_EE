import React from 'react';
import './App.css';
import Homepage from './Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route,Router,Routes,Link} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/Admin/Admin';
import RegDriver from './pages/Admin/components/RegDriver';
import DriverList from './pages/Admin/components/DriverList';

function App() {
  return (
    <Routes>
    
       
      <Route index element = {
        <main>
        <Homepage/>
       </main>
      }/>
    
    <Route path ={'/login'} element={<Login/> }></Route>
    <Route path ={'/signup'} element={  <SignUp/>}></Route>
    <Route path ={'/dashboard/admin'} element={<Admin/>}></Route>
    <Route path = {'/admin/register/driver'} element={RegDriver}></Route>
    <Route path = {'/admin/driver/'} element={<DriverList/>}></Route>
   </Routes>

  )
}

export default App;
