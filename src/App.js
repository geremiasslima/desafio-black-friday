import React from 'react';
import Home from './components/sections/home'
import Contacts from './components/sections/contacts';
import Products from './components/sections/products';
import TopNavBar from './components/sections/navbar';

function App() {
  return (
    <>
    <TopNavBar />
    <Home />    
    <Products />
    <Contacts />
    
    </>
  );
}

export default App;
