import React from 'react';
import CastListRow from "./CastListRow"
import "./CastList.css"

const CastList = (props) => {
  const list = props.castList.map((cast) => {
    return(
      <CastListRow
        key={cast._id}
        id={cast._id}
        birthDate={cast.birthDate}
        englishName={cast.englishName}
        japaneseName={cast.japaneseName}
        nickName={cast.nickName}
        mainPicture={cast.mainPicture}
        gender={cast.gender}
      />
    )
  });
  return (
    <div>
      This is the CastList component
      {list}
    </div>
  )
};

export default CastList;