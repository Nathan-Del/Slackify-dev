import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Afficher from './Components/Afficher';
import CreateMessage from './Components/CreateMessage';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/Afficher' component={Afficher} />
        <Route exact path='/register' component={Register} />     
        <Route exact path='/NewMessage' component={CreateMessage}/>   
      </BrowserRouter>
    </div>
  );
} 

export default App;