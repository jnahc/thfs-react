import React, {Component} from 'react';
import CastDetailCommentList from "../../CastDetailCommentList/CastDetailCommentList"
import axios from 'axios';

class CastCommentContainer extends Component {
  state = {
    castId: "",
  }

  componentDidMount () {
    this.props.grabCommentList();
    this.setProps();
  }  

  setProps = () => {
    let currentCast = window.location.pathname.split('/')[2];
    this.setState({
      castId: currentCast,      
    })
  }

  handleSubmit = (id, body) => {    
    console.log('handleSubmit body & id',id, body)
    axios.put(`${process.env.REACT_APP_API_URL}/comments/${id}`, body)
      .then((res) => {
        console.log(res)
        this.props.grabCommentList()  
      })
      .catch((err) => console.log(err))
  }

  handleDelete = (commentId, userId, castId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/comments/${userId}/${castId}/${commentId}`)
      .then((res) => {
        console.log(res)
        this.props.grabCommentList()     
      })
      .catch((err) => console.log(err))
  }

  // grabCommentList = () => {
  //   const castId = window.location.pathname.split('/')[2];
  //   axios.get(`${process.env.REACT_APP_API_URL}/comments/cast/${castId}`)
  //     .then((res) => {
  //       this.setState({
  //         commentList:[]
  //       })
  //       this.setState({
  //         commentList: res.data.comments
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  render () {
    return (
      <div>
        <h3 className="mt-2">Comments</h3>
        <CastDetailCommentList 
          currentCast={this.state.castId} 
          currentUser={this.props.currentUser} 
          commentList={this.props.commentList} 
          castName={this.props.castName} 
          handleDelete={this.handleDelete} 
          handleSubmit={this.handleSubmit} 
          grabCommentList={this.props.grabCommentList} 
        />    
      </div>
    );
  };
};

export default CastCommentContainer;
