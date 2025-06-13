 import logo from './logo.svg';
 import './App.css';
 import { Routes, Route } from 'react-router-dom';
 import Login from './login';
 import Dashboard from './dashboard'
 import SignUp from './sign-up'
 function App() {
 return (
   <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<Dashboard />}/>
     <Route path='/signup' element={<SignUp />}/>
     <Route path='/about' element={<div>I am About page</div>}/>
   </Routes>
 );
}
 
 export default App;

