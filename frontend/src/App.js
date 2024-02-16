import React from 'react';
import './App.css';
import Homepage from './Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route,Router,Routes,Link} from 'react-router-dom'





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
   </Routes>

  )
}

export default App;
