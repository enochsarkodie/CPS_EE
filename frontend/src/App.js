import React from 'react';
import './App.css';
import Homepage from './Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route,Routes,} from 'react-router-dom'
import Features from './Features';
import LoginAdmin from './components/LoginAdmin';
import Dashboard from './components/Dashboard'
import About from './About';
import Contact from './Contact';

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
    <Route path ={'/signup'} element={<SignUp/>}></Route>
    <Route path ={'/features'} element={<Features/>}></Route>
    <Route path ={'/about'} element={<About/>}></Route>
    <Route path ={'/contactus'} element={<Contact/>}></Route>
   <Route path={'/adminDashboard'} element={<adminDashboard/>}></Route>
   <Route path ={'/loginAdmin'} element={<LoginAdmin/> }></Route>
   <Route path={'/Dashboard'} element={<Dashboard/>}></Route>
   </Routes>

  )
}

export default App;
