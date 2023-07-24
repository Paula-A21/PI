import {Route, Routes, useLocation} from 'react-router-dom';
import './App.css';

import {Home, Landing, Detail, Form} from './views';
import NavBar from './components/NavBar/NavBar';


function App() {
  
  const location = useLocation();
  
  return (
    <>
      <div>
        <h1>Pancito con quesito, sin quesito no hay pancito</h1>

        
        {location.pathname !== "/" && <NavBar/>}

        <Routes>
            <Route path = '/' element = {<Landing/>}/>
            <Route path = '/home' element = {<Home/>}/>
            <Route path = '/detail' element = {<Detail/>}/>
            <Route path = '/form' element = {<Form/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
