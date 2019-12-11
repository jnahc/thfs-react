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
              <img src={props.castDetails.mainPicture} className="cast-carousel d-block w-100 rounded-lg" alt={props.castDetails.englishName} />
          </div>
          <div className="carousel-item">
            <img src={props.castDetails.picture1} className="cast-carousel d-block w-100 rounded-lg" alt={props.castDetails.englishName} />
          </div>
          <div className="carousel-item">
            <img src={props.castDetails.picture2} className="cast-carousel d-block w-100 rounded-lg" alt={props.castDetails.englishName} />
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
        <h5 className="card-title cast-title">{props.castDetails.englishName} Profile</h5>
      </div>
      <div className="card-body">
        <dl>
          <dd><span className="cast-description-front">Birth Date</span>: {props.castDetails.birthDate.toLocaleString().substring(0, 10)}</dd>
          <dd><span className="cast-description-front"># of Comments</span>:  {props.castDetails.comments.length}</dd>
          <dd><span className="cast-description-front">Season Active</span>:  {props.castDetails.seasonsActive[0]} </dd>
          <dd><span className="cast-description-front">Episode first appeared</span>:  {props.castDetails.firstEpisodeAppeared}</dd>
          <dd><span className="cast-description-front">Episode last appeared</span>:  {props.castDetails.lastEpisodeAppeared}</dd>
          <dd><span className="cast-description-front">Gender</span>:  {props.castDetails.gender}</dd>
          <dd><span className="cast-description-front">Japanese Name</span>:  {props.castDetails.japaneseName}</dd>
          <dd><span className="cast-description-front">Occupation</span>:  {props.castDetails.occupation} </dd>
        </dl>
      </div>
    </div>
  );
};

export default CastDetail;