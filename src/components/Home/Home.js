import React from 'react';

import './Home.css'

const Home = () => (
 <div className="container">
   <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">For the fans</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
    <div className="card bg-dark text-white">
      <img src="https://raw.git.generalassemb.ly/jeff-chan-sf-sei-05/thfs-api/master/images/th-images/th-inside-1.PNG" className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
    <div className="card bg-dark text-white">
      <img src="https://raw.git.generalassemb.ly/jeff-chan-sf-sei-05/thfs-api/master/images/th-images/th-inside1.PNG" className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
 </div>
)

export default Home;