
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/noMatch/noMatch';
import PostUser from './pages/appUser/PostUser';
import SignupPage from './pages/SignUpPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './pages/header/Header.js';

function App() {
  return (
   <>
   <Header />
   <Routes> 
            <Route path="/" element={<LoginPage/>} /> 
            <Route path="/signup" element={ <SignupPage/>} /> 
                <Route path = "/dashboard" element={<Dashboard/>}/> 
            </Routes> 
  
     </>
  );
}

export default App;
