import React from 'react';
import Header from './components/Header';
import SpaceAgency from './components/SpaceAgency';
import Photos from './components/Photos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SpaceAgency />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
