import React from 'react';
import './Profile.css';

const Profile = (props) => {
  if (props.editProfile){
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h3>Edit Profile</h3>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={props.firstName} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={props.lastName} />
            </div>
            <div className="form-group">
              <label htmlFor="picture">Picture</label>
              <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="picture" name="picture" value={props.picture} />
            </div>
            <div id="edit-button1" className="btn editButton" onClick={props.handleSubmit}>Save</div>
            <div id="edit-button1" className="btn" onClick={props.setEditFalse}>Cancel</div>
          </form>
        </div>
      </div>

   
    )

  } else {
    return (
      <div className="profile-box" style={{paddingTop:50}}>
        <h1 className="userName" id="first-last-name-pro">{props.firstName}  {props.lastName}'s Profile</h1>
        <p><strong>Date Joined: </strong> {props.profile.dateJoined && props.profile.dateJoined.toLocaleString().substring(0, 10)}</p>
        <p> <img src={props.profile.picture} alt=""/> </p>
        <p>{props.profile.email}</p>
        <div id="edit-button1" className="btn btn-warning editButton" onClick={props.setEditTrue}>Edit</div>
    </div>
    );
  }
};

export default Profile;