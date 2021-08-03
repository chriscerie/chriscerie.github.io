import React, { useRef } from 'react';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import Employment from './pages/Employment';
import Projects from './pages/Projects'
import Header from './components/Header';
import HorizontalBar from './components/HorizontalBar';
import circle_arrow from '../images/circle_arrow.png';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const employmentRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
        }, {
          linkName: "Projects",
          linkRef: projectsRef,
        },
      ]}/>
      <Home homeRef={ homeRef }/>
      <HorizontalBar direction="down">
        <div className="arrow-button">
          <img src={circle_arrow} alt="Arrow" />
        </div>
      </HorizontalBar>
      <About aboutRef={ aboutRef }/>
      <HorizontalBar direction="up" />
      <Employment employmentRef={ employmentRef }/>
      <HorizontalBar direction="down" />
      <Projects projectsRef={ projectsRef }/>
    </div>
  );
}

export default App;
