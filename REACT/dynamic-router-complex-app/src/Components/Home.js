import React from 'react'
import Confirm from './Confirm';
import './Home.css';

function Home() {
  return (
    <div className='home-page'>
      <h2>Welcome Home</h2>
      <div className="card">
        <img
          src="img_avatar.png"
          alt="Avatar"
          style="width:100%" />
        <div class="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <Confirm />
    </div>
  );
};

export default Home;