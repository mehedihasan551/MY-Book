import React from 'react';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h3>hi Mehedis</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default App;