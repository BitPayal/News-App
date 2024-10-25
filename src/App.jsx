import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Border from './Components/Border';
import Content from './Components/Content';
function App() {
  const [category,setCategory]=useState("general")
  return (
   <div >
     <Navbar setCategory={setCategory}/>
     <Border category={category} />
    <Content/>
    </div>

  );
}

export default App;
