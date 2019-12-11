import React from 'react';
import './CastListRow.css';
import {Link} from 'react-router-dom';

const CastListRow = (props) => {
  return (
  <div className="card mb-3 cast-list-card" style={{
    backgroundImage: `url(${props.mainPicture})`,
    }}>
    <img src={`${props.mainPicture}`} className="m-3 card-img-top cast-list-image round-lg" alt={props.englishName}  />
    <div className="card-body cast-list-body">
      <h5 className="card-title"><Link className="cast-title" to={`/cast/`+props.id} >{props.englishName}</Link></h5>
      <dl>
        <dd>
          <span className="cast-description-front">Birthday</span> - {props.birthDate}</dd>
        <dd>
          <span className="cast-description-front">Gender</span> - {props.gender}</dd>
        <dd>
          <span className="cast-description-front">Japanese Name</span> - {props.japaneseName} </dd>
        <dd>
          <span className="cast-description-front">Nickname</span> - {props.nickName} </dd>
      </dl>
    </div>
  </div>
  )
}

export default CastListRow;