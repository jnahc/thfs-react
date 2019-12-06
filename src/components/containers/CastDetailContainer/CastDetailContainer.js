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
    lastEpisodeAppeared: "",
    mainPicture: "",
    picture1: "",
    picture2: "",
    seasonsActive: [],
    couples: [""],
    comments: [""],
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_API_URL}/cast/${window.location.pathname.split('/')[2]}`)
      .then((res)=> {
        console.log('CastDetailContainer.js',res)
        this.setState({
          id:res.data.data._id,
          number: res.data.data.number,
          englishName: res.data.data.englishName,
          japaneseName: res.data.data.japaneseName,
          nickName: res.data.data.nickName,
          occupation: res.data.data.occupation,
          birthDate: res.data.data.birthDate,
          gender: res.data.data.gender,
          firstEpisodeAppeared: res.data.data.firstEpisodeAppeared,
          lastEpisodeAppeared: res.data.data.lastEpisodeAppeared,
          mainPicture: res.data.data.mainPicture,
          picture1: res.data.data.picture1,
          picture2: res.data.data.picture2,
          seasonsActive: res.data.data.seasonsActive,
          likes: res.data.data.likes,
          couples: res.data.data.couples,
          comments: res.data.data.comments
        })
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <>
        <h2>This is the CastDetailContainer</h2>
        <CastDetail castDetails={this.state} />
      </>
    )
  }
}

export default CastDetailContainer;