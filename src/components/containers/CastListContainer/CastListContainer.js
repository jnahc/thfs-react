import React, {Component} from 'react';
import CastList from "../../CastList/CastList"
import axios from 'axios';


class CastListContainer extends Component {
  state = {
    castList:[],
  }

  componentDidMount () {
    this.grabCastList();
  }

  grabCastList = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/cast`)
      .then((res) => {
        this.setState({
          castList: res.data.data
        });
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <div className="container">
        <CastList castList={this.state.castList} />
      </div>
    );
  };
};

export default CastListContainer;