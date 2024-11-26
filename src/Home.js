import React from 'react';
import Mycarousel from './Mycarousel';
import Aboutme from './Aboutme';
import Myprojects from './Myprojects';
import Seprator from './Seprator';

function Home() {
  return (
    <div className="container-fluid">
      <Mycarousel />
      <Aboutme />
      <Seprator />
      <Myprojects />
    </div>
  );
}

export default Home;
