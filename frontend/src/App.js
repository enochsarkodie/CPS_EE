import React from 'react';
import './App.css';
import Homepage from './Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route,Routes,} from 'react-router-dom'
import Features from './Features';
import LoginAdmin from './components/LoginAdmin';
import About from './About';
import Contact from './Contact';
import AdminDashboard from './pages/Admin/adminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './pages/Admin/Admin';
import RegDriver from './pages/Admin/components/RegDriver';
import RegVehicle from './pages/Admin/components/RegVehicle';
import RegJourney from './pages/Admin/components/RegJourney';
import JourneyPage from './pages/Admin/JourneyPage';
import VehiclePage from './pages/Admin/VehiclePage';
import DriverPage from './pages/Admin/DriverPage';
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';

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
    
    <Route path = {'/admin/register/driver'} element={<RegDriver/>}></Route>
    <Route path = {'/driver'} element={<DriverPage/>}></Route>
    
    <Route path = {'/admin/register/vehicle'} element={<RegVehicle/>}></Route>
    <Route path = {'/vehicle'} element={<VehiclePage/>}></Route>
    
    <Route path = {'/admin/register/journey'} element={<RegJourney/>}></Route>
    <Route path = {'/journey'} element={<JourneyPage/>}></Route>

    <Route path = {'/dashboard/employee'} element={<EmployeeDashboard/>}></Route>

    

    <Route path ={'/signup'} element={<SignUp/>}></Route>
    <Route path ={'/features'} element={<Features/>}></Route>
    <Route path ={'/about'} element={<About/>}></Route>
    <Route path ={'/contactus'} element={<Contact/>}></Route>
    <Route path={'/AdminDashboard'} element={<AdminDashboard/>}></Route>
    <Route path ={'/loginAdmin'} element={<LoginAdmin/> }></Route>
   </Routes>

  )
}

export default App;
