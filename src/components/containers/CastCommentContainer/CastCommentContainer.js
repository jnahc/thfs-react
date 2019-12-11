import React, {Component} from 'react';
import CastDetailCommentList from "../../CastDetailCommentList/CastDetailCommentList"
import axios from 'axios';

class CastCommentContainer extends Component {
  constructor(){
    super();
    this.state = {
    commentList: [],
    castId: "",
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.grabCommentList();
    this.setProps();
  }  

  setProps () {
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
        this.grabCommentList()  
      })
      .catch((err) => console.log(err))
  }

  handleDelete = (postId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/comments/${postId}`)
      .then((res) => {
        console.log(res)
        this.grabCommentList()     
      })
      .catch((err) => console.log(err))
  }

  grabCommentList () {
    const castId = window.location.pathname.split('/')[2];
    axios.get(`${process.env.REACT_APP_API_URL}/comments/cast/${castId}`)
      .then((res) => {
        this.setState({
          commentList:[]
        })
        this.setState({
          commentList: res.data.comments
        });
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <div className="col">
        <CastDetailCommentList 
          currentCast={this.state.castId} 
          currentUser={this.props.currentUser} 
          commentList={this.state.commentList} 
          castName={this.props.castName} 
          handleDelete={this.handleDelete} 
          handleSubmit={this.handleSubmit} 
          grabCommentList={this.grabCommentList} 
        />
      </div>
    );
  };
};

export default CastCommentContainer;
