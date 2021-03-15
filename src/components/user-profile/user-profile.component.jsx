import React from 'react';

import withData from '../../with-data';

const UserProfile = (props) => (
  <div className='container'>
    <h1>{props.name}</h1>
    <h2>{props.email}</h2>
  </div>
);

export default UserProfile;
