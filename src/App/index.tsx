import React, { useRef } from 'react';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import Employment from './pages/Employment';
import Header from './components/Header';
import HorizontalBar from './components/HorizontalBar';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const employmentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Header linkRefs={[
        {
          linkName: "Home",
          linkRef: homeRef,
        }, {
          linkName: "About",
          linkRef: aboutRef,
        }, {
          linkName: "Employment",
          linkRef: employmentRef,
        }
      ]}/>
      <Home homeRef={ homeRef }/>
      <HorizontalBar direction="down" />
      <About aboutRef={ aboutRef }/>
      <HorizontalBar direction="up" />
      <Employment employmentRef={ employmentRef }/>
    </div>
  );
}

export default App;
