import React from 'react';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile-border" style={{paddingTop:50}}>
      <h1 className="userName" id="first-last-name-pro">{props.firstName}  {props.lastName}'s Profile</h1>
      <p><strong>Date Joined: </strong> {props.profile.dateJoined && props.profile.dateJoined.toLocaleString().substring(0, 10)}</p>
      {/* <button id="edit-button1" className="btn-warning1 editButton" onClick={() => props.onEdit()}>Edit</button> */}
  </div>
  );
};

export default Profile;