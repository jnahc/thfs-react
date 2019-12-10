import React, {Component} from 'react';
import Profile from '../../Profile/Profile';
import axios from 'axios'


class ProfileContainer extends Component {
  state = {
    profile: {},
    firstName: '',
    lastName: '',
    picture: '',
    editProfile: false,
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
        picture: res.data.data.picture,
      });
    })
    .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      picture: this.state.picture
    })
      .then((res) => {
        console.log(res)
        this.setEditFalse()
      })    
      .catch((err) => console.log(err))
  };
  
  setEditTrue = () => {
    this.setState({
      editProfile: true
    })
  }

  setEditFalse = () => {
    this.setState({
      editProfile: false
    })
  }

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
                picture={this.state.picture}
                setEditTrue={this.setEditTrue}
                setEditFalse={this.setEditFalse}
                editProfile={this.state.editProfile}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
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