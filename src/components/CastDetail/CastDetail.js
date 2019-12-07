import React from 'react';

import "./CastDetail.css"

const CastDetail = (props) => {
  return (
    <div className="container">
      <h2>{props.castDetails.englishName} Profile</h2>
      <dl>
        <dd>Birth Date:{props.castDetails.birthDate}</dd>
        <dd># of Comments   {props.castDetails.comments.length}</dd>
        <dd>Season Active {props.castDetails.seasonsActive[0]} </dd>
        <dd>Episode first appeared   {props.castDetails.firstEpisodeAppeared}</dd>
        <dd>Episode last appeared   {props.castDetails.lastEpisodeAppeared}</dd>
        <dd>Gender {props.castDetails.gender}</dd>
        <dd>japaneseName {props.castDetails.japaneseName}</dd>
        <dd>likes {props.castDetails.likes}</dd>
        <dd>Main Picture <img src={props.castDetails.mainPicture} alt={props.castDetails.englishName}/> </dd>
        <dd>Picture 1 <img src={props.castDetails.picture1} alt={props.castDetails.englishName}/> </dd>
        <dd>Picture 2 <img src={props.castDetails.picture2} alt={props.castDetails.englishName}/> </dd>
      </dl>

    </div>
  )
}

export default CastDetail;