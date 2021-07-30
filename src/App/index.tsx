import React from 'react';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import Employment from './pages/Employment';
import Header from './Header';
import HorizontalBar from './components/HorizontalBar';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <HorizontalBar direction="down" />
      <About />
      <HorizontalBar direction="up" />
      <Employment />
    </div>
  );
}

export default App;
