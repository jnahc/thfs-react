import React, {Component} from 'react';
import axios from 'axios';
import CastDetail from '../../CastDetail/CastDetail';
import CommentModalContainer from "../CommentModalContainer/CommentModalContainer";
import CastCommentContainer from "../CastCommentContainer/CastCommentContainer";

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
    this.setProps();
  };


  setProps = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/cast/${window.location.pathname.split('/')[2]}`)
      .then((res)=> {
        // console.log('setProps on CDC fired')
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
  };

  render () {
    return (
      <div className="container">
        <div className="col">
          <CastDetail 
            castDetails={this.state} 
          />
          {this.props.currentUser && <CommentModalContainer 
            currentUser={this.props.currentUser} 
            setProps={this.setProps} 
          />}
          <CastCommentContainer 
            castName={this.state.englishName} 
            castId={this.state.id} 
            currentUser={this.props.currentUser} 
          />
        </div>
      </div>
    );
  };
};

export default CastDetailContainer;