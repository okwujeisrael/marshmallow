import React from 'react';

import Hero from './components/Hero';
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className="w-screen min-h-screen">
      <Hero />
      <Homepage />
    </div>
  );
}

export default App;
