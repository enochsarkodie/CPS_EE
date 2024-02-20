import React from 'react';
import './App.css';
import Homepage from './Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route,Routes,} from 'react-router-dom'
import Features from './Features';
import LoginAdmin from './components/LoginAdmin';
import Dashboard from './components/Dashboard'





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
    <Route path ={'/features'} element={<Features/>}></Route>
   <Route path={'/adminDashboard'} element={<adminDashboard/>}></Route>
   <Route path ={'/loginAdmin'} element={<LoginAdmin/> }></Route>
   <Route path={'/Dashboard'} element={<Dashboard/>}></Route>
   </Routes>

  )
}

export default App;
