import React, {Component} from 'react';

class HomeCommentRow extends Component {
  state = {
    comment: {},
  };

  componentDidMount() {
    this.setState({
    })
    // console.log(this.state);  
  };

  render () {
  
    return (
      <div>
        {/* {this.state.comment} */}
        {this.props.comment.author.firstName}
      </div>
    );
  };
};


export default HomeCommentRow;