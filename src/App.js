import React from 'react';
import './App.css';
import Html from './htmlelememt';


function App({name}) {
  return <div >
            <div className="App">
              Hello <strong> {name} </strong>
            </div>
            <div>
             <Html/>
            </div>
          </div>
    
}

export default App;
