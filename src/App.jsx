import React, { useState } from 'react';
import First from './components/First/First';
import Second from './components/Second/Second';
import './App.css'
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';

const App = () => {
  const [menuOne, setMenuOne]=useState(false);
  const [menuTwo,setMenuTwo]=useState(false);
 

  return (
    <div className='container'>
      <First/>
      <Second menuOne={menuOne} setMenuOne={setMenuOne} />
      <Third setMenuOne={setMenuOne} menuOne={menuOne} setMenuTwo={setMenuTwo} menuTwo={menuTwo}/>
      <Fourth menuTwo={menuTwo} setMenuTwo={setMenuTwo}/>
    </div>
  )
}

export default App