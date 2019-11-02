import React from 'react';
import Header from './component/header';
import './App.scss';
import Headline from './component/headline';


function App() {
  return (
    <div className="App">
     
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click here to render posts"/>
        </section>
    </div>
  );
}

export default App;
