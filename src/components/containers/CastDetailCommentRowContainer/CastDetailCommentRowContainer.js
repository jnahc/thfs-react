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
      editComment: false,
      deleteComment: false,
      body: "",
    }
    this.onEdit = this.onEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          author: res.data.data
        });
        })
      .catch((err) => console.log(err))
  } 

  onEdit () {
    this.setState({
      editComment: true,
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

  handleSubmit = (event) => {
    event.preventDefault();
    let commentBody = {body:this.state.body}
    axios.put(`${process.env.REACT_APP_API_URL}/comments/${this.props.comment._id}`, commentBody)
      .then((res) => {
        console.log(res)
        this.setState({
          editComment: false,
        }) 
        // window.location.reload();
        // this.props.history.push('/cast')
        // this.props.grabCommentList()
      })
      .catch((err) => console.log(err))
  }

  // setEditCommentFalse () {
  //   this.setState({
  //     editComment:false
  //   })
  // }


  
  render () {
    return (
      <>
        <CastDetailCommentRow castName={this.props.castName} details={this.state} currentUser={this.props.currentUser} onEdit={this.onEdit} editComment={this.state.editComment} handleChange={this.handleChange} body={this.state.body} handleSubmit={this.handleSubmit} deleteComment={this.state.deleteComment} setDeleteFalse={this.setDeleteFalse} setDeleteTrue={this.setDeleteTrue} handleDelete={this.props.handleDelete} />
      </>
    )
  }
}

export default withRouter(CastDetailCommentRowContainer);