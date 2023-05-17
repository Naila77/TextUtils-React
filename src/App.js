
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=> {
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#073768';
      document.body.style.color= 'white';
      showAlert('DarkMode has been activated', 'success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'black'; 
      showAlert('LightMode has been activated', 'success');
    }
  }

  const showAlert= (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 2000)
}    


  return (

    <>
    {/* <Router> */}
      <Navbar  title= "TextUtils" about="About Us" mode ={mode} toggleMode={toggleMode} />
      <Alert alert= {alert}/>
        <div className="container my-3">
          {/* <Routes>
            
            <Route exact path="/about" element={<About/>}/>                    
            <Route exact path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>} />
            
          </Routes> */}
          <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
        </div> 
        {/* </Router> */}
    </>
  );
}

export default App;
