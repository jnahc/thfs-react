import React from 'react';
import './CastListRow.css';
import {Link} from 'react-router-dom';

const CastListRow = (props) => {
  return (
    <>
      <div className="row">
        <h2><Link to={`/cast/`+props.id} >{props.englishName}</Link></h2>
        <dl>
          <dd>Birthday - {props.birthDate}</dd>
          <dd>Gender - {props.gender}</dd>
          <dd>Japanese Name - {props.japaneseName} </dd>
          <dd>Nickname - {props.nickName} </dd>
          <dd><img src={`${props.mainPicture}`} alt={props.englishName}/> </dd>
        </dl>
      </div>
    </>
  )
}

export default CastListRow;