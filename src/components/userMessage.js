import React from 'react'

function UserOldMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
        <div>
          <p>welcome to the site, please complete the below</p>
          <ol>
            <li>Newsletter</li>
            <li>Complete your profile</li>
            <li>Confirm your email</li>
          </ol>
        </div>
      ) : (<p>Please Sign In</p>)}
    </div>
  )
}

export default UserOldMessage