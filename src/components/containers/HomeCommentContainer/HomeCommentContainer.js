import React, {Component} from 'react';
import HomeCommentList from "../../Home/HomeCommentList.js"
import axios from 'axios';

class HomeCommentContainer extends Component {
  state = {
    allCommentList: [""],
  }

  componentDidMount () {
    this.grabAllCommentList();
  }

  grabAllCommentList = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/comments/`)
      .then((res) => {
        this.setState({
          allCommentList: res.data.data
        });
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <div>
        <p>This is the HomeCommentContainer</p>
        <HomeCommentList
          allCommentList={this.state.allCommentList}
        />
      </div>
    );
  };
};

export default HomeCommentContainer;