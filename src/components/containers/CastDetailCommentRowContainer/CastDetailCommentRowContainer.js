import React, {Component} from 'react';
import CastDetailCommentRow from "../../CastDetailCommentRow/CastDetailCommentRow";
import axios from 'axios';

class CastDetailCommentRowContainer extends Component {
state = {
  currentUser: "",
  currentCast: "",
  comment: {},
  author: ""
}

componentDidMount() {
  this.setProps()
  this.grabAuthorName()
}

setProps (){
  const currentUserId=this.props.currentUser
  const currentCastId=this.props.currentCast
  const commentInfo=this.props.comment
  this.setState({
    currentUser: currentUserId,
    currentCast: currentCastId,
    comment: commentInfo,
  })  
}

grabAuthorName () {
  axios.get(`${process.env.REACT_APP_API_URL}/users/first/${this.props.comment.author}`)
    .then((res) => {
      console.log(res)
      this.setState({
        author: res.data.data
      });
      })
    .catch((err) => console.log(err))
}  
  render () {
    return (
      <>
        <CastDetailCommentRow castName={this.props.castName} castProps={this.state} />
      </>
    )
  }
}

export default CastDetailCommentRowContainer