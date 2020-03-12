import React from 'react';
import HomeCommentContainer from "../containers/HomeCommentContainer/HomeCommentContainer";

import './Home.css'

const Home = () => (
 <div className="container ">
   <div className="jumbotron jumbotron-fluid home-title rounded shadow-lg color-change-2xa" >
      <div className="container">
        <h1 className="display-4">Terrace House Fan Site</h1>
        <p className="lead">For the fans...</p>
        <p>Let's talk Terrace House</p>
      </div>
    </div>
    <HomeCommentContainer/>
    {/* <div className="card border-0 ">
      <img src="https://raw.git.generalassemb.ly/jeff-chan-sf-sei-05/thfs-api/master/images/th-images/th-inside-1.PNG" className="card-img kenburns-top rounded shadow-lg" alt="..." />
      <div className="card-img-overlay">  
      </div>
    </div> */}
 </div>
)

export default Home;