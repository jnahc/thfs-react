import React, {Component} from 'react';
import CastDetail from '../../CastDetail/CastDetail';
import axios from 'axios';

class CastDetailContainer extends Component {
  state = {
    id: "",
    number: "",
    englishName: "",
    japaneseName: "",
    nickName: "",
    occupation: "",
    birthDate: "",
    gender: "",
    firstEpisodeAppeared: "",
    lastEpsiodeAppeared: "",
    mainPicture: "",
    picture1: "",
    picture2: "",
    seasonsActive: [""],
  }

  render () {
    return (
      <>
        <CastDetail />
      </>
    )
  }
}

export default CastDetailContainer;