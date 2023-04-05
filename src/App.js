import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500); 
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode is enabld", "success")
      document.title = 'TextUtils - Dark mode'
      // document.body.style.color = 'white'
    }
    else {
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      setmode('light')
      showAlert("light mode is enabld", "success")
      document.title = 'TextUtils - Light mode'

    }
  }
  return (
     <>
       {/* <BrowserRouter> */}
         <div className="container my-3">
        <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils"/> 
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      
     {/* <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
       </div >
     {/* </BrowserRouter> */}
</>
      
   );
}

export default App;
