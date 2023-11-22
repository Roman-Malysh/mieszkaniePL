import React, {Suspense} from 'react';
import './App.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Loader} from './components/Loader';
import {SLider} from './components/Slider';
import { ProjectSection } from './components/ProjectSection';
import { ProjectMap } from './components/ProjectMap';
import { Prices } from './components/Prices';
import { Discount } from './components/Discount';

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
          <SLider />
          <ProjectSection />
          <ProjectMap/>
          <Prices/>
          <Discount/>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
