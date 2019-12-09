import React from 'react';
import './CastListRow.css';
import {Link} from 'react-router-dom';

const CastListRow = (props) => {
  return (
  <div className="card mb-3">
    <img src={`${props.mainPicture}`} className="card-img-top" alt={props.englishName} />
    <div className="card-body">
      <h5 className="card-title"><Link to={`/cast/`+props.id} >{props.englishName}</Link></h5>
      <dl>
        <dd>Birthday - {props.birthDate}</dd>
        <dd>Gender - {props.gender}</dd>
        <dd>Japanese Name - {props.japaneseName} </dd>
        <dd>Nickname - {props.nickName} </dd>
      </dl>
    </div>
  </div>
  )
}

export default CastListRow;