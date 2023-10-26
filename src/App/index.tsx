import React, { useRef } from 'react';
import './index.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Header from './components/Header';
import HorizontalBar from './components/HorizontalBar';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Header linkRefs={[
        {
          linkName: "Home",
          linkRef: homeRef,
        },
      ]}/>
      <Home homeRef={ homeRef }/>
      <HorizontalBar direction="down">
        <div className="arrow-button">
          <img src="/images/circle-arrow.ico" alt="Arrow" />
        </div>
      </HorizontalBar>
      <Footer />
    </div>
  );
}

export default App;
