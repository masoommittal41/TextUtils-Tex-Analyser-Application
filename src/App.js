import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode=()=>{
    if(mode==='dark')
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been set","success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor='#020f29';
      showAlert("Dark Mode has been set","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggle={togglemode}/>
    <Alert alert={alert}/>
    <div class="container my-5">
    <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={ <TextForm heading="Try TextUtils-Word Counter,Character Counter,Case Converter" mode={mode} showalert={showAlert}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
