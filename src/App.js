import About from './Components/About';
import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import React, {useState} from 'react';
import { Alert } from './Components/Alert';



function App() {
const [Mode, setMode] = useState('light');


const toggleMode = () =>{
  if(Mode === 'light'){
    setMode('dark');
  }
  else{
    setMode('light');
  }
}
  return (
   <>
   <Navbar mode = {Mode} togglemode = {toggleMode}/>
   <Alert alert = "This is alert"/>
   <About/>
   <TextForm heading="Enter the text to analyze below"/>
   </>
  );
}

export default App;
