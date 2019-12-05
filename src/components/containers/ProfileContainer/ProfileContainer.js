import React, {Component} from 'react';
import Profile from '../../Profile/Profile';
import axios from 'axios'

class ProfileContainer extends Component {
  constructor () {
    super();
    this.state = {
      profile: {},
      firstName: '',
      lastName: '',
      favoriteCast: '',
    }
  }

  componentDidMount () {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{withCredentials: true,
    })
    .then((res) => {
      this.setState({
        profile: res.data.data,
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        favoriteCast: res.data.data.favoriteCast,
      });
    })
    .catch((err) => console.log(err));
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('uid');
    let newObj = Object.assign({}, this.state);
    delete newObj.profile;
    delete newObj.editProfile;
    axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, newObj, {
      withCredentials: true,
    })
      .then((res) => {
        this.props.setCurrentUser(res.data.data);
        this.props.history.push(`/profile`);
      })
      .catch((err) => console.log(err));
      this.setState({
        editProfile: false,
      });
    };
  
  render () {
    if (localStorage.getItem('uid')){
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Profile
                profile={this.state.profile}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                favoriteCast={this.state.favoriteCast}
              />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <>
          Please register or login.
        </>
      );
    };
  };
};

export default ProfileContainer