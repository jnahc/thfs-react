import React from 'react';

import "./CastDetail.css"

const CastDetail = (props) => {
  return (
    <div className="card">
      <img src={props.castDetails.mainPicture} className="card-img-top" alt={props.castDetails.englishName} />
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