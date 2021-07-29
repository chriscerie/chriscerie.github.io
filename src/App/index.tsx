import React from 'react';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import Header from './Header';
import HorizontalBar from './components/HorizontalBar';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <HorizontalBar />
      <About />
    </div>
  );
}

export default App;
