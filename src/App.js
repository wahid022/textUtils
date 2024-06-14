
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  // document.title='Text Utils'


  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const [title,setTitle]=useState('Text Utils');

  const showAlert=(msg,type)=>{
    setAlert({
      message:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


    const toggleMode=(event)=>
    {
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert('Dark mode has been enabled','success');
        setTitle('Text Utils - Light Mode');
        document.title=title;

      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white'
        showAlert('Light mode has been enabled','success');
        setTitle('Text Utils - Dark Mode');
        document.title=title;
        
      }
    }
    


  return (
    <>

      <Router>
          <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
           {/* toggleMode={toggleMode} we can pass togglemode function as a state variable also  */}
          
          <Alert alert={alert} ></Alert>

          <div className='container my-3'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>

              <Route path='/'>
                <TextForm  labelText="Enter the Text Below..." mode={mode} toggleMode={toggleMode} alert={showAlert}></TextForm>
              </Route>

            
            </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
