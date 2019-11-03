import React from 'react';
import Header from './component/header';
import './App.scss';
import Headline from './component/headline';

const temArr=[{
  fName: 'Do',
  lName: 'Ngoc Tu',
  email: 'dongoctu@example.com',
  age: 50,
  online: true

}];

function App() {
  return (
    <div className="App">
     
        <Header />
        <section className="main">
          <Headline header='Posts' desc="Click here to render posts" temArr={temArr}/>
        </section>
    </div>
  );
}

export default App;
