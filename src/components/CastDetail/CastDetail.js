import React from 'react';

import "./CastDetail.css"

const CastDetail = (props) => {
  return (
    <div className="card">
      {/* <img src={props.castDetails.mainPicture} className="card-img-top" alt={props.castDetails.englishName} /> */}
      <div id="carousel-th-cast-picture" className="carousel slide" data-ride="carousel" data-interval="false" data-pause="hover" >
        <ol className="carousel-indicators">
          <li data-target="#carousel-th-cast-picture" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-th-cast-picture" data-slide-to="1"></li>
          <li data-target="#carousel-th-cast-picture" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={props.castDetails.mainPicture} className="d-block w-100 rounded-lg" alt={props.castDetails.englishName} />
          </div>
          <div className="carousel-item">
            <img src={props.castDetails.picture1} className="d-block w-100 rounded-lg" alt={props.castDetails.englishName} />
          </div>
          <div className="carousel-item">
            <img src={props.castDetails.picture2} className="d-block w-100 rounded-lg" alt={props.castDetails.englishName} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-th-cast-picture" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-th-cast-picture" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.castDetails.englishName} Profile</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-body">
        <dl>
          <dd>Birth Date:{props.castDetails.birthDate}</dd>
          <dd># of Comments {props.castDetails.comments.length}</dd>
          <dd>Season Active {props.castDetails.seasonsActive[0]} </dd>
          <dd>Episode first appeared {props.castDetails.firstEpisodeAppeared}</dd>
          <dd>Episode last appeared {props.castDetails.lastEpisodeAppeared}</dd>
          <dd>Gender {props.castDetails.gender}</dd>
          <dd>japaneseName {props.castDetails.japaneseName}</dd>
          <dd>likes {props.castDetails.likes}</dd>
          <dd>Occupation: {props.castDetails.occupation} </dd>
          {/* <dd>Picture 1 <img src={props.castDetails.picture1} alt={props.castDetails.englishName}/> </dd>
          <dd>Picture 2 <img src={props.castDetails.picture2} alt={props.castDetails.englishName}/> </dd> */}
        </dl>
      </div>
    </div>
  );
};

export default CastDetail;