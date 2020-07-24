import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/login'
import Header from './components/Header'
import './App.css';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
              <Route  path="/" >
                    <Home></Home>
              </Route>
              <Route  path="/home" >
                    <Home></Home>
              </Route>
              <Route path="/home">
                    <Home></Home>
              </Route>
              <Route path = "/about" ></Route>

              <Route path = "/login" ></Route>
  
              <Route path="/checkout" element={<Checkout></Checkout>}>
                    
              </Route>

      </Routes>
      
    </div>
  );
}

export default App;
