import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class HomeCommentRowContainer extends Component {
  render () {
    return (
      <div>
        This is the HomeCommentRowContainer
      </div>
    )
  };
};

export default withRouter(HomeCommentRowContainer);