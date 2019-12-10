import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CastDetailCommentRow from "../../CastDetailCommentRow/CastDetailCommentRow";
import axios from 'axios';

class CastDetailCommentRowContainer extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: "",
      currentCast: "",
      comment: {},
      author: "",
      authorPic: "",
      editComment: false,
      deleteComment: false,
      body: "",
    }
    this.onEdit = this.onEdit.bind(this);
    this.setEditFalse = this.setEditFalse.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setDeleteFalse = this.setDeleteFalse.bind(this);
    this.setDeleteTrue = this.setDeleteTrue.bind(this);
  }

  componentDidMount() {
    this.setProps()
    this.grabAuthorName()

  }

  setProps (){
    const currentUserId=this.props.currentUser
    const currentCastId=this.props.currentCast
    const commentInfo=this.props.comment
    const commentBody=this.props.comment.body
    this.setState({
      currentUser: currentUserId,
      currentCast: currentCastId,
      comment: commentInfo,
      body: commentBody ,
    })  
  }

  grabAuthorName () {
    axios.get(`${process.env.REACT_APP_API_URL}/users/first/${this.props.comment.author}`)
      .then((res) => {
        this.setState({
          author: res.data.data,
          authorPic: res.data.data2
        });
        })
      .catch((err) => console.log(err))
  } 

  onEdit () {
    this.setState({
      editComment: true,
    })
  }

  setEditFalse() {
    this.setState({
      editComment: false,
    })
  }

  setDeleteTrue (){    
    this.setState({
      deleteComment: true
    })
  }

  setDeleteFalse (){    
    this.setState({
      deleteComment: false
    })
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let commentBody = {body:this.state.body}
  //   axios.put(`${process.env.REACT_APP_API_URL}/comments/${this.props.comment._id}`, commentBody)
  //     .then((res) => {
  //       console.log(res)
  //       this.setState({
  //         editComment: false,
  //       }) 

  //     })
  //     .catch((err) => console.log(err))
  // }




  
  render () {
    return (
      <>
        <CastDetailCommentRow
        //STATES & PROPS SECTION
        details={this.state} 
        body={this.state.body} 
        castName={this.props.castName} 
        currentUser={this.props.currentUser} 

        // FORM SECTION
        handleChange={this.handleChange} 
        // EDITS
        onEdit={this.onEdit} 
        editComment={this.state.editComment} 
        setEditFalse={this.setEditFalse}
        handleSubmit={this.props.handleSubmit}
        // DELETES
        deleteComment={this.state.deleteComment} 
        setDeleteFalse={this.setDeleteFalse} 
        setDeleteTrue={this.setDeleteTrue} 
        handleDelete={this.props.handleDelete} 
        />
      </>
    )
  }
}

export default withRouter(CastDetailCommentRowContainer);